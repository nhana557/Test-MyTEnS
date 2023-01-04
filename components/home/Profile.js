import Image from "next/image";
import styles from "../../styles/Home.module.css";
import { useSelector, useDispatch } from "react-redux";
import { profileAction } from "../../config/redux/action/profile";
import { useEffect } from "react";

export default function Profile({username}) {
  const dispacth = useDispatch();
  const { profile } = useSelector((state) => state.profile);
  console.log("ini res user", username);
  useEffect(() => {
    dispacth(profileAction(username));
  }, [username]);
  return (
    <div className="w-1/4 h-auto mt-4">
      <div className="w-full max-w-sm p-5 rounded-lg shadow-md bg-gray-800 border-gray-700">
        <div className="p-14">
          <div className="flex flex-col items-center pb-10">
            <Image
            src={profile.avatar_url}
            alt="img_profile"
            width={100}
            height={100}
            className={`${styles.img} w-40 h-40 mb-3 text-center rounded-full shadow-lg`}
          />
            <h5 className="mb-1 text-xl font-medium text-white">
                {profile.name}
            </h5>
            <span className="text-sm text-gray-500 dark:text-gray-400">
                {profile.login} 
            </span>
            <div className="flex mt-4 space-x-3 md:mt-6">
              <span
                className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 ">
                <span className="mr-5">{profile.followers} followers</span>
              </span>
              <span
                className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 "
              >
                <span>{profile.following} following</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
