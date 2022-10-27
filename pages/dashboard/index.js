import { redirect, retObject, checkerToken } from "lib/listFunct";
import { useContext, useEffect, useMemo, useState } from "react";
import { allCst, checkUid, getTotalCust } from "lib/arangoDb";
import { withIronSessionSsr } from "iron-session/next";
import fetchJson, { FetchError } from "lib/fetchJson";
import UsersTableCst from "components/table/UsersCst";
import { GlobalContext } from "context/global";
import { sessionOptions } from "lib/session";
import { useRouter } from "next/router";

export const getServerSideProps = withIronSessionSsr(async function ({
  req,
  res,
  query,
}) {
  var user = await req.session.user;
  if (!user || !user.access_token) {
    return redirect("/");
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

  global.atob = require("atob");

  const uid = JSON.parse(atob(user.access_token.split(".")[1]));
  const checkUids = await checkUid(uid.user_id);
  const cst = await allCst(
    query.start ? parseInt(query.start) : 0,
    query.length ? parseInt(query.length) : 10
  );
  const totalCust = await getTotalCust();

  if (checkUids.length < 1) {
    return redirect("/");
  }

  return retObject({
    isLogin: true,
    fullName: checkUids[0].fullname,
    pict:
      checkUids[0].pict !== "" ? checkUids[0].pict : "/img/user-default.png",
    outletPict: "/img/ski.png",
    cst: cst,
    totalCust: totalCust[0].total,
  });
},
sessionOptions);

const DashboardSKI = (props) => {

  const { globalCtx, globalAct } = useContext(GlobalContext);
  const [totalRows, setTotalRows] = useState(props.totalCust);
  const [perPage, setPerPage] = useState(10);
  const router = useRouter();
  const data = props.cst;

  const logout = async () => {
    const body = {
      uri: "logout",
    };
    try {
      const lg = await fetchJson("/api/prot/post", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    } catch (error) {
      if (error instanceof FetchError) {
        globalAct.setErrorMsg(error.data.message);
      }
    }
    await router.push("/");
  };


  return (
    <div className="w-full p-3 flex flex-col gap-y-4">
      <div className="w-full py-3 px-3">
        <button className="py-3 py-2 flex items-center justify-center" onClick={() => logout()}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" />
          </svg>
        </button>
      </div>
      <div>
        {useMemo(() => {
          console.log("tabel");
          return (
            <UsersTableCst
              data={data}
              totalRows={totalRows}
              handlePageChange={(page) => {
                router.replace(
                  `/dashboard/?start=${
                    (page - 1) * perPage
                  }&length=${perPage}`
                );
              }}
              handlePerRowsChange={(newpage) => {
                setPerPage(newpage);
                router.replace(
                  `/dashboard/?start=0&length=${newpage}`
                );
              }}
            />
          );
        }, [data])}
      </div>
    </div>
  );
};

export default DashboardSKI;