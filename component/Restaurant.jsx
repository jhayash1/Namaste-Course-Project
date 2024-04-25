import React from 'react'

export const Restaurant = (props) => {
    const {datas}= props
    const { name, locality, areaName, cuisines, cloudinaryImageId, costForTwo,avgRating,header } = datas?.info
    // const {header} = datas?.info?.aggregatedDiscountInfoV3
    // console.log(header)
    return (
      <> 
        <div className="card">
          <img src={'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/' + cloudinaryImageId} />
          <p>{header}</p>
          <h3>{name}</h3>
          <small>{avgRating} Rating</small>
          {/* <p>{costForTwo}</p> */}
          <p>{cuisines.join(' , ')}</p>
          <p> {areaName}</p>
        </div>
      </>
    )
}
