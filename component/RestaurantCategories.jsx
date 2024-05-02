import React, { useState } from "react";
import { CategoriesList } from "./CategoriesList";

export const RestaurantCategories = ({ data, show, setShow }) => {
  // console.log(data)
  const handle = () => {
    setShow();
  };
  return (
    <div>
      <div id="accordion-collapse" data-accordion="collapse">
        <h2 id="accordion-collapse-heading-1">
          <button
            className="flex items-center justify-between w-full p-5 font-medium rtl:text-right gap-3 bg-gray-200 rounded"
            onClick={handle}
          >
            <span className="text-2xl font-sans font-bold">
              {data.title} ({data.title.length})
            </span>
            <svg
              data-accordion-icon
              className="w-3 h-3 rotate-180 shrink-0"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5 5 1 1 5"
              />
            </svg>
          </button>
        </h2>
        <div id="accordion-collapse-body-1">
          <div className="p-5 ">
            {show && (
              <CategoriesList
                key={data.itemCards.title}
                items={data.itemCards}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
