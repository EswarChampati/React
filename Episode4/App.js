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
    const {cloudinaryImageId,name,cuisines,avgRating,sla}=data?.info
     return (
        <div className="res-card" style={{ backgroundColor:"#f0f0f0"}}>
            <img className="res-log"
             src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+cloudinaryImageId}
             alt="image not found"></img>
            <h3>{name}</h3>
            <h4>{cuisines.join(",")}</h4>
            <h4>{avgRating}</h4>
            <h4>{sla.deliveryTime}</h4>
        </div>
    )
}

const resList=[
{
"info": {
"id": "10582",
"name": "Pizza Hut",
"cloudinaryImageId": "2b4f62d606d1b2bfba9ba9e5386fabb7",
"locality": "Maruti Nagar",
"areaName": "Koramangala",
"costForTwo": "₹300 for two",
"cuisines": [
"Pizzas"
],
"avgRating": 4.1,
"parentId": "721",
"avgRatingString": "4.1",
"totalRatingsString": "10K+",
"sla": {
"deliveryTime": 34,
"lastMileTravel": 6.8,
"serviceability": "SERVICEABLE",
"slaString": "30-35 mins",
"lastMileTravelString": "6.8 km",
"iconType": "ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime": "2024-06-18 06:00:00",
"opened": true
},
"badges": {},
"isOpen": true,
"type": "F",
"badgesV2": {
"entityBadges": {
"imageBased": {},
"textBased": {},
"textExtendedBadges": {}
}
},
"aggregatedDiscountInfoV3": {
"header": "ITEMS",
"subHeader": "AT ₹199"
},
"differentiatedUi": {
"displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
"differentiatedUiMediaDetails": {
"mediaType": "ADS_MEDIA_ENUM_IMAGE",
"lottie": {},
"video": {}
}
},
"reviewsSummary": {},
"displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
"restaurantOfferPresentationInfo": {}
},
"analytics": {},
"cta": {
"link": "https://www.swiggy.com/restaurants/pizza-hut-maruti-nagar-koramangala-bangalore-10582",
"type": "WEBLINK"
}
},
{
"info": {
"id": "74444",
"name": "Samosa Party",
"cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/5/9/3de49675-5a5a-470e-a30b-0eef986793d0_74444.jpg",
"locality": "Koramangala",
"areaName": "Koramangala",
"costForTwo": "₹100 for two",
"cuisines": [
"Fast Food",
"Snacks",
"Beverages",
"Chaat",
"North Indian",
"Street Food",
"Sweets",
"Desserts",
"Punjabi",
"Bakery"
],
"avgRating": 4.3,
"parentId": "6364",
"avgRatingString": "4.3",
"totalRatingsString": "10K+",
"sla": {
"deliveryTime": 33,
"lastMileTravel": 6.6,
"serviceability": "SERVICEABLE",
"slaString": "30-35 mins",
"lastMileTravelString": "6.6 km",
"iconType": "ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime": "2024-06-25 00:00:00",
"opened": true
},
"badges": {
"textExtendedBadges": [
{
"iconId": "guiltfree/GF_Logo_android_3x",
"shortDescription": "options available",
"fontColor": "#7E808C"
}
]
},
"isOpen": true,
"type": "F",
"badgesV2": {
"entityBadges": {
"imageBased": {},
"textBased": {},
"textExtendedBadges": {
"badgeObject": [
{
"attributes": {
"description": "",
"fontColor": "#7E808C",
"iconId": "guiltfree/GF_Logo_android_3x",
"shortDescription": "options available"
}
}
]
}
}
},
"aggregatedDiscountInfoV3": {
"header": "₹150 OFF",
"subHeader": "ABOVE ₹599",
"discountTag": "FLAT DEAL"
},
"differentiatedUi": {
"displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
"differentiatedUiMediaDetails": {
"mediaType": "ADS_MEDIA_ENUM_IMAGE",
"lottie": {},
"video": {}
}
},
"reviewsSummary": {},
"displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
"restaurantOfferPresentationInfo": {}
},
"analytics": {},
"cta": {
"link": "https://www.swiggy.com/restaurants/samosa-party-koramangala-bangalore-74444",
"type": "WEBLINK"
}
},
{
"info": {
"id": "402714",
"name": "Indiana Burgers",
"cloudinaryImageId": "lflq8ulpskdypnl2gbak",
"locality": "Millars Road",
"areaName": "Vasanth Nagar",
"costForTwo": "₹150 for two",
"cuisines": [
"Burgers",
"American",
"Fast Food",
"Beverages",
"Desserts"
],
"avgRating": 3.8,
"parentId": "5714",
"avgRatingString": "3.8",
"totalRatingsString": "100+",
"sla": {
"deliveryTime": 36,
"lastMileTravel": 3,
"serviceability": "SERVICEABLE",
"slaString": "35-40 mins",
"lastMileTravelString": "3.0 km",
"iconType": "ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime": "2024-06-25 00:00:00",
"opened": true
},
"badges": {
"textExtendedBadges": [
{
"iconId": "guiltfree/GF_Logo_android_3x",
"shortDescription": "options available",
"fontColor": "#7E808C"
}
]
},
"isOpen": true,
"type": "F",
"badgesV2": {
"entityBadges": {
"imageBased": {},
"textBased": {},
"textExtendedBadges": {
"badgeObject": [
{
"attributes": {
"description": "",
"fontColor": "#7E808C",
"iconId": "guiltfree/GF_Logo_android_3x",
"shortDescription": "options available"
}
}
]
}
}
},
"aggregatedDiscountInfoV3": {
"header": "₹125 OFF",
"subHeader": "ABOVE ₹499",
"discountTag": "FLAT DEAL"
},
"differentiatedUi": {
"displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
"differentiatedUiMediaDetails": {
"mediaType": "ADS_MEDIA_ENUM_IMAGE",
"lottie": {},
"video": {}
}
},
"reviewsSummary": {},
"displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
"restaurantOfferPresentationInfo": {}
},
"analytics": {},
"cta": {
"link": "https://www.swiggy.com/restaurants/indiana-burgers-millars-road-vasanth-nagar-bangalore-402714",
"type": "WEBLINK"
}
},
{
"info": {
"id": "409923",
"name": "Kaati Zone Rolls & Wraps",
"cloudinaryImageId": "cv0ebvdyhlxscaz5czpe",
"locality": "Millars Road",
"areaName": "Vasanth Nagar",
"costForTwo": "₹150 for two",
"cuisines": [
"Fast Food",
"Bengali",
"Beverages",
"Desserts"
],
"avgRating": 3.7,
"parentId": "248306",
"avgRatingString": "3.7",
"totalRatingsString": "500+",
"sla": {
"deliveryTime": 33,
"lastMileTravel": 3,
"serviceability": "SERVICEABLE",
"slaString": "30-35 mins",
"lastMileTravelString": "3.0 km",
"iconType": "ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime": "2024-06-25 00:00:00",
"opened": true
},
"badges": {
"textExtendedBadges": [
{
"iconId": "guiltfree/GF_Logo_android_3x",
"shortDescription": "options available",
"fontColor": "#7E808C"
}
]
},
"isOpen": true,
"type": "F",
"badgesV2": {
"entityBadges": {
"imageBased": {},
"textBased": {},
"textExtendedBadges": {
"badgeObject": [
{
"attributes": {
"description": "",
"fontColor": "#7E808C",
"iconId": "guiltfree/GF_Logo_android_3x",
"shortDescription": "options available"
}
}
]
}
}
},
"aggregatedDiscountInfoV3": {
"header": "₹125 OFF",
"subHeader": "ABOVE ₹499",
"discountTag": "FLAT DEAL"
},
"differentiatedUi": {
"displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
"differentiatedUiMediaDetails": {
"mediaType": "ADS_MEDIA_ENUM_IMAGE",
"lottie": {},
"video": {}
}
},
"reviewsSummary": {},
"displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
"restaurantOfferPresentationInfo": {}
},
"analytics": {},
"cta": {
"link": "https://www.swiggy.com/restaurants/kaati-zone-rolls-and-wraps-millars-road-vasanth-nagar-bangalore-409923",
"type": "WEBLINK"
}
},
{
"info": {
"id": "403197",
"name": "The Dessert Zone",
"cloudinaryImageId": "c447c9ce7d0bbe78e46141e866236762",
"locality": "Millars Road",
"areaName": "Vasanth Nagar",
"costForTwo": "₹200 for two",
"cuisines": [
"Bakery",
"Desserts",
"Ice Cream",
"Beverages"
],
"avgRating": 3.5,
"parentId": "10414",
"avgRatingString": "3.5",
"totalRatingsString": "100+",
"sla": {
"deliveryTime": 33,
"lastMileTravel": 3,
"serviceability": "SERVICEABLE",
"slaString": "30-35 mins",
"lastMileTravelString": "3.0 km",
"iconType": "ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime": "2024-06-25 00:00:00",
"opened": true
},
"badges": {},
"isOpen": true,
"type": "F",
"badgesV2": {
"entityBadges": {
"imageBased": {},
"textBased": {},
"textExtendedBadges": {}
}
},
"aggregatedDiscountInfoV3": {
"header": "50% OFF",
"subHeader": "UPTO ₹100"
},
"differentiatedUi": {
"displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
"differentiatedUiMediaDetails": {
"mediaType": "ADS_MEDIA_ENUM_IMAGE",
"lottie": {},
"video": {}
}
},
"reviewsSummary": {},
"displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
"restaurantOfferPresentationInfo": {}
},
"analytics": {},
"cta": {
"link": "https://www.swiggy.com/restaurants/the-dessert-zone-millars-road-vasanth-nagar-bangalore-403197",
"type": "WEBLINK"
}
},
{
"info": {
"id": "688356",
"name": "Go Zero Ice Creams & Desserts",
"cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/23/abb8a1dc-ff69-4d04-b0a4-bf01b06b3156_688356.JPG",
"locality": "BTM Layout",
"areaName": "Koramangala",
"costForTwo": "₹150 for two",
"cuisines": [
"Ice Cream",
"Desserts",
"Healthy Food"
],
"avgRating": 4.6,
"veg": true,
"parentId": "343689",
"avgRatingString": "4.6",
"totalRatingsString": "100+",
"sla": {
"deliveryTime": 27,
"lastMileTravel": 6.4,
"serviceability": "SERVICEABLE",
"slaString": "25-30 mins",
"lastMileTravelString": "6.4 km",
"iconType": "ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime": "2024-06-25 00:00:00",
"opened": true
},
"badges": {
"imageBadges": [
{
"imageId": "v1695133679/badges/Pure_Veg111.png",
"description": "pureveg"
}
],
"textExtendedBadges": [
{
"iconId": "guiltfree/GF_Logo_android_3x",
"shortDescription": "brand",
"fontColor": "#7E808C"
}
]
},
"isOpen": true,
"type": "F",
"badgesV2": {
"entityBadges": {
"imageBased": {
"badgeObject": [
{
"attributes": {
"description": "pureveg",
"imageId": "v1695133679/badges/Pure_Veg111.png"
}
}
]
},
"textBased": {},
"textExtendedBadges": {
"badgeObject": [
{
"attributes": {
"description": "",
"fontColor": "#7E808C",
"iconId": "guiltfree/GF_Logo_android_3x",
"shortDescription": "brand"
}
}
]
}
}
},
"aggregatedDiscountInfoV3": {
"header": "₹150 OFF",
"subHeader": "ABOVE ₹599",
"discountTag": "FLAT DEAL"
},
"differentiatedUi": {
"displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
"differentiatedUiMediaDetails": {
"mediaType": "ADS_MEDIA_ENUM_IMAGE",
"lottie": {},
"video": {}
}
},
"reviewsSummary": {},
"displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
"restaurantOfferPresentationInfo": {}
},
"analytics": {},
"cta": {
"link": "https://www.swiggy.com/restaurants/go-zero-ice-creams-and-desserts-btm-layout-koramangala-bangalore-688356",
"type": "WEBLINK"
}
},
{
"info": {
"id": "374455",
"name": "Kwality Walls Frozen Dessert and Ice Cream Shop",
"cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/13/e355aa6b-bc56-4d39-ac2b-a657033916c2_374455.JPG",
"locality": "1st Stage",
"areaName": "BTM Layout",
"costForTwo": "₹300 for two",
"cuisines": [
"Desserts",
"Ice Cream",
"Ice Cream Cakes"
],
"avgRating": 4.8,
"veg": true,
"parentId": "582",
"avgRatingString": "4.8",
"totalRatingsString": "1K+",
"sla": {
"deliveryTime": 35,
"lastMileTravel": 7.6,
"serviceability": "SERVICEABLE",
"slaString": "30-35 mins",
"lastMileTravelString": "7.6 km",
"iconType": "ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime": "2024-06-18 23:59:00",
"opened": true
},
"badges": {
"imageBadges": [
{
"imageId": "v1695133679/badges/Pure_Veg111.png",
"description": "pureveg"
}
]
},
"isOpen": true,
"type": "F",
"badgesV2": {
"entityBadges": {
"imageBased": {
"badgeObject": [
{
"attributes": {
"description": "pureveg",
"imageId": "v1695133679/badges/Pure_Veg111.png"
}
}
]
},
"textBased": {},
"textExtendedBadges": {}
}
},
"aggregatedDiscountInfoV3": {
"header": "₹150 OFF",
"subHeader": "ABOVE ₹499",
"discountTag": "FLAT DEAL"
},
"differentiatedUi": {
"displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
"differentiatedUiMediaDetails": {
"mediaType": "ADS_MEDIA_ENUM_IMAGE",
"lottie": {},
"video": {}
}
},
"reviewsSummary": {},
"displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
"restaurantOfferPresentationInfo": {}
},
"analytics": {},
"cta": {
"link": "https://www.swiggy.com/restaurants/kwality-walls-frozen-dessert-and-ice-cream-shop-1st-stage-btm-layout-bangalore-374455",
"type": "WEBLINK"
}
},
{
"info": {
"id": "9104",
"name": "Rolls On Wheels - Shawarma & Wraps",
"cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/15/19c28d48-49b5-487e-aad5-c2409866d87c_9104.jpg",
"locality": "Cunnigham road",
"areaName": "Vasanth Nagar",
"costForTwo": "₹300 for two",
"cuisines": [
"Fast Food",
"Snacks",
"Bengali",
"Kebabs",
"Beverages",
"Healthy Food",
"Chinese"
],
"avgRating": 4.3,
"parentId": "493982",
"avgRatingString": "4.3",
"totalRatingsString": "10K+",
"sla": {
"deliveryTime": 32,
"lastMileTravel": 3,
"serviceability": "SERVICEABLE",
"slaString": "30-35 mins",
"lastMileTravelString": "3.0 km",
"iconType": "ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime": "2024-06-18 08:00:00",
"opened": true
},
"badges": {
"imageBadges": [
{
"imageId": "Rxawards/_CATEGORY-Rolls.png",
"description": "Delivery!"
}
]
},
"isOpen": true,
"type": "F",
"badgesV2": {
"entityBadges": {
"imageBased": {
"badgeObject": [
{
"attributes": {
"description": "Delivery!",
"imageId": "Rxawards/_CATEGORY-Rolls.png"
}
}
]
},
"textBased": {},
"textExtendedBadges": {}
}
},
"aggregatedDiscountInfoV3": {
"header": "₹125 OFF",
"subHeader": "ABOVE ₹399",
"discountTag": "FLAT DEAL"
},
"differentiatedUi": {
"displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
"differentiatedUiMediaDetails": {
"mediaType": "ADS_MEDIA_ENUM_IMAGE",
"lottie": {},
"video": {}
}
},
"reviewsSummary": {},
"displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
"restaurantOfferPresentationInfo": {}
},
"analytics": {},
"cta": {
"link": "https://www.swiggy.com/restaurants/rolls-on-wheels-shawarma-and-wraps-cunnigham-road-vasanth-nagar-bangalore-9104",
"type": "WEBLINK"
}
},
{
"info": {
"id": "272031",
"name": "Baskin Robbins",
"cloudinaryImageId": "85ccae4e3576f9330af102c46ca85395",
"locality": "5th Block",
"areaName": "Koramangala",
"costForTwo": "₹150 for two",
"cuisines": [
"Desserts"
],
"avgRating": 4.6,
"veg": true,
"parentId": "5588",
"avgRatingString": "4.6",
"totalRatingsString": "100+",
"sla": {
"deliveryTime": 32,
"lastMileTravel": 6.6,
"serviceability": "SERVICEABLE",
"slaString": "30-35 mins",
"lastMileTravelString": "6.6 km",
"iconType": "ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime": "2024-06-25 00:00:00",
"opened": true
},
"badges": {
"imageBadges": [
{
"imageId": "v1695133679/badges/Pure_Veg111.png",
"description": "pureveg"
}
],
"textExtendedBadges": [
{
"iconId": "v1705582451/Ratnesh_Badges/Perfect_cake.png",
"shortDescription": "Perfect cake delivery",
"fontColor": "#7E808C"
}
]
},
"isOpen": true,
"aggregatedDiscountInfoV2": {},
"type": "F",
"badgesV2": {
"entityBadges": {
"imageBased": {
"badgeObject": [
{
"attributes": {
"description": "pureveg",
"imageId": "v1695133679/badges/Pure_Veg111.png"
}
}
]
},
"textBased": {},
"textExtendedBadges": {
"badgeObject": [
{
"attributes": {
"description": "",
"fontColor": "#7E808C",
"iconId": "v1705582451/Ratnesh_Badges/Perfect_cake.png",
"shortDescription": "Perfect cake delivery"
}
}
]
}
}
},
"differentiatedUi": {
"displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
"differentiatedUiMediaDetails": {
"mediaType": "ADS_MEDIA_ENUM_IMAGE",
"lottie": {},
"video": {}
}
},
"reviewsSummary": {},
"displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
"restaurantOfferPresentationInfo": {}
},
"analytics": {},
"cta": {
"link": "https://www.swiggy.com/restaurants/baskin-robbins-5th-block-koramangala-bangalore-272031",
"type": "WEBLINK"
}
},
{
"info": {
"id": "112314",
"name": "Frozen Bottle - Milkshakes, Desserts And Ice Cream",
"cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/5/13/93c0e916-72a0-478c-b738-d68c77507fce_112314.jpg",
"locality": "BTM Layout",
"areaName": "BTM Layout",
"costForTwo": "₹250 for two",
"cuisines": [
"Beverages",
"Ice Cream",
"Desserts"
],
"avgRating": 4.4,
"parentId": "5655",
"avgRatingString": "4.4",
"totalRatingsString": "1K+",
"sla": {
"deliveryTime": 38,
"lastMileTravel": 8.6,
"serviceability": "SERVICEABLE",
"slaString": "35-40 mins",
"lastMileTravelString": "8.6 km",
"iconType": "ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime": "2024-06-18 05:00:00",
"opened": true
},
"badges": {},
"isOpen": true,
"type": "F",
"badgesV2": {
"entityBadges": {
"imageBased": {},
"textBased": {},
"textExtendedBadges": {}
}
},
"aggregatedDiscountInfoV3": {
"header": "25% OFF",
"subHeader": "UPTO ₹125"
},
"differentiatedUi": {
"displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
"differentiatedUiMediaDetails": {
"mediaType": "ADS_MEDIA_ENUM_IMAGE",
"lottie": {},
"video": {}
}
},
"reviewsSummary": {},
"displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
"restaurantOfferPresentationInfo": {}
},
"analytics": {},
"cta": {
"link": "https://www.swiggy.com/restaurants/frozen-bottle-milkshakes-desserts-and-ice-cream-btm-layout-bangalore-112314",
"type": "WEBLINK"
}
},
{
"info": {
"id": "7069",
"name": "Cafe Coffee Day",
"cloudinaryImageId": "b70c7d23d197251b7b315b7e4d8173ae",
"locality": " 100 Feet RoadHal 2nd Stage",
"areaName": "Indiranagar",
"costForTwo": "₹400 for two",
"cuisines": [
"Beverages",
"Cafe",
"Snacks",
"Desserts",
"Burgers",
"Ice Cream",
"Bakery",
"Fast Food"
],
"avgRating": 4.4,
"parentId": "1",
"avgRatingString": "4.4",
"totalRatingsString": "5K+",
"sla": {
"deliveryTime": 30,
"lastMileTravel": 6.9,
"serviceability": "SERVICEABLE",
"slaString": "30-35 mins",
"lastMileTravelString": "6.9 km",
"iconType": "ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime": "2024-06-25 00:00:00",
"opened": true
},
"badges": {
"textExtendedBadges": [
{
"iconId": "guiltfree/GF_Logo_android_3x",
"shortDescription": "options available",
"fontColor": "#7E808C"
}
]
},
"isOpen": true,
"type": "F",
"badgesV2": {
"entityBadges": {
"imageBased": {},
"textBased": {},
"textExtendedBadges": {
"badgeObject": [
{
"attributes": {
"description": "",
"fontColor": "#7E808C",
"iconId": "guiltfree/GF_Logo_android_3x",
"shortDescription": "options available"
}
}
]
}
}
},
"aggregatedDiscountInfoV3": {
"header": "₹150 OFF",
"subHeader": "ABOVE ₹699",
"discountTag": "FLAT DEAL"
},
"differentiatedUi": {
"displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
"differentiatedUiMediaDetails": {
"mediaType": "ADS_MEDIA_ENUM_IMAGE",
"lottie": {},
"video": {}
}
},
"reviewsSummary": {},
"displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
"restaurantOfferPresentationInfo": {}
},
"analytics": {},
"cta": {
"link": "https://www.swiggy.com/restaurants/cafe-coffee-day-100-feet-roadhal-2nd-stage-indiranagar-bangalore-7069",
"type": "WEBLINK"
}
},
{
"info": {
"id": "5934",
"name": "Burger King",
"cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/11/7f76a072-c1bc-4d74-ac56-33e0eea20c1e_5934.JPG",
"locality": "Koramangala",
"areaName": "Koramangala",
"costForTwo": "₹350 for two",
"cuisines": [
"Burgers",
"American"
],
"avgRating": 4.2,
"parentId": "166",
"avgRatingString": "4.2",
"totalRatingsString": "10K+",
"sla": {
"deliveryTime": 38,
"lastMileTravel": 6.4,
"serviceability": "SERVICEABLE",
"slaString": "35-40 mins",
"lastMileTravelString": "6.4 km",
"iconType": "ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime": "2024-06-18 06:55:00",
"opened": true
},
"badges": {
"imageBadges": [
{
"imageId": "Rxawards/_CATEGORY-Burger.png",
"description": "Delivery!"
}
]
},
"isOpen": true,
"type": "F",
"badgesV2": {
"entityBadges": {
"imageBased": {
"badgeObject": [
{
"attributes": {
"description": "Delivery!",
"imageId": "Rxawards/_CATEGORY-Burger.png"
}
}
]
},
"textBased": {},
"textExtendedBadges": {}
}
},
"aggregatedDiscountInfoV3": {
"header": "₹125 OFF",
"subHeader": "ABOVE ₹399",
"discountTag": "FLAT DEAL"
},
"differentiatedUi": {
"displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
"differentiatedUiMediaDetails": {
"mediaType": "ADS_MEDIA_ENUM_IMAGE",
"lottie": {},
"video": {}
}
},
"reviewsSummary": {},
"displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
"restaurantOfferPresentationInfo": {}
},
"analytics": {},
"cta": {
"link": "https://www.swiggy.com/restaurants/burger-king-koramangala-bangalore-5934",
"type": "WEBLINK"
}
},
{
"info": {
"id": "614178",
"name": "KFC",
"cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/17/6267ecd0-c240-4ef8-8050-527a15356426_614178.JPG",
"locality": "Basaveshwara Nagar",
"areaName": "Basaveshwara Nagar",
"costForTwo": "₹400 for two",
"cuisines": [
"Burgers",
"Fast Food",
"Rolls & Wraps"
],
"avgRating": 4.1,
"parentId": "547",
"avgRatingString": "4.1",
"totalRatingsString": "1K+",
"sla": {
"deliveryTime": 47,
"lastMileTravel": 8,
"serviceability": "SERVICEABLE",
"slaString": "45-50 mins",
"lastMileTravelString": "8.0 km",
"iconType": "ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime": "2024-06-18 06:00:00",
"opened": true
},
"badges": {},
"isOpen": true,
"aggregatedDiscountInfoV2": {},
"type": "F",
"badgesV2": {
"entityBadges": {
"imageBased": {},
"textBased": {},
"textExtendedBadges": {}
}
},
"differentiatedUi": {
"displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
"differentiatedUiMediaDetails": {
"mediaType": "ADS_MEDIA_ENUM_IMAGE",
"lottie": {},
"video": {}
}
},
"reviewsSummary": {},
"displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
"restaurantOfferPresentationInfo": {}
},
"analytics": {},
"cta": {
"link": "https://www.swiggy.com/restaurants/kfc-basaveshwara-nagar-bangalore-614178",
"type": "WEBLINK"
}
},
{
"info": {
"id": "588705",
"name": "La Pino'z Pizza",
"cloudinaryImageId": "w6roonblq3fa5wrtlgys",
"locality": "5TH Phase",
"areaName": "JP Nagar",
"costForTwo": "₹300 for two",
"cuisines": [
"Pizzas",
"Pastas",
"Italian",
"Desserts",
"Beverages"
],
"avgRating": 4.1,
"parentId": "4961",
"avgRatingString": "4.1",
"totalRatingsString": "1K+",
"sla": {
"deliveryTime": 40,
"lastMileTravel": 9.1,
"serviceability": "SERVICEABLE",
"slaString": "35-40 mins",
"lastMileTravelString": "9.1 km",
"iconType": "ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime": "2024-06-18 05:00:00",
"opened": true
},
"badges": {},
"isOpen": true,
"type": "F",
"badgesV2": {
"entityBadges": {
"imageBased": {},
"textBased": {},
"textExtendedBadges": {}
}
},
"aggregatedDiscountInfoV3": {
"header": "40% OFF",
"subHeader": "UPTO ₹80"
},
"differentiatedUi": {
"displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
"differentiatedUiMediaDetails": {
"mediaType": "ADS_MEDIA_ENUM_IMAGE",
"lottie": {},
"video": {}
}
},
"reviewsSummary": {},
"displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
"restaurantOfferPresentationInfo": {}
},
"analytics": {},
"cta": {
"link": "https://www.swiggy.com/restaurants/la-pinoz-pizza-5th-phase-jp-nagar-bangalore-588705",
"type": "WEBLINK"
}
},
{
"info": {
"id": "770772",
"name": "Olio - The Wood Fired Pizzeria",
"cloudinaryImageId": "4b44c7921b1b6073a4ffa58b38f8def1",
"locality": "Ali Askar Road",
"areaName": "Cunningham Road",
"costForTwo": "₹300 for two",
"cuisines": [
"Pizzas",
"Pastas",
"Fast Food",
"Snacks",
"Beverages"
],
"avgRating": 4.2,
"parentId": "11633",
"avgRatingString": "4.2",
"totalRatingsString": "100+",
"sla": {
"deliveryTime": 42,
"lastMileTravel": 3,
"serviceability": "SERVICEABLE",
"slaString": "40-45 mins",
"lastMileTravelString": "3.0 km",
"iconType": "ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime": "2024-06-18 05:00:00",
"opened": true
},
"badges": {
"imageBadges": [
{
"imageId": "newg.png",
"description": "Gourmet"
}
],
"textExtendedBadges": [
{
"iconId": "guiltfree/GF_Logo_android_3x",
"shortDescription": "options available",
"fontColor": "#7E808C"
}
]
},
"isOpen": true,
"type": "F",
"badgesV2": {
"entityBadges": {
"imageBased": {
"badgeObject": [
{
"attributes": {
"description": "Gourmet",
"imageId": "newg.png"
}
}
]
},
"textBased": {},
"textExtendedBadges": {
"badgeObject": [
{
"attributes": {
"description": "",
"fontColor": "#7E808C",
"iconId": "guiltfree/GF_Logo_android_3x",
"shortDescription": "options available"
}
}
]
}
}
},
"aggregatedDiscountInfoV3": {
"header": "₹125 OFF",
"subHeader": "ABOVE ₹299",
"discountTag": "FLAT DEAL"
},
"differentiatedUi": {
"displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
"differentiatedUiMediaDetails": {
"mediaType": "ADS_MEDIA_ENUM_IMAGE",
"lottie": {},
"video": {}
}
},
"reviewsSummary": {},
"displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
"restaurantOfferPresentationInfo": {}
},
"analytics": {},
"cta": {
"link": "https://www.swiggy.com/restaurants/olio-the-wood-fired-pizzeria-ali-askar-road-cunningham-road-bangalore-770772",
"type": "WEBLINK"
}
},
{
"info": {
"id": "29627",
"name": "BIB - Breakfast in the Box",
"cloudinaryImageId": "nbcpg5xk6ekrrngmkd0b",
"locality": "1st block",
"areaName": "Koramangala",
"costForTwo": "₹350 for two",
"cuisines": [
"North Indian",
"Street Food",
"Chinese",
"South Indian",
"Continental",
"Beverages"
],
"avgRating": 4.4,
"parentId": "45396",
"avgRatingString": "4.4",
"totalRatingsString": "10K+",
"sla": {
"deliveryTime": 43,
"lastMileTravel": 8,
"serviceability": "SERVICEABLE",
"slaString": "40-45 mins",
"lastMileTravelString": "8.0 km",
"iconType": "ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime": "2024-06-18 14:00:00",
"opened": true
},
"badges": {
"textExtendedBadges": [
{
"iconId": "guiltfree/GF_Logo_android_3x",
"shortDescription": "options available",
"fontColor": "#7E808C"
}
]
},
"isOpen": true,
"type": "F",
"badgesV2": {
"entityBadges": {
"imageBased": {},
"textBased": {},
"textExtendedBadges": {
"badgeObject": [
{
"attributes": {
"description": "",
"fontColor": "#7E808C",
"iconId": "guiltfree/GF_Logo_android_3x",
"shortDescription": "options available"
}
}
]
}
}
},
"aggregatedDiscountInfoV3": {
"header": "10% OFF",
"subHeader": "UPTO ₹40"
},
"differentiatedUi": {
"displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
"differentiatedUiMediaDetails": {
"mediaType": "ADS_MEDIA_ENUM_IMAGE",
"lottie": {},
"video": {}
}
},
"reviewsSummary": {},
"displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
"restaurantOfferPresentationInfo": {}
},
"analytics": {},
"cta": {
"link": "https://www.swiggy.com/restaurants/bib-breakfast-in-the-box-1st-block-koramangala-bangalore-29627",
"type": "WEBLINK"
}
},
{
"info": {
"id": "93741",
"name": "Subway",
"cloudinaryImageId": "63178e3e64d503a479f2a2048a474552",
"locality": "The Nexus Mall",
"areaName": "Koramangala",
"costForTwo": "₹350 for two",
"cuisines": [
"Salads",
"Snacks",
"Desserts",
"Beverages"
],
"avgRating": 4,
"parentId": "2",
"avgRatingString": "4.0",
"totalRatingsString": "5K+",
"sla": {
"deliveryTime": 37,
"lastMileTravel": 6.5,
"serviceability": "SERVICEABLE",
"slaString": "35-40 mins",
"lastMileTravelString": "6.5 km",
"iconType": "ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime": "2024-06-18 05:45:00",
"opened": true
},
"badges": {
"imageBadges": [
{
"imageId": "Rxawards/_CATEGORY-Sandwiches.png",
"description": "Delivery!"
}
]
},
"isOpen": true,
"aggregatedDiscountInfoV2": {},
"type": "F",
"badgesV2": {
"entityBadges": {
"imageBased": {
"badgeObject": [
{
"attributes": {
"description": "Delivery!",
"imageId": "Rxawards/_CATEGORY-Sandwiches.png"
}
}
]
},
"textBased": {},
"textExtendedBadges": {}
}
},
"differentiatedUi": {
"displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
"differentiatedUiMediaDetails": {
"mediaType": "ADS_MEDIA_ENUM_IMAGE",
"lottie": {},
"video": {}
}
},
"reviewsSummary": {},
"displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
"restaurantOfferPresentationInfo": {}
},
"analytics": {},
"cta": {
"link": "https://www.swiggy.com/restaurants/subway-the-nexus-mall-koramangala-bangalore-93741",
"type": "WEBLINK"
}
},
{
"info": {
"id": "826449",
"name": "Pastas By Pizza Hut",
"cloudinaryImageId": "67d17abfeb3a5da6103b9424f6dbe973",
"locality": "Maruti Nagar",
"areaName": "Madiwala",
"costForTwo": "₹400 for two",
"cuisines": [
"Pastas"
],
"avgRating": 3.6,
"parentId": "306806",
"avgRatingString": "3.6",
"totalRatingsString": "20+",
"sla": {
"deliveryTime": 37,
"lastMileTravel": 6.8,
"serviceability": "SERVICEABLE",
"slaString": "35-40 mins",
"lastMileTravelString": "6.8 km",
"iconType": "ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime": "2024-06-18 06:00:00",
"opened": true
},
"badges": {},
"isOpen": true,
"aggregatedDiscountInfoV2": {},
"type": "F",
"badgesV2": {
"entityBadges": {
"imageBased": {},
"textBased": {},
"textExtendedBadges": {}
}
},
"differentiatedUi": {
"displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
"differentiatedUiMediaDetails": {
"mediaType": "ADS_MEDIA_ENUM_IMAGE",
"lottie": {},
"video": {}
}
},
"reviewsSummary": {},
"displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
"isNewlyOnboarded": true,
"restaurantOfferPresentationInfo": {}
},
"analytics": {},
"cta": {
"link": "https://www.swiggy.com/restaurants/pastas-by-pizza-hut-maruti-nagar-madiwala-bangalore-826449",
"type": "WEBLINK"
}
},
{
"info": {
"id": "770774",
"name": "Crusto's - Gourmet Cheese Burst Pizza",
"cloudinaryImageId": "c77fe42b7997c566f491e84b540701ca",
"locality": "Ali Askar Road",
"areaName": "Cunningham Road",
"costForTwo": "₹300 for two",
"cuisines": [
"Pizzas",
"Pastas",
"Fast Food",
"Snacks",
"Beverages"
],
"avgRating": 4.4,
"parentId": "268955",
"avgRatingString": "4.4",
"totalRatingsString": "100+",
"sla": {
"deliveryTime": 41,
"lastMileTravel": 3,
"serviceability": "SERVICEABLE",
"slaString": "40-45 mins",
"lastMileTravelString": "3.0 km",
"iconType": "ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime": "2024-06-18 05:00:00",
"opened": true
},
"badges": {},
"isOpen": true,
"type": "F",
"badgesV2": {
"entityBadges": {
"imageBased": {},
"textBased": {},
"textExtendedBadges": {}
}
},
"aggregatedDiscountInfoV3": {
"header": "₹125 OFF",
"subHeader": "ABOVE ₹249",
"discountTag": "FLAT DEAL"
},
"differentiatedUi": {
"displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
"differentiatedUiMediaDetails": {
"mediaType": "ADS_MEDIA_ENUM_IMAGE",
"lottie": {},
"video": {}
}
},
"reviewsSummary": {},
"displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
"restaurantOfferPresentationInfo": {}
},
"analytics": {},
"cta": {
"link": "https://www.swiggy.com/restaurants/crustos-gourmet-cheese-burst-pizza-ali-askar-road-cunningham-road-bangalore-770774",
"type": "WEBLINK"
}
},
{
"info": {
"id": "739118",
"name": "Seoul Mate Korean Burgers",
"cloudinaryImageId": "d6a8cb3cae80e0a496e2d7fdbbbc1adb",
"locality": "Industrial Layout ward",
"areaName": "Kormangla",
"costForTwo": "₹200 for two",
"cuisines": [
"Burgers",
"Bubble Tea",
"Beverages",
"Fast Food",
"Street Food"
],
"avgRating": 4.2,
"parentId": "372969",
"avgRatingString": "4.2",
"totalRatingsString": "100+",
"sla": {
"deliveryTime": 41,
"lastMileTravel": 6.4,
"serviceability": "SERVICEABLE",
"slaString": "40-45 mins",
"lastMileTravelString": "6.4 km",
"iconType": "ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime": "2024-06-25 00:00:00",
"opened": true
},
"badges": {},
"isOpen": true,
"type": "F",
"badgesV2": {
"entityBadges": {
"imageBased": {},
"textBased": {},
"textExtendedBadges": {}
}
},
"aggregatedDiscountInfoV3": {
"header": "₹100 OFF",
"subHeader": "ABOVE ₹349",
"discountTag": "FLAT DEAL"
},
"differentiatedUi": {
"displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
"differentiatedUiMediaDetails": {
"mediaType": "ADS_MEDIA_ENUM_IMAGE",
"lottie": {},
"video": {}
}
},
"reviewsSummary": {},
"displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
"restaurantOfferPresentationInfo": {}
},
"analytics": {},
"cta": {
"link": "https://www.swiggy.com/restaurants/seoul-mate-korean-burgers-industrial-layout-ward-kormangla-bangalore-739118",
"type": "WEBLINK"
}
}]

 const Body= ()=>{
    return (
        <div className="body">
           <div className="search">search</div>
           <div className="restaurantcontainer">
              {
                resList.map((restaurant)=>(
                  <Restaurentcard key={restaurant.info.id} data={restaurant}/>
                )) 
              }
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

