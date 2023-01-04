import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SearchUserAction } from "../../config/redux/action/search";
import UserList from "../UserList";
import { useSession, signIn, signOut } from "next-auth/react"

export default function Navbar() {
    const dispacth = useDispatch()
    const { data: session } = useSession()

    const [searching, setSearching] = useState()
    const { search : {errors, items} } = useSelector(state => state.search)
    console.log(session)
    const handleSearch = (e) =>{
        e.preventDefault()
        setSearching(e.target.value)
    }
    useEffect(() =>{
        if(searching){
          dispacth(SearchUserAction(searching))
        }
    },[searching])
  return (
    <nav className="px-2 sm:px-4 py-2.5 bg-gray-900 sticky w-full z-20 top-0 left-0 border-b border-gray-600 mb-5">
      <div className="container flex flex-wrap items-center justify-between mx-auto md:order-2">
        <div>

        </div>
          <div>
            <div className="relative bg-gray-400 w-96">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  aria-hidden="true"
                  className="w-5 h-5 text-gray-500 dark:text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  ></path>
                </svg>
              </div>
              <input
                onChange={handleSearch}
                type="search"
                id="search"
                className="block w-full p-4 pl-10 text-md  border  rounded-lg  bg-gray-800 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                placeholder="Search username"
                required
              />
              <UserList data={ errors ? "" : items } setSearching={setSearching}/>
            </div>
          </div>
          <div>
            <button
                onClick={() => {
                  if(session){
                    signOut()
                  }else{
                    signIn()
                  }
                }}
                type="button"
                className="text-white justify-self-center font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 bg-blue-600 hover:bg-blue-700 focus:ring-blue-800"
            >
                {session ? "Sign Out" :  "Sign In"}
            </button>
          </div>
          <button
            data-collapse-toggle="navbar-sticky"
            type="button"
            className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-sticky"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
      </div>
    </nav>
  );
}
