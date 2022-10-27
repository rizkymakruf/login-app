import DataTable from "react-data-table-component";
import { GlobalContext } from "context/global";
import { useContext, memo, useState, useEffect } from "react";
import fetchJson, { FetchError } from "lib/fetchJson";
import { useRouter } from "next/router";
import Loading from "components/card/LoadingMini";

const UsersTableCst = ({
  data,
  search,
  totalRows,
  handlePageChange,
  handlePerRowsChange,
}) => {
  const [pending, setPending] = useState(true);
  const [rows, setRows] = useState([]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setRows(data);
      setPending(false);
    }, 2000);
    return () => clearTimeout(timeout);
  }, []);

  const { globalCtx, globalAct } = useContext(GlobalContext);
  const router = useRouter();
  const columns = [
    {
      name: <div className="font-bold text-red-500">Username</div>,
      grow: 2,
      cell: (a) => (
        <div className="w-full h-full py-1 flex flex-row gap-1 items-center">
          <p className="text-xs font-bold">{a.username}</p>
        </div>
      ),
    },
    {
      name: <div className="font-bold text-red-500">Email</div>,
      grow: 2,
      cell: (a) => (
        <div className="w-full h-full py-1 flex flex-row gap-1 items-center">
          <p className="text-xs font-bold">{a.email}</p>
        </div>
      ),
    },
    {
      name: (
        <div className="w-full text-center font-bold text-red-500">Active</div>
      ),
      grow: 1,
      cell: (a) => (
        <div className="flex flex-row items-center justify-center gap-x-2 w-full">
          <label className="switch">
            <input
              type="checkbox"
              checked={a.active}
              globalCtx={globalCtx}
              globalAct={globalAct}
              onClick={async function handleSubmit(e) {
                e.preventDefault();
                globalAct.setIsFetch(true);
                // globalAct.setSelectedData(a);

                const body = {
                  uri: "customer/status",
                  key: a.key,
                  active: !a.active,
                };

                try {
                  await fetchJson("/api/prot/patch", {
                    method: "PATCH",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(body),
                  });
                  router.replace("/dashboard");
                } catch (error) {
                  console.log("error", error);
                  if (error instanceof FetchError) {
                    globalAct.setErrorMsg(error.data.message);
                  } else {
                    globalAct.setErrorMsg("An unexpected error happened");
                  }
                }
              }}
            />
            <span className="slider round"></span>
          </label>
        </div>
      ),
    },
  ];

  return (
    <div className="w-full h-auto relative ">
      <div className="shadow-md border-2 rounded-md">
        {search ? (
          <DataTable
            columns={columns}
            data={data}
            responsive={true}
            highlightOnHover={true}
            paginationRowsPerPageOptions={[10, 15, 20, 25, 30, 50]}
            pagination
          />
        ) : (
          <DataTable
            columns={columns}
            data={data}
            responsive={true}
            highlightOnHover={true}
            pagination
            paginationServer
            paginationRowsPerPageOptions={[10, 15, 20, 25, 30, 50]}
            paginationTotalRows={totalRows}
            onChangeRowsPerPage={handlePerRowsChange}
            onChangePage={handlePageChange}
            progressPending={pending}
            progressComponent={<Loading />}
          />
        )}
      </div>
    </div>
  );
};

export default memo(UsersTableCst);
