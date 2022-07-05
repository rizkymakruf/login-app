import { useContext, useEffect, useState } from "react";
import { getLayout } from "components/layout/Navbar";
import { GlobalContext } from "context/global";
import UsersTable from "components/table/Users";
import { withIronSessionSsr } from "iron-session/next";
import { sessionOptions } from "lib/session";
import { allCst, checkUid, getTotalCust } from "lib/arangoDb";
import { redirect, retObject, checkerToken } from "lib/listFunct";
import { useRouter } from "next/router";
import SearchUserCst from "components/search/UserCst";
import UsersTableCst from "components/table/UsersCst";
import fetchJson, { FetchError } from "lib/fetchJson";

// ssr
export const getServerSideProps = withIronSessionSsr(async function ({
  req,
  res,
  query,
}) {
  var user = await req.session.user;
  if (!user || !user.access_token) {
    return retObject({ isLogin: false });
  }

  const validationToken = await checkerToken(user);
  if (validationToken.error) {
    await req.session.destroy();
    return redirect("/");
  }

  if (validationToken.status === "refresh") {
    user = {
      isLoggedIn: true,
      access_token: validationToken.access_token,
      refresh_token: validationToken.refresh_token,
    };
    req.session.user = user;
    await req.session.save();
  }

  const uid = JSON.parse(atob(user.access_token.split(".")[1]));
  const checkUids = await checkUid(uid.user_id);

  // naaaaa

  const cst = await allCst();
  const totalCust = await getTotalCust();

  if (checkUids.length < 1) {
    return redirect("/");
  }

  return retObject({
    isLogin: true,
    fullName: checkUids[0].fullname,
    cst: cst,
    totalCust: totalCust[0].total,
  });
},
sessionOptions);

const ManageUsersCst = (props) => {
  const { globalCtx, globalAct } = useContext(GlobalContext);
  const [data, setData] = useState(props.cst);
  const router = useRouter();
  const [totalRows, setTotalRows] = useState(props.totalCust);
  const [perPage, setPerPage] = useState(10);

  useEffect(() => {
    globalAct.setFullname(props.fullName);
    globalAct.setAdminMode("ski");
  }, []);

  const handlePageChange = (page) => {
    fetchData((page - 1) * perPage, perPage);
  };

  const handlePerRowsChange = (newPerPage, page) => {
    fetchData(0, newPerPage);
  };

  const fetchData = async (start, page) => {
    globalAct.setIsFetch(true);
    const body = {
      uri: "customer",
      start: start,
      length: page,
    };
    try {
      const res = await fetchJson("/api/prot/post", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      setData(res.data);
      setTotalRows(res.total);
    } catch (error) {
      console.log("error", error);
      if (error instanceof FetchError) {
        globalAct.setErrorMsg(error.data.message);
      } else {
        globalAct.setErrorMsg("An unexpected error happened");
      }
    }
    globalAct.setIsFetch(false);
  };

  return (
    <div className="w-full p-3 flex flex-col gap-y-3">
      <div>
        <SearchUserCst
          globalAct={globalAct}
          globalCtx={globalCtx}
          setData={setData}
        />
      </div>
      <div>
        <UsersTableCst
          data={data}
          handlePageChange={handlePageChange}
          handlePerRowsChange={handlePerRowsChange}
          totalRows={totalRows}
        />
      </div>
    </div>
  );
};

export default ManageUsersCst;
ManageUsersCst.getLayout = getLayout;
