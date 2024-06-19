import Restaurentcard from "./Restaurentcard.jsx"
import resList from "../utils/mockData.js"
import { useState } from "react";


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

const Body= ()=>{ 
    const [listOfRestaurants,setListOfRestaurent] = useState(resList)  
    return (
        <div className="body">
           <div className="filter">
             <button 
             className="filter-btn"
             onClick={()=>{
                 //filter logic
                 filterList=listOfRestaurants.filter(res => res.info.avgRating>=4)
                 setListOfRestaurent(filterList)
                }}>
                Top rated restaurents
             </button>
           </div>
           <div className="restaurantcontainer">
              { 
                listOfRestaurants.map((restaurant)=>(
                  <Restaurentcard key={restaurant.info.id} data={restaurant}/>
                )) 
              }
           </div>
        </div>
 )
}
export default Body