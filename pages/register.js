import { memo } from "react";
import Image from "next/image";
import Microscope from "../public/img/Microscope.png";
import { useRouter } from "next/router";

const Register = ({ onSubmit }) => {
  const router = useRouter();
  return (
    <>
      <div className="w-full flex flex-col justify-center items-center h-screen">
        <div className="w-full pt-3 px-5 md:p-3 md:w-2/6 md:rounded-xl  md:bg-purple-600/50 flex flex-col justify-center items-center h-6/6">
          {/* image */}
          <div className="w-72 md:w-80 h-auto p-10 rounded-xl flex justify-center items-center bg-purple-600/50 md:bg-transparent">
            <Image src={Microscope} priority />
          </div>
          {/* headline */}
          <div className="w-full h-auto py-3">
            <div className="flex flex-col px-5 space-y-2">
              <p className="text-4xl ">Register available soon....</p>
              <button
                className="w-full rounded-full bg-gradient-to-r from-blue-500 to-red-400 py-2 flex justify-center items-center text-white font-bold text-lg gap-2"
                onClick={() => {
                  router.replace("/");
                }}
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
                    d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75"
                  />
                </svg>
                Back to login page
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default memo(Register);
