import React, { useContext } from 'react'
import UserContext from './constants/UserContext'

export const Restaurant = (props) => {
    const {datas}= props
    const { name, locality, areaName, cuisines, cloudinaryImageId, costForTwo,avgRating,header } = datas?.info
    // const {header} = datas?.info?.aggregatedDiscountInfoV3
    // console.log(header)
    const {logginUser} = useContext(UserContext)
    return (
      <> 
        <div className="w-60 h-100 shadow-xl rounded-xl p-3 font-sans font-semibold min-h-96">
          <img 
          className="w-60 h-40 rounded"
          src={'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/' + cloudinaryImageId}
          />
          <p >{header}</p>
          <p className='font-bold text-1xl'>{name}</p>
          <small>{avgRating} Rating</small>
          {/* <p>{costForTwo}</p> */}
          <p>{cuisines.join(' , ')}</p>
          <p> {areaName}</p>
          <p >{logginUser}</p>
        </div>
      </>
    )
}


//Higher order component

export const withLabel=(Restaurant)=>{
  return(props)=>{
    return(
      <div>
        <label>Promoted</label>
        <Restaurant {...props}/>
      </div>
    )
  }
}
