
// function Pagination({count, setCount, data}) {
//     const incrementCount = (e) =>{
//         e.preventDefault()
//         if (count >= data.length){
//           return;
//         }else{
//           const plus = count + 1
//           setCount(plus)
//         }
//     }
//     const decrementCount = (e) =>{
//         e.preventDefault()
//         if(count <= 1){
//             return setCount(1)
//         }else{
//           const min = count - 1
//           setCount(min)
//         }
//     }
//   return (
//     <div className="w-full flex mt-10 justify-between mb-10 xl:sticky bottom-15 mx-auto">
//       <button
//         className="inline-flex items-center px-10 py-5 text-md mr-10 font-medium  border  rounded-lg  bg-gray-800 border-gray-700 text-gray-400 hover:text-white "
//         onClick={decrementCount}
//       >
//         <svg
//           aria-hidden="true"
//           className="w-5 h-5 mr-2"
//           fill="currentColor"
//           viewBox="0 0 20 20"
//           xmlns="http://www.w3.org/2000/svg"
//         >
//           <path
//             fill-rule="evenodd"
//             d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z"
//             clip-rule="evenodd"
//           ></path>
//         </svg>
//         Previous
//       </button>
//       <span
//         className="w-max text-3xl text-white mt-3 mr-20"
//       >{`${count} / ${data.length - 1}`}</span>
//       <button
//         className="inline-flex items-center px-10 py-5 text-md font-medium border rounded-lg bg-gray-800 border-gray-700 text-gray-400 hover:text-white "
//         onClick={incrementCount}
//       >
//         Next
//         <svg
//           aria-hidden="true"
//           className="w-5 h-5 ml-2"
//           fill="currentColor"
//           viewBox="0 0 20 20"
//           xmlns="http://www.w3.org/2000/svg"
//         >
//           <path
//             fill-rule="evenodd"
//             d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
//             clip-rule="evenodd"
//           ></path>
//         </svg>
//       </button>
//     </div>
//   );
// }

// export default Pagination;
