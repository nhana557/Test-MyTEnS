import Image from "next/image";
import styles from '../../styles/home.module.css'

export default function Profile(){
    return(
        <div class=" w-1/4 h-screen bg-red-400 ">
            <div className="mx-16">
                <Image src="https://avatars.githubusercontent.com/u/34388387?v=4" width={200} height={200}
                className={`${styles.img} rounded-full`}
                />
            </div>
        </div>
    )
}