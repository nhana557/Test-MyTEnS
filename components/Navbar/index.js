import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SearchUserAction } from "../../config/redux/action/search";
import UserList from "../UserList";
import { Button, Dropdown, Navbar } from "flowbite-react";
import { useSession, signIn, signOut } from "next-auth/react";
import SearchInput from "../base/input/SearchInput";
import Link from "next/link";
import Image from "next/image";

export default function Nav() {
  const dispacth = useDispatch();
  const [isOpen, setIsOpen] = useState(false)
  const { data: session } = useSession();
  const [searching, setSearching] = useState();
  const { search } = useSelector((state) => state.search);
  // console.log(session.user);

  const handleOpen = (e) =>{
    e.preventDefault()
    setIsOpen((prevState) => !prevState)
  }

  const handleSearch = (e) => {
    e.preventDefault();
    dispacth(SearchUserAction(searching));
  };

  return (
    <Navbar
      className="px-2 sm:px-4 py-auto bg-gray-900 sticky w-full z-20 top-0 left-0 border-b border-gray-600 mb-5 h-20"
      fluid={true}
      rounded={true}
    >
      <Navbar.Brand href="/">
        <span className="self-center whitespace-nowrap text-xl font-semibold text-white ml-10">
          Github Clone
        </span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        {!session ? (
          <Button onClick={() => signIn()}>Login</Button>
        ) : (
          <>
          <Image
            src={session.user.image}
            width={400}
            height={400}
            className="w-12 h-12 rounded-full mr-10 hover:cursor-pointer"
            onClick={handleOpen}
          />
          {isOpen &&
            <div  class="z-10  absolute right-32 divide-y rounded shadow w-58 bg-gray-500 divide-gray-600">
                <div class="py-1 text-sm text-white">
                    <p className="px-3 text-center text-xl">{session.user.name}</p>
                    <p className="p-3 text-lg">{session.user.email}</p>
                </div>
                <hr/>
                <div class="py-1">
                  <span class="block px-4 py-2 text-sm  hover:bg-gray-600 text-gray-200
                   hover:text-white hover:cursor-pointer"
                  onClick={() => signOut()}
                  >Log Out</span>
                </div>
            </div>
          }
          </>
        )}
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <SearchInput handleSearch={handleSearch} setSearching={setSearching}>
          <UserList data={search.items} setSearching={setSearching} />
        </SearchInput>
      </Navbar.Collapse>
    </Navbar>
  );
}
