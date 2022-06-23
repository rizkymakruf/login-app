import { getLayout } from "components/layout/Navbar";
import DashboardCardSKI from "components/card/DashboardCardSKI";
import { useContext, useEffect } from "react";
import { useRouter } from "next/router";
import { GlobalContext } from "context/global";
import AddOtlet from "components/card/AddOtlet";
import { withIronSessionSsr } from "iron-session/next";
import { sessionOptions } from "lib/session";
import { allOutlet, checkUid } from "lib/arangoDb";
import { redirect, retObject, checkerToken } from "lib/listFunct";

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

  const outlet = await allOutlet();

  if (checkUids.length < 1) {
    return redirect("/");
  }

  return retObject({
    isLogin: true,
    fullName: checkUids[0].fullname,
    allOutlet: outlet,
  });
},
sessionOptions);

const Otlets = (props) => {
  const router = useRouter();
  // console.log(props);
  {
    /* Default */
  }
  const { globalCtx, globalAct } = useContext(GlobalContext);
  useEffect(() => {
    globalAct.setIsFetch(false);
    globalAct.setErrorMsg("");
    // router.prefetch("/config/dashboard");
  }, []);
  // useEffect(() => {
  //   console.log("fetch data status : ", globalCtx.isFetch);
  // }, [globalCtx]);
  {
    /* Default */
  }
  // const data = [
  //   {
  //     outlet: "Red White Coffee",
  //     order: "120",
  //     product: "321",
  //     subcategory: "11",
  //     route: "/dashboard",
  //   },
  //   {
  //     outlet: "Blue Green Coffee",
  //     order: "55",
  //     product: "98",
  //     subcategory: "87",
  //     route: "/dashboard",
  //   },
  //   {
  //     outlet: "White Black Coffee",
  //     order: "80",
  //     product: "90",
  //     subcategory: "9",
  //     route: "/dashboard",
  //   },
  //   {
  //     outlet: "Red White Coffee",
  //     order: "88",
  //     product: "108",
  //     subcategory: "8",
  //     route: "/dashboard",
  //   },
  //   {
  //     outlet: "Blue Green Coffee",
  //     order: "11",
  //     product: "201",
  //     subcategory: "7",
  //     route: "/dashboard",
  //   },
  //   {
  //     outlet: "White Black Coffee",
  //     order: "51",
  //     product: "100",
  //     subcategory: "5",
  //     route: "/dashboard",
  //   },
  // ];

  return (
    <div className="w-full p-3 flex flex-col gap-y-4">
      <AddOtlet globalAct={globalAct} globalCtx={globalCtx} />
      <div>
        <hr />
      </div>

      <div className="w-full grid grid-cols-3 items-center gap-4">
        {props.allOutlet.map((dat, idx) => {
          return (
            <div className="w-full">
              <DashboardCardSKI
                globalAct={globalAct}
                globalCtx={globalCtx}
                otlet={dat}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Otlets;
Otlets.getLayout = getLayout;