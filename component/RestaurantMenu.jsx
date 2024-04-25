import React, { useEffect, useState } from 'react'
import { Shemmer } from './Shemmer'
import { useParams } from 'react-router-dom'

export const RestaurantMenu = () => {
    const [resInfo, setResInfo] = useState(null)
    const { resId } = useParams()

    useEffect(() => {
        fetchData()
    }, [])
    const fetchData = async () => {
        const data = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=26.49690&lng=80.32460&restaurantId=${resId}&catalog_qa=undefined&isMenuUx4=true`)
        const json = await data.json()
        console.log(json.data.cards)
        setResInfo(json.data)
    }

    if (resInfo === null) return <Shemmer />

    const { name, areaName, costForTwoMessage, avgRatingString, totalRatingsString, cuisines } = resInfo?.cards[2]?.card?.card?.info
    const { title } = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2].card.card
    const { itemCards } = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card

    return (
        <div>
            {/* <img src={'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/'+ cloudinaryImageId} alt={name}/> */}
            <h1>{name}</h1>
            <h3>{avgRatingString} ({totalRatingsString}) {costForTwoMessage}</h3>
            <p><small>{cuisines.join(' , ')}</small></p>
            <p>{areaName}</p>
            <h1>{title}</h1>
            {itemCards.map((items) => (
                <ul key={items.card.info.id}>
                    <li>
                        <div>
                            <h6 style={{ color: items.card.info.ribbon.topBackgroundColor }}>
                                {items.card.info.ribbon.text}
                            </h6>
                            <h3>{items.card.info.name}</h3>
                            <span>Rs.{items.card.info.price / 100 || items.card.info.defaultPrice / 100}</span>
                            <p>Rating {items.card.info.ratings.aggregatedRating.rating}({items.card.info.ratings.aggregatedRating.ratingCountV2})</p>
                            <p>{items.card.info.description}</p>
                        </div>
                        <div>
                            <img src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/${items.card.info.imageId}`} />
                        </div>
                    </li>
                </ul>
            ))}
        </div>
    )
}
