import React, { useEffect, useState } from "react";
import { Shemmer } from "./Shemmer";
import { useParams } from "react-router-dom";

import useResMenu from "./constants/useResMenu";
import { RestaurantCategories } from "./RestaurantCategories";

export const RestaurantMenu = () => {
  const [show, setShow] = useState(null);
  const { resId } = useParams();
  const resInfo = useResMenu(resId);

  if (resInfo === null) return <Shemmer />;

  const {
    name,
    areaName,
    costForTwoMessage,
    avgRatingString,
    totalRatingsString,
    cuisines,
  } = resInfo?.cards[2]?.card?.card?.info;
  const { title } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2].card.card;
  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

  const categor = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;

  const categories = categor.filter(
    (c) =>
      c.card?.card?.["@type"] ===
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  );

  // console.log(categories)

  return (
    <div>
      <h1 className="font-bold text-4xl">{name}</h1>
      <h3 className="font-medium">
        {avgRatingString} ({totalRatingsString}) {costForTwoMessage}
      </h3>
      <p>
        <small>{cuisines.join(" , ")}</small>
      </p>
      <p>{areaName}</p>
      <br />
      {categories.map((items, i) => (
        <RestaurantCategories
          key={i}
          data={items?.card?.card}
          show={i === show ? true : false}
          setShow={() => setShow(i === show ? null : i)}
        />
      ))}
    </div>
  );
};
