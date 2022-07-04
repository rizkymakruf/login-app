import { getLayout } from "components/layout/Navbar";
import DashboardCardSKI from "components/card/DashboardCardSKI";
import { withIronSessionSsr } from "iron-session/next";
import { sessionOptions } from "lib/session";
import { useContext, useEffect } from "react";
import { allOutlet, checkUid, PenjualanQty, PenjualanRp } from "lib/arangoDb";
import { useRouter } from "next/router";
import { redirect, retObject, checkerToken } from "lib/listFunct";
import Line from "components/chart/line";
import Line1 from "components/chart/line1";
import { GlobalContext } from "context/global";

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
  // console.log(checkUids);

  const outlet = await allOutlet();
  const qty = await PenjualanQty();
  const rp = await PenjualanRp();

  if (checkUids.length < 1) {
    return redirect("/");
  }

  return retObject({
    isLogin: true,
    fullName: checkUids[0].fullname,
    allOutlet: outlet,
    qty: qty,
    rp: rp,
  });
},
sessionOptions);

const DashboardSKI = (props) => {
  const router = useRouter();
  {
    /* Default */
  }
  const { globalCtx, globalAct } = useContext(GlobalContext);
  useEffect(() => {
    globalAct.setFullname(props.fullName);
    // globalAct.setIsFetch(false);
    // globalAct.setErrorMsg("");
  }, []);
  {
    /* Default */
  }

  return (
    <div className="w-full p-3 flex flex-col gap-y-4">
      {/* <div>
        <hr />
      </div> */}
      <div className="flex items-center gap-x-4">
        <div className="w-full grid grid-cols-2 gap-4">
          <div className="w-full border border-gray-200 rounded-md hover:shadow-md px-3 py-6">
            <p className="pb-2 text-red-500 font-semibold">
              Pendapatan Perbulan
            </p>
            <div className="bg-white w-full h-44 rounded-md flex flex-col justify-between">
              <Line1 qty={props.qty} />
            </div>
          </div>
          <div className="w-full border border-gray-200 rounded-md hover:shadow-md px-3 py-6">
            <p className="pb-2 text-red-500 font-semibold">
              Penjualan Perbulan
            </p>
            <div className="bg-white  w-full h-44 rounded-md flex flex-col justify-between">
              <Line rp={props.rp} />
            </div>
          </div>
        </div>
      </div>
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

export default DashboardSKI;
DashboardSKI.getLayout = getLayout;
