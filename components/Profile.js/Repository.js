
import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { RepositoryAction } from "../../config/redux/action/repositoryAction"


export default function Repository() {
    const dispacth = useDispatch()
    const {data}  = useSelector(state => state.repos)
    console.log("ini repos: ", data)
    useEffect(() =>{
        dispacth(RepositoryAction())
    }, [])
  return (
    <div class="grow h-screen bg-blue-200 p-4">
                <div class="grid grid-cols-3 gap-5">
                    {data?.map((item, i) =>(
                        <div className="bg-blue-400 w-full h-32 rounded-lg" key={i}>
                            <h3 className="text-xl">{item.name}</h3>
                            <p >{item.visibility}</p>
                            <p>{item.language}</p>
                        </div>
                    ))}
                </div>
            </div>
    )
}
