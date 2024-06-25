import { PORTION_IMAGE_URL } from "../utils/constants";

const Restaurentcard = (props) => {
  const { data } = props;
  const { cloudinaryImageId, name, cuisines, avgRating, sla } = data?.info;
  return (
    <div
      className="m-3 mb-3 w-56 h-96 rounded-lg"
      style={{ backgroundColor: "#f0f0f0" }}
    >
      <img
        className="w-56 h-48 rounded-lg"
        src={PORTION_IMAGE_URL + cloudinaryImageId}
        alt="image not found"
      ></img>
      <h3 className="font-bold my-1 text-lg">{name}</h3>
      <h4 className="text-wrap truncate text-sm my-2">{cuisines.join(",")}</h4>
      <h4>{"Rating " + avgRating}</h4>
      <h4>{"Delivary time " + sla.deliveryTime}</h4>
    </div>
  );
};

export const WillOfferLabel = (Restaurentcard) => {
  return (props) => {
    return (
      <div>
        <label>offer</label>
        <Restaurentcard {...props} />
      </div>
    );
  };
};
export default Restaurentcard;
