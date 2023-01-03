import Image from "next/image";
import styles from '../../styles/Home.module.css'
import { useSelector, useDispatch } from "react-redux";
import { profileAction } from "../../config/redux/action/profile";
import { useEffect } from "react";


export default function Profile(){
    const dispacth = useDispatch()
    const { profile } = useSelector(state => state.profile)
    console.log("ini res", profile)
    useEffect(() =>{
        dispacth(profileAction())
    }, [])
    return(
        <div class="w-1/4 h-screen bg-red-400 ">
            <div className="mt-6">
                <Image src={profile.avatar_url} width={200} height={200}
                className={`${styles.img} rounded-full m-auto`}
                />
            </div>
            <p>{profile.name}</p>
            <p>{profile.login}</p>
            <p>{profile.followers} followers</p>
            <p>{profile.following} following</p>
        </div>
    )
}