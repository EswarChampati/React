import ItemList from "./ItemList";

const RestaurentCategory = ({ data, showItems, setShowIndex }) => {
  //console.log(data);
  return (
    <div>
      <div className="bg-gray-100 w-1/2 mx-auto my-5  shadow-md rounded-xl">
        <div
          className="flex justify-between cursor-pointer hover:bg-gray-200"
          onClick={setShowIndex}
        >
          <span className="m-2 font-bold text-lg">
            {data.title} ({data.itemCards.length})
          </span>
          <span className="m-2">{"⮟"}</span>
        </div>
        {showItems && <ItemList items={data.itemCards} />}
      </div>
    </div>
  );
};
export default RestaurentCategory;
