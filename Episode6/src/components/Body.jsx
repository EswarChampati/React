import Restaurentcard from "./Restaurentcard.jsx";
import { useState, useEffect } from "react";

// let listOfRestaurants = [{
//     "info": {
//         "id": "10582",
//         "name": "Pizza Hut",
//         "cloudinaryImageId": "2b4f62d606d1b2bfba9ba9e5386fabb7",
//         "cuisines": [
//             "Pizzas"
//         ],
//         "avgRating": 4.1,
//         "sla": {
//             "deliveryTime": 34
//         }
//     }
// },
// {
//     "info": {
//         "id": "10583",
//         "name": "KFC",
//         "cloudinaryImageId": "2b4f62d606d1b2bfba9ba9e5386fabb7",
//         "cuisines": [
//             "Pizzas", "sandwitch", "Burger"
//         ],
//         "avgRating": 3.8,
//         "sla": {
//             "deliveryTime": 40
//         }
//     }
// }];

const Body = () => {
  const [listOfRestaurants, setListOfRestaurent] = useState([]);
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
  };
  return (
    <div className="body">
      <div className="filter">
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
        {listOfRestaurants.map((restaurant) => (
          <Restaurentcard key={restaurant.info.id} data={restaurant} />
        ))}
      </div>
    </div>
  );
};
export default Body;
