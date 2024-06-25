import React, { useState, useEffect } from "react";
import Restaurentcard, { WillOfferLabel } from "./Restaurentcard.jsx";
import Shimmer from "./Shimmer.jsx";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus.jsx";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredRestaurents, setFilteredRestaurents] = useState([]);

  const EnhancedRestaurentCard = WillOfferLabel(Restaurentcard);
  console.log(listOfRestaurants);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    const usefulData =
      json.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
    setListOfRestaurants(usefulData);
    setFilteredRestaurents(usefulData); // because we are initializing filteredRestaurents with the useful data.
  };

  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false)
    return (
      <h1>Looks like you are offline || check your internet connection</h1>
    );

  return listOfRestaurants.length === 0 || !listOfRestaurants ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="flex justify-around m-4">
        <div className="search">
          <input
            type="text"
            className="search-box px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter the restaurant name"
            value={searchText}
            onChange={(inputText) => {
              setSearchText(inputText.target.value);
            }}
          />
          <button
            className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 cursor-pointer"
            onClick={() => {
              const filteredList = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestaurents(filteredList);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 cursor-pointer"
          onClick={() => {
            // Filter logic
            const filterList = listOfRestaurants.filter(
              (res) => res.info.avgRating >= 4
            );
            setFilteredRestaurents(filterList);
          }}
        >
          Top rated restaurants
        </button>
      </div>
      <div className="flex flex-wrap">
        {filteredRestaurents.map((restaurant) => (
          <Link
            to={"/restaurent/" + restaurant.info.id}
            key={restaurant.info.id}
          >
            {/* {
              if(restaurant.info.hasOwnProperty("aggregatedDiscountInfoV3")){
                 if(restaurant.info.aggregatedDiscountInfoV3.hasOwnProperty("header")){
                  return <EnhancedRestaurentCard res={restaurant}/>
                 }
              }
              else{
                return <Restaurentcard res={restaurant}/>
              }
            } */}
            {
              restaurant.info.hasOwnProperty("aggregatedDiscountInfoV3")?restaurant.info.aggregatedDiscountInfoV3.hasOwnProperty("header"):
            }
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
