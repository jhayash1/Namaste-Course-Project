import React, { useState, useEffect, useContext } from 'react'
import { Shemmer } from './Shemmer'
import { Restaurant, withLabel } from './Restaurant'
import { Link } from 'react-router-dom'
import { Main_Api } from './constants/Api'
import useStatus from './constants/useStatus'
import UserContext from './constants/UserContext'

export const Body = () => {
  const [apps, setApps] = useState([])
  const [filterSearch, setFilterSearch] = useState([])
  const [searchText, setSearchText] = useState('')

  useEffect(() => {
    fetchData()
  }, [])
  const fetchData = async () => {
    const data = await fetch(Main_Api)
    const json = await data.json()
    // console.log(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle)
    const restaurantin = json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
    setApps(restaurantin);
    setFilterSearch(restaurantin)
  }


  const handle = () => {
    const fil = apps.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()))
    setFilterSearch(fil)
  }
  const online = useStatus()

  const RestaurantPromoted = withLabel(Restaurant)  //HOC

  const {setuserName ,logginUser} = useContext(UserContext)

  if (online === false) return <h1>Your internet connection is break</h1>
  return apps.length === 0 ? (<Shemmer />) : (
    <>
      <div className="">
        <div className="flex gap-3 justify-center">
          <input className='border border-black' value={logginUser} onChange={(e)=>setuserName(e.target.value)} />
          <input type="text" value={searchText}
            className="focus:ring-2 focus:ring-blue-500 focus:outline-none appearance-none text-sm leading-6 text-slate-900 placeholder-slate-400 rounded-md py-2 px-5 ring-1 ring-slate-500 shadow-sm" aria-label="Filter projects" placeholder="Search Restaurant..." onChange={(e) => setSearchText(e.target.value)} />
          <button onClick={handle}
            className="hover:bg-blue-400 group flex items-center rounded-md bg-blue-500 text-white text-sm font-medium p-3 shadow-sm">Search</button>
        </div>
        <div className="flex-wrap flex gap-5 justify-between mt-5">
          {
            filterSearch.map((items) => (
              <Link key={items.info.id}
                to={`restaurant/${items.info.id}`}>
                  {items.info.promoted ? <RestaurantPromoted datas={items}/>: <Restaurant datas={items} />}
                
              </Link>
            ))
          }
        </div>
      </div>
    </>
  )
}
