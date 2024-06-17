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
 const Restaurentcard=() =>{
    return (
        <div className="res-card" style={{ backgroundColor:"#f0f0f0"}}>
            <img className="res-log"
             src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/ipq0vykg2bzsouxnjyrw" 
             alt="image not found"></img>
            <h3>Ajantha canteen</h3>
            <h4>Dosa,idli,vada</h4>
            <h4>4.2 star</h4>
            <h4>40mins delivary time</h4>
        </div>
    )
}
const Body= ()=>{
    return (
        <div className="body">
           <div className="search">search</div>
           <div className="restaurantcontainer">
              <Restaurentcard/>
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

