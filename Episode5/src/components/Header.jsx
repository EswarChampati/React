import {LOGO_URL,DROPDOWN_URL} from "../utils/constants"

const Header = ()=>{
    return (
        <div id="header">
            <div id="logo-address">
                <img id="logo" src={LOGO_URL}></img>
                <div id="location">
                    <p id="other"> <b>Other</b></p>
                    <p>791111
                        <img id="dropdown-image" src={DROPDOWN_URL}></img>
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
export default Header