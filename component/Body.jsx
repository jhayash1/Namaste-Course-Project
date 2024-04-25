import React, { useState, useEffect } from 'react'
import { Shemmer } from './Shemmer'
import { Restaurant } from './Restaurant'
import { Link } from 'react-router-dom'

export const Body = () => {
    const [apps, setApps] = useState([])
    const [filterSearch,setFilterSearch] = useState([])
    const [searchText, setSearchText] = useState('')

    useEffect(() => {
      fetchData()
    }, [])
    const fetchData = async () => {
      const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.49690&lng=80.32460&is-seo-homepage-enabled=true&page_type=DE')
      const json = await data.json()
      console.log(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants[0].info.aggregatedDiscountInfoV3.header)
      const restaurantin = json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
      setApps(restaurantin);
      setFilterSearch(restaurantin)
    }
    
  
    const handle=()=>{
      const fil = apps.filter((res)=>res.info.name.toLowerCase().includes(searchText.toLowerCase()))
      setFilterSearch(fil)
    }
  return apps.length ===0 ?(<Shemmer/>):(
    <>
          <input type="text" value={searchText} onChange={(e) => setSearchText(e.target.value)} />
          <button onClick={handle}>Search</button>
          <div className="flex">
            {
              filterSearch.map((items) => (
                <Link  key={items.info.id}
                 to={`restaurant/${items.info.id}`}>
                    <Restaurant datas={items} />
                </Link>
              ))
            }
          </div>
        </>
  )
}
