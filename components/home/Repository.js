import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RepositoryAction } from "../../config/redux/action/repositoryAction";
import Pagination from "./Pagination";

export default function Repository() {
  const dispacth = useDispatch();
  const [count, setCount] = useState(1)
  const { data } = useSelector((state) => state.repos);
  console.log(data)
  useEffect(() => {
    dispacth(RepositoryAction("nhana557", count));
  }, [count]);
  return (
    <div className="grow h-max p-4">
      <div className="grid grid-cols-3 gap-5 mt-3">
        {data?.map((item, i) => (
          <div
            class="w-full max-w-sm rounded-lg shadow-md bg-gray-800 border-gray-700"
            key={i}
          >
            <div class="flex flex-col items-start pb-10">
              <h5 class=" text-xl font-medium text-white p-3">{item.name}</h5>
              <span class="text-sm text-gray-400 ml-5">{item.visibility}</span>
              <h5 class="mb-1 text-md font-medium text-white p-3">{item.language}</h5>
              <h5 class="mb-1 text-md font-medium text-white p-3">{item.description}</h5>
              {/* <div class="flex mt-4 space-x-3 md:mt-6">
                <a
                  href="#"
                  class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Add friend
                </a>
                <a
                  href="#"
                  class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700"
                >
                  Message
                </a>
              </div> */}
            </div>
          </div>
        ))}
      </div>
      {data.length > 5 && <Pagination count={count} setCount={setCount}/>}
    </div>
  );
}
