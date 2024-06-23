import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";

const RestaurentMenu = () => {
  const [resInfo, setResInfo] = useState(null); //create empty statevariable with null as a inital value

  const { resId } = useParams(); //resId name should be matched with the dynamic route name

  useEffect(() => {
    fetchData();
  }, []);

  fetchData = async () => {
    const data = await fetch(
      "https://corsproxy.io/?https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9715987&lng=77.5945627&restaurantId=" +
        resId +
        "&catalog_qa=undefined&submitAction=ENTER"
    );
    const json = await data.json();
    // console.log(json); // to check whether we go the data from api call or not
    setResInfo(json);
  };

  if (resInfo === null) return <Shimmer />;

  const restaurantInfo = resInfo?.data?.cards[2]?.card?.card?.info;
  const itemCards =
    resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
      ?.card?.itemCards;

  const { name, cuisines, costForTwoMessage, avgRating, sla } =
    restaurantInfo || {};

  return (
    <div className="menu">
      <h1>{name}</h1>
      <h2>{cuisines?.join(",")}</h2>
      <h3>{costForTwoMessage}</h3>
      <h3>{"Rating: " + avgRating}</h3>
      <h3>{"Delivery time: " + sla?.deliveryTime}</h3>
      <ul>
        {itemCards?.map((foodItem) => (
          <li key={foodItem?.card?.info?.id}>
            {foodItem?.card?.info?.name}--{foodItem?.card?.info?.price / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurentMenu;
