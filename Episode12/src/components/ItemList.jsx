import { PORTION_IMAGE_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const ItemList = ({ items }) => {
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    //dispatch an action
    // console.log(item);
    dispatch(addItem(item));
  };
  return (
    <div>
      {items.map((item) => (
        <div
          key={item?.card?.info?.id}
          className="border-gray-500  border-b-2 my-3 text-left p-3 flex justify-between"
        >
          <div className="w-9/12">
            <div className="py-1">
              <span className="font-semibold">{item.card.info.name}</span>
              <span>
                --
                {item.card.info.price
                  ? Math.round(item.card.info.price / 100)
                  : Math.trunc(item.card.info.defaultPrice / 100)}
              </span>
              <p className="text-xs">{item.card.info.description}</p>
            </div>
          </div>

          <div className="w-3/12 ">
            <div className="absolute">
              <button
                className="p-2 shadow-lg text-white font-bold rounded-lg bg-gray-600"
                onClick={() => handleAddItem(item)}
              >
                Add+
              </button>
            </div>

            <img
              src={PORTION_IMAGE_URL + item?.card?.info?.imageId}
              className="w-40"
            />
          </div>
        </div>
      ))}
    </div>
  );
};
export default ItemList;
