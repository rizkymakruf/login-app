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
    <div className="w-full flex flex-col">
      <div className="w-full py-3 px-5 bg-gradient-to-r from-purple-500 to-red-400 flex items-center justify-between">
        <div className="flex justify-center items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6 text-white"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
            />
          </svg>

          <p className="text-xl text-white font-bold">List Customer</p>
        </div>
        <button
          className="w-10 h-10 flex items-center justify-center bg-white rounded-full"
          onClick={() => logout()}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
            />
          </svg>
        </button>
      </div>
      <div className="p-5">
        {useMemo(() => {
          console.log("tabel");
          return (
            <UsersTableCst
              data={data}
              totalRows={totalRows}
              handlePageChange={(page) => {
                router.replace(
                  `/dashboard/?start=${(page - 1) * perPage}&length=${perPage}`
                );
              }}
              handlePerRowsChange={(newpage) => {
                setPerPage(newpage);
                router.replace(`/dashboard/?start=0&length=${newpage}`);
              }}
            />
          );
        }, [data])}
      </div>
    </div>
  );
};

export default DashboardSKI;
