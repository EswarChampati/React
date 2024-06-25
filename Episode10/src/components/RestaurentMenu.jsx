import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurentMenu from "../utils/useRestaurentMenu";

const RestaurentMenu = () => {
  const { resId } = useParams(); //resId name should be matched with the dynamic route name

  const resInfo = useRestaurentMenu(resId);

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
