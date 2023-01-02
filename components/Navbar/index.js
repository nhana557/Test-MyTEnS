
export default function Navbar() {
    return(
        <nav>
            <div className="container my-5 flex justify-center ">
                <input type="text" className="placeholder-shown:border-gray-500 w-1/4 h-10 border rounded-lg p-4" placeholder="Search..."/>
                <button className="rounded-full bg-cyan-400 w-24">Search</button>
            </div>
        </nav>
    )
}