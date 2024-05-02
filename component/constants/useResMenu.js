import { useState,useEffect } from "react"
import { Menu_Api } from "./Api"

const useResMenu=(resId)=>{
    const [resInfo,setResInfo] = useState(null)

    useEffect(() => {
        fetchData()
    }, [])
    const fetchData = async () => {
        const data = await fetch(Menu_Api + resId)
        const json = await data.json()
        // console.log(json.data.cards)
        setResInfo(json.data)
    }
    return resInfo
}
export default useResMenu