import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RepositoryAction } from "../../config/redux/action/repositoryAction";
import Pagination from "./Pagination";
import { useSession } from "next-auth/react";
import moment from "moment";

export default function Repository() {
  const dispacth = useDispatch();
  const {data: session} = useSession()
  const [count, setCount] = useState(1)
  const { data } = useSelector((state) => state.repos);
  console.log(session)
  useEffect(() => {
    if(session){
      // dispacth(RepositoryAction(session., count));
    }
    dispacth(RepositoryAction("nhana557", count));
  }, [count]);
  return (
    <div className="grow h-max p-4 mb-10">
      <div className="text-3xl text-gray-300 hover:cursor-pointer hover:text-white my-5 w-max"
          onClick={() => window.location.reload()}
        >
          <p>
            Repository
          </p>
        </div>
        <div className="grid grid-cols-3 gap-5 mt-3">
          {data?.map((item, i) => (
          <div
            class="w-full max-w-sm rounded-lg shadow-md bg-gray-800 border-gray-700"
            key={i}
          >
            <div class="flex flex-col items-start ">
              <h5 class=" text-xl font-medium text-white p-3">{item.name}</h5>
              <span class="text-sm text-gray-400 ml-5">{item.visibility}</span>
              <h5 class=" text-md font-medium text-gray-400 p-3">Language:  {item.language ? item.language : "unknown"}</h5>
              <div className="flex align-text-bottom justify-between  p-3">
                <p class="text-md font-medium text-gray-400 mr-12">update: {moment(item.pushed_at).format("DD-MM-YYYY")}</p>
                <p class="text-md font-medium text-gray-400 bottom-2">Create: {moment(item.created_at).format("DD-MM-YYYY")}</p>
              </div>
            
            </div>
          </div>
        ))}
        </div>
      {data.length > 5 && <Pagination count={count} setCount={setCount}/>}
    </div>
  );
}
