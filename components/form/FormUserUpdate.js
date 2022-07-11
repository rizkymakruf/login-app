import { useState, useEffect, useRef } from "react";

export default function FormUserUpdate({
  myRef,
  globalCtx,
  globalAct,
  onSubmit,
  update,
  setUpdate,
  slide,
  setSlide,
  isFetch,
  errorMessage,
  cancelRemove,
  handleImage,
  removeMe,
}) {
  //   const [detail, setDetail] = useState(false);
  //   const [infoLengkap, setInfoLengkap] = useState(false);

  //   useEffect(() => {
  //     !detail && setInfoLengkap(false);
  //   });
  const [imageFile, setImageFile] = useState([]);
  const inputFileImage = useRef(null);

  const upLoad = (props, ref) => {
    inputFileImage.current.click();
  };

  const resetForm = (e) => {
    e.preventDefault();
    document.querySelector("form").reset();
    setSlide([]);
    setUpdate([]);
  };

  return (
    <>
      <div className="w-full h-auto">
        <form onSubmit={onSubmit}>
          <div className="w-full h-full grid grid-cols-2 gap-4 select-none p-5">
            <div className="w-full space-y-2">
              <input
                name="key"
                defaultValue={globalCtx.selectedData.key}
                type="hidden"
              ></input>
              <div className="w-full">
                <p>Username</p>
                <input
                  name="username"
                  autocomplete="off"
                  className="rounded-md p-1 border-2 border-orange-500/50 w-full focus:outline-blue-500 "
                  defaultValue={globalCtx.selectedData.username}
                  placeholder={globalCtx.selectedData.username}
                ></input>
              </div>
              <div className="w-full">
                <p>Fullname</p>
                <input
                  name="fullname"
                  autocomplete="off"
                  className="rounded-md p-1 border-2 border-orange-500/50 w-full focus:outline-blue-500 "
                  defaultValue={globalCtx.selectedData.fullname}
                  placeholder={globalCtx.selectedData.fullname}
                ></input>
              </div>
              <div className="w-full">
                <p>Email</p>
                <input
                  name="email"
                  autocomplete="off"
                  className="rounded-md p-1 border-2 border-orange-500/50 w-full focus:outline-blue-500 "
                  defaultValue={globalCtx.selectedData.email}
                  placeholder={globalCtx.selectedData.email}
                ></input>
              </div>
              <div className="w-full">
                <p>Phone Number</p>
                <input
                  name="phone"
                  autocomplete="off"
                  className="rounded-md p-1 border-2 border-orange-500/50 w-full focus:outline-blue-500 "
                  defaultValue={globalCtx.selectedData.phone}
                  placeholder={globalCtx.selectedData.phone}
                ></input>
              </div>
              <div className="w-full">
                <p>Outlet</p>
                <select
                  name="outlet"
                  autocomplete="off"
                  className="w-full rounded-md border-2 border-orange-500/50"
                >
                  {globalCtx.listOutlet.map((dat, idx) => {
                    return (
                      <option
                        selected={globalCtx.selectedData.outlet?.key == dat.key}
                        value={dat.key}
                      >
                        {dat.name}
                      </option>
                    );
                  })}
                </select>
              </div>
            </div>
            <div className="w-full">
              <div className="w-full">
                <p>Alamat</p>
                <textarea
                  name="address"
                  className="rounded-md p-1 border-2 border-orange-500/50 w-full h-32"
                  defaultValue={globalCtx.selectedData.address}
                  placeholder={globalCtx.selectedData.address}
                ></textarea>
              </div>
              <div className="w-full h-auto relative pt-2">
                <p>Foto user</p>
                <input
                  accept="image/png, image/gif, image/jpeg"
                  type="file"
                  name="pict"
                  id="fileContract"
                  ref={inputFileImage}
                  style={{ display: "none" }}
                  onChange={(e) => handleImage(e)}
                  disabled={isFetch ? "disabled" : ""}
                />

                <div className="w-full h-auto relative flex-row gap-2 flex items-center  pt-2">
                  <div
                    onClick={upLoad}
                    className="w-full h-32 relative z-0 flex text-gray-700 flex-col justify-center items-center rounded h-passport border-2 border-dashed bg-white backdrop-filter bg-opacity-20 backdrop-blur-lg"
                  >
                    {isFetch ? (
                      <svg
                        className="animate-spin h-5 w-5 text-blue-300"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                    ) : (
                      <>
                        <h3 className="text-gray-700">
                          <i className="fas fa-cloud-download-alt"></i>
                        </h3>

                        <p className="font-light text-xs text-black text-center px-3">
                          Drop here or click here
                        </p>
                      </>
                    )}
                  </div>
                </div>

                {errorMessage && (
                  <p className="px-4 text-red-600">{errorMessage}</p>
                )}

                <div className="w-full h-auto relative px-4 py-3 flex justify-end gap-1">
                  <div className="w-full h-auto flex justify-end gap-2">
                    <button
                      // onClick={onSubmit}
                      // disabled={globalCtx.isFetch ? "disabled" : ""}
                      className="px-6 h-8 bg-green-500/30 text-green-500 border-2 shadow-md hover:bg-green-500/50 border-green-300 font-semibold rounded overflow-hidden"
                    >
                      Save
                    </button>
                    <span
                      className={`${
                        !isFetch && "invisible"
                      } flex absolute h-4 w-4 top-3 right-4 -mt-1 -mr-1`}
                    >
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-50 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-4 w-4 bg-red-300"></span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
