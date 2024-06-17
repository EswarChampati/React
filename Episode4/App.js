import React from "react"
import ReactDOM from "react-dom/client"

/*
  header
     logo
     nav items
  body
     search
     restaurantcontainer
      rstaurentcards
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

const AppLayout= ()=> {
    return(
        <div className="app">
             <Header/>
        </div>
    )
}

const root=ReactDOM.createRoot(document.getElementById("root"))
root.render(<AppLayout></AppLayout>)

