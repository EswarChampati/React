import Restaurentcard from "./Restaurentcard.jsx";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer.jsx";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurent] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredRestaurents, setFilteredRestaurents] = useState();

  useEffect(() => {
    fetchData();
  }, []);
  console.log("body rendered"); //this is to know about te onchange handler kep press rendering.

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

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            placeholder="enter the restaurent name"
            value={searchText}
            onChange={(inputText) => {
              setSearchText(inputText.target.value);
            }}
          />
          <button
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
          className="filter-btn"
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
      </div>
      <div className="restaurantcontainer">
        {filteredRestaurents.map((restaurant) => (
          <Restaurentcard key={restaurant.info.id} data={restaurant} /> //everytime when the controller reaches here it render empty data since we dont have any data in the filtered restaurent in the absnece ofthis line setFilteredRestaurents(usefulData);.
        ))}
      </div>
    </div>
  );
};
export default Body;
