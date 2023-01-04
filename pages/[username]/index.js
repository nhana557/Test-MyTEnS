import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Pagination } from "flowbite-react";
import {useRouter} from "next/router";
import Profile from "../../components/home/Profile";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { profileAction } from "../../config/redux/action/profile";
import moment from "moment/moment";
import { RepositoryAction } from "../../config/redux/action/repositoryAction";


export default function Repository() {
  const dispacth = useDispatch();
  const router = useRouter()
  const { username } = router.query;
  const [page, setPage] = useState(1)
  const { data } = useSelector((state) => state.repos);
  const { profile } = useSelector((state) => state.profile)
  console.log(data)
  const onPageChange = (e) =>{
    setPage(e)
  }
  useEffect(() => {
    dispacth(RepositoryAction(username, page));
    dispacth(profileAction(username))
  }, [page, username]);

  return (
    <>
    <Navbar />
    <div class="container h-full bg-gray-700  flex  xl:flex-row flex-col">
      <Profile profile={profile}/>
      <div className="grow h-max p-4">
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
              className="w-full max-w-sm rounded-lg shadow-md bg-gray-800 border-gray-700"
              key={i}
            >
              <div className="flex flex-col items-start ">
                <h5 className=" text-xl font-medium text-white p-3">{item.name}</h5>
                <span className="text-sm text-gray-400 ml-5">{item.visibility}</span>
                <h5 className=" text-md font-medium text-gray-400 p-3">Language:  {item.language ? item.language : "unknown"}</h5>
                <div className="flex align-text-bottom justify-between  p-3">
                  <p className="text-sm font-medium text-gray-400 mr-4">update: {moment(item.pushed_at).format("DD-MM-YYYY")}</p>
                  <p className="text-sm font-medium text-gray-400 bottom-2">Create: {moment(item.created_at).format("DD-MM-YYYY")}</p>
                </div>
              
              </div>
            </div>
          ))}
          </div>
          <Pagination
              layout="pagination"
              currentPage={page}
              totalPages={data?.length - 1}
              onPageChange={onPageChange}
              className="w-max flex mt-10 justify-center mb-10 xl:absolute bottom-15 left-1/2 mx-auto"
            />
      </div>
    </div>
    <Footer />
    </>
  );
}
