import React from "react";
import { useDispatch } from "react-redux";
import { addItem } from "./Redux/cartSlice";

export const CategoriesList = ({ items }) => {
//   console.log(items);
const dispatch = useDispatch()
const handleAdd=(item)=>{
    dispatch(addItem(item))
    console.log(item)
}
  return (
    <div>
      {items.map((item) => (
       
        <div key={item.card.info.id}>
        {/* console.log(item.card.info.id) */}
        <div className="grid grid-cols-2 gap-x-16 py-8" >
          <div>
            <div>
              <h6
                style={{
                  color: item.card.info.ribbon.topBackgroundColor,
                }}
              >
                {item.card.info.ribbon.text}
              </h6>
              <h3 className="font-bold text-2xl">
                {item.card.info.name}
              </h3>
              <span>
                Rs.
                {item.card.info.price / 100 ||
                  item.card.info.defaultPrice / 100}
              </span>
              <p>
                Rating {item.card.info.ratings.aggregatedRating.rating}
                (
                {item.card.info.ratings.aggregatedRating.ratingCountV2}
                )
              </p>
              <p>{item.card.info.description}</p>
            </div>
          </div>
          <div>
            <div className="relative">
              <img
                className="w-40 h-40 rounded float-end"
                src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/${item.card.info.imageId}`}
              />
              <div className="absolute inset-y-0 bottom-0 right-0">
                <button className="bg-orange-200 p-2 rounded text-sm" onClick={()=>handleAdd(item)}>Add</button>
              </div>
            </div>
          </div>
        </div>
        </div>
      ))}
    </div>
  );
};
