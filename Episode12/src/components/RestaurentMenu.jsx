import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurentMenu from "../utils/useRestaurentMenu";
import RestaurentCategory from "./RestaurentCategory";
import { useState } from "react";

const RestaurentMenu = () => {
  const [showIndex, setShowIndex] = useState(0);

  const { resId } = useParams(); //resId name should be matched with the dynamic route name

  const resInfo = useRestaurentMenu(resId);

  const dummy = "dummy data";

  if (resInfo === null) return <Shimmer />;

  const restaurantInfo = resInfo?.data?.cards[2]?.card?.card?.info;
  const itemCards =
    resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
      ?.card?.itemCards;

  const section =
    resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (obj) => {
        return (
          obj.card?.card?.["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
        );
      }
    );

  const { name, cuisines } = restaurantInfo || {};

  return (
    <div className="text-center">
      <h1 className="text-2xl font-bold my-3">{name}</h1>
      <h2 className="text-lg font-bold">{cuisines?.join(",")}</h2>
      {section.map((category, index) => (
        <RestaurentCategory
          key={index} /*index is used because i dont where id is there */
          data={category?.card?.card}
          showItems={showIndex === index}
          setShowIndex={() => setShowIndex(index)}
          dummy={dummy}
        />
      ))}
    </div>
  );
};

export default RestaurentMenu;
