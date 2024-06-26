import { useEffect, useState } from "react";
import { MENU_API } from "./constants";

const useRestaurentMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      MENU_API + resId + "&catalog_qa=undefined&submitAction=ENTER"
    );
    const json = await data.json();
    setResInfo(json);
  };
  return resInfo;
};
export default useRestaurentMenu;
