import { redirect, retObject, checkerToken } from "lib/listFunct";
import { withIronSessionSsr } from "iron-session/next";
import fetchJson, { FetchError } from "lib/fetchJson";
import { GlobalContext } from "context/global";
import { useContext, useEffect } from "react";
import { sessionOptions } from "lib/session";
import { useRouter } from "next/router";
import { checkUid } from "lib/arangoDb";
// component
import FormLogin from "components/form/FormLogin";
// image
import Image from "next/image";
import Tropy from "public/img/Thropy.png";
import Globe from "public/img/Globe.png";

export const getServerSideProps = withIronSessionSsr(async function ({ req }) {
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

  global.atob = require("atob");

  const uid = JSON.parse(atob(user.access_token.split(".")[1]));
  const checkUids = await checkUid(uid.user_id);

  return retObject({
    isLogin: true,
    fullName: checkUids[0].fullname,
  });
}, sessionOptions);

const Administration = (props) => {
  const router = useRouter();

  const { globalCtx, globalAct } = useContext(GlobalContext);
  useEffect(() => {
    globalAct.setIsFetch(false);
    globalAct.setErrorMsg("");
  }, []);
  {
    /* Default */
  }
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
    <div className="w-full h-screen overflow-hidden">
      {props.isLogin ? (
        <div className="w-full flex flex-col justify-center items-center h-screen">
          <div className="w-4/6 px-5 p-5 md:w-2/6 rounded-xl  bg-purple-600/50 flex flex-col justify-center items-center h-6/6">
            {/* image */}
            <div className="w-72 md:w-80 h-auto p-10 rounded-xl flex justify-center items-center md:bg-transparent">
              <Image src={Globe} priority />
            </div>
            {/* headline */}
            <div className="w-full h-auto py-3">
              <div className="flex flex-col">
                <p className="text-md">Hi {props.fullName},</p>
                <p className="text-3xl">You have logged in</p>
              </div>
            </div>
            <div className="w-full h-auto space-y-3">
              <button
                onClick={() => {
                  router.push("/dashboard");
                }}
                className="w-full h-auto bg-blue-500/40 py-2 flex items-center justify-center rounded-full border-2 border-blue-500/50 text-white font-semibold gap-2"
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
                    d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                  />
                </svg>
                Dashboard
              </button>
              <button
                onClick={() => logout()}
                disabled={globalCtx.isFetch ? "disabled" : ""}
                className="w-full h-auto bg-red-500/40 py-2 flex items-center justify-center rounded-full border-2 border-red-500/50 text-white font-semibold gap-2"
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
                Logout
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="w-full flex flex-col justify-center items-center h-screen p-0">
          <div className="w-full pt-3 px-5 my-0 md:my-8 md:py-3 md:w-2/6 md:rounded-xl  md:bg-purple-600/50 flex flex-col justify-center items-center h-6/6">
            {/* image */}
            <div className="w-72 md:w-80 h-auto p-10 rounded-xl flex justify-center items-center bg-purple-600/50 md:bg-transparent">
              <Image src={Tropy} priority />
            </div>
            {/* headline */}
            <div className="w-full h-auto py-3">
              <div className="flex flex-col">
                <p className="md:text-5xl text-4xl font-">Let's</p>
                <p className="md:text-5xl text-4xl font-">Get started!</p>
              </div>
            </div>
            <div className="w-full h-auto">
              <FormLogin
                // Default Form
                globalCtx={globalCtx}
                globalAct={globalAct}
                onSubmit={async function handleSubmit(e) {
                  e.preventDefault();
                  globalAct.setIsFetch(true);

                  const body = {
                    username: e.currentTarget.username.value,
                    password: e.currentTarget.password.value,
                    uri: "login",
                  };

                  try {
                    const res = await fetchJson("/api/post", {
                      method: "POST",
                      headers: { "Content-Type": "application/json" },
                      body: JSON.stringify(body),
                    });
                    router.push("/dashboard");
                  } catch (error) {
                    if (error instanceof FetchError) {
                      globalAct.setErrorMsg(error.data.message);
                    } else {
                      globalAct.setErrorMsg("An unexpected error happened");
                    }
                  }

                  globalAct.setIsFetch(false);
                }}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default Administration;
