import React from "react"
import ReactDOM from "react-dom/client"

/*
  header
     logo
     nav items
  body
     search
     restaurantcontainer
      restaurentcards
  fotter
     copyrights
     links
     address
     contact
*/ 

const Header = ()=>{
    return (
        <div id="header">
            <div id="logo-address">
                <img id="logo" src="https://seeklogo.com/images/S/swiggy-logo-8EF8260FA4-seeklogo.com.png"></img>
                <div id="location">
                    <p id="other"> <b>Other</b></p>
                    <p>791111
                        <img id="dropdown-image" src="https://149496500.v2.pressablecdn.com/wp-content/uploads/2018/06/chevron-down-e1528848953404.png"></img>
                    </p>
                </div>
            </div>
            <div id="nav-items">
                <ul id="child-of-list">
                    <li>Swiggy Coperate</li>
                    <li>Search</li>
                    <li>Offers</li>
                    <li>Help</li>
                    <li>Sign in</li>
                    <li>Cart</li>
                </ul>
            </div>    
        </div>
    )
}


const Restaurentcard=(props) =>{
    const {data}=props 
     return (
        <div className="res-card" style={{ backgroundColor:"#f0f0f0"}}>
            <img className="res-log"
             src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/ipq0vykg2bzsouxnjyrw" 
             alt="image not found"></img>
            <h3>{data["info"]["name"]}</h3>
            <h4>{data.info.cuisines}</h4>
            <h4>{data.info.avgRating}</h4>
            <h4>{data.info.sla.deliveryTime}</h4>
        </div>
    )
}
const resObj={
                    "info": {
                      "id": "178228",
                      "name": "Vindhu - Hotlines Falcon's Nest",
                      "cloudinaryImageId": "yushzvrcz203fcfxf46p",
                      "locality": "Undi Road",
                      "areaName": "Somavaram",
                      "costForTwo": "₹600 for two",
                      "cuisines": [
                        "Biryani",
                        "South Indian",
                        "Andhra",
                        "Chinese"
                      ],
                      "avgRating": 4.2,
                      "parentId": "453978",
                      "avgRatingString": "4.2",
                      "totalRatingsString": "1K+",
                      "sla": {
                        "deliveryTime": 24,
                        "lastMileTravel": 0.5,
                        "serviceability": "SERVICEABLE",
                        "slaString": "20-25 mins",
                        "lastMileTravelString": "0.5 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2024-06-17 23:23:00",
                        "opened": true
                      },
                      "badges": {

                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {

                          },
                          "textBased": {

                          },
                          "textExtendedBadges": {

                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "₹50 OFF",
                        "subHeader": "ABOVE ₹199",
                        "discountTag": "FLAT DEAL"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                          "lottie": {

                          },
                          "video": {

                          }
                        }
                      },
                      "reviewsSummary": {

                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {

                      }
                    },
                    "analytics": {

                    },
                    "cta": {
                      "link": "https://www.swiggy.com/restaurants/vindhu-hotlines-falcons-nest-undi-road-somavaram-bhimavaram-178228",
                      "type": "WEBLINK"
                    }
             }
 const Body= ()=>{
    return (
        <div className="body">
           <div className="search">search</div>
           <div className="restaurantcontainer">
              <Restaurentcard 
               data={resObj}
              />
           </div>
        </div>
    )
}

const AppLayout= ()=> {
    return(
        <div className="app">
             <Header/>
             <Body/>
        </div>
    )
}

const root=ReactDOM.createRoot(document.getElementById("root"))
root.render(<AppLayout></AppLayout>)

