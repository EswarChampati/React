import {PORTION_IMAGE_URL} from "../utils/constants"

const Restaurentcard=(props) =>{
    const {data}=props 
    const {cloudinaryImageId,name,cuisines,avgRating,sla}=data?.info
     return (
        <div className="res-card" style={{ backgroundColor:"#f0f0f0"}}>
            <img className="res-log"
             src={PORTION_IMAGE_URL+cloudinaryImageId}
             alt="image not found"></img>
            <h3>{name}</h3>
            <h4>{cuisines.join(",")}</h4>
            <h4>{avgRating}</h4>
            <h4>{sla.deliveryTime}</h4>
        </div>
    )
}
export default Restaurentcard;