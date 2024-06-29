import Restaurentcard, { WillOpenLabel } from "./Restaurentcard.jsx";
import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer.jsx";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus.jsx";
import userContext1 from "../utils/userContext.js";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurent] = useState([]);
  const [searchText, setSearchText] = useState("");
  let [filteredRestaurents, setFilteredRestaurents] = useState();

  const EnhancedRestaurentCard = WillOpenLabel(Restaurentcard);

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
    setListOfRestaurent(usefulData);
    setFilteredRestaurents(usefulData); // because we are intializing filteredrestaurents with the emptydata.
  };

  const onlineStatus = useOnlineStatus();

  const { loggedInUser, setUserName } = useContext(userContext1);

  if (onlineStatus === false)
    return <h1>looks like you are offline || check our internet connection</h1>;

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="flex justify-around m-4">
        <div className="search">
          <input
            type="text"
            className="search-box px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="enter the restaurent name"
            value={searchText}
            onChange={(inputText) => {
              setSearchText(inputText.target.value);
            }}
          />
          <button
            className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 cursor-pointer"
            onClick={() => {
              filteredRestaurents = listOfRestaurants.filter(
                (res) =>
                  res.info.name.toLowerCase().includes(searchText.toLowerCase()) //to know res.info.name print the ueful data in async function to know what to use wheter res.info.name or anything
              );
              setFilteredRestaurents(filteredRestaurents);
            }}
          >
            search
          </button>
        </div>
        <button
          className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 cursor-pointer"
          onClick={() => {
            //filter logic
            filterList = listOfRestaurants.filter(
              (res) => res.info.avgRating >= 4
            );
            setListOfRestaurent(filterList);
          }}
        >
          Top rated restaurents
        </button>
        <div>
          <label className="mr-3 text-xl text-gray-600 font-semibold">
            Username
          </label>
          <input
            className="search-box px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter the username"
            value={loggedInUser}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
      </div>
      <div className="flex flex-wrap">
        {filteredRestaurents.map((restaurant) => (
          <Link
            to={"/restaurent/" + restaurant.info.id}
            key={restaurant.info.id}
            className="transform transition duration-500 hover:scale-90 hover:border hover:border-green-400 hover:border-solid"
          >
            {restaurant.info.hasOwnProperty("aggregatedDiscountInfoV3") ? (
              <EnhancedRestaurentCard data={restaurant} />
            ) : (
              <Restaurentcard data={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Body;
