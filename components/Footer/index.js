import { Footer } from "flowbite-react";
import Link from "next/link";
import { BsFacebook } from "react-icons/bs"
import { BsGithub } from "react-icons/bs"
import { BsLinkedin } from "react-icons/bs";

function Footers() {
  return (
    <footer className="shadow md:px-6 md:py-8 xl:mt-56 bg-gray-900 py-8 bottom-0 w-full flex justify-between mt-36">
      <span></span>
        <span className="block text-xl  text-start text-gray-400 ml-20">© 2022 <a href="https://github.com/nhana557" className="hover:underline">Taryana</a>
        </span>
        <span className="flex">
          <Link href="https://www.facebook.com/nhana.r.94/" target="_blank">
            <BsFacebook className="text-3xl text-white mr-10"/>
          </Link>
          <Link href="https://github.com/nhana557" target="_blank">
            <BsGithub className="text-3xl text-white mr-10"/>
          </Link>
          <Link href="https://www.linkedin.com/in/taryana10/" target="_blank">
            <BsLinkedin className="text-3xl text-white mr-10"/>
          </Link>
        </span>
    </footer>
  );
}

export default Footers;
