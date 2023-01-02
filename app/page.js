import Image from "next/image";
import Profile from "../components/Profile.js";

export default function Home() {
    return (
        <>
            <div class="container flex">
                <Profile />
                <div class="grow h-screen bg-blue-200 pl-4">
                    <div class="grid grid-cols-3 gap-5">
                        <div className="bg-blue-400 w-full h-32">01</div>
                        <div className="bg-blue-400 w-full h-32">02</div>
                        <div className="bg-blue-400 w-full h-32">03</div>
                        <div className="bg-blue-400 w-full h-32">04</div>
                        <div className="bg-blue-400 w-full h-32">05</div>
                        <div className="bg-blue-400 w-full h-32">06</div>
                        <div className="bg-blue-400 w-full h-32">09</div>
                    </div>
                </div>
            </div>
        
        </>
    )
  }