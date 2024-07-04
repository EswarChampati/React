import { useContext } from "react";
import { PORTION_IMAGE_URL } from "../utils/constants";
import userContext1 from "../utils/userContext";

const Restaurentcard = (props) => {
  const { data } = props;
  const { cloudinaryImageId, name, cuisines, avgRating, sla } = data?.info;
  const { loggedInUser } = useContext(userContext1);
  return (
    <div className="m-3 mb-3 w-56 h-96 rounded-lg" data-testid="resCard">
      <img
        className="w-56 h-48 rounded-lg"
        src={PORTION_IMAGE_URL + cloudinaryImageId}
        alt="image not found"
      ></img>
      <h3 className="font-bold my-1 text-lg">{name}</h3>
      <h4 className="text-wrap truncate text-sm my-2">{cuisines.join(",")}</h4>
      <h4>{"Rating " + avgRating}</h4>
      <h4>{"Delivary time " + sla.deliveryTime}</h4>
      <h4>{loggedInUser}</h4>
    </div>
  );
};

export const WillOpenLabel = (Restaurentcard) => {
  return (props) => {
    const discount = props.data?.info?.aggregatedDiscountInfoV3;
    const offer = `${discount.header} ${discount.subHeader} `;
    return (
      <div>
        <label className="absolute top-44 left-4 text-white text-xl font-extrabold ">
          {offer}
        </label>
        <Restaurentcard {...props} />
      </div>
    );
  };
};

export default Restaurentcard;
