import React from "react";

function Pagination() {
  return (
    <div className="w-1/2 flex  mt-12 mx-auto">
      <a
        href="#"
        class="inline-flex items-center px-10 py-5 text-md mr-3 font-medium  border  rounded-lg  bg-gray-800 border-gray-700 text-gray-400 hover:text-white "
      >
        <svg
          aria-hidden="true"
          class="w-5 h-5 mr-2"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z"
            clip-rule="evenodd"
          ></path>
        </svg>
        Previous
      </a>
      <a
        href="#"
        class="inline-flex items-center px-10 py-5 text-md font-medium  border  rounded-lg  bg-gray-800 border-gray-700 text-gray-400  hover:text-white "
      >
        Next
        <svg
          aria-hidden="true"
          class="w-5 h-5 ml-2"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </a>
    </div>
  );
}

export default Pagination;
