import { useEffect, useState } from "react"
// console.log('use Status')
const useStatus=()=>{
    const [onlineStatus, setOnlineStatus] = useState(true)
    useEffect(()=>{
        window.addEventListener("offline", () => {
            setOnlineStatus(false)
        });
        window.addEventListener("online", () => {
            setOnlineStatus(true)
        });
    },[])
    return onlineStatus
}
export default useStatus