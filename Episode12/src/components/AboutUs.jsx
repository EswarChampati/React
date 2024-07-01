import UserClass from "./UserClass.jsx";
import { Component } from "react";
import UserCard from "./UserCard.jsx";
import userContext1 from "../utils/UserContext";

class AboutUs extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {}
  render() {
    return (
      <div>
        <h1>About US</h1>
        <h2>this is namasthe food website</h2>
        <div>
          LoggedInUser---
          <userContext1.Consumer>
            {({ loggedInUser }) => (
              <h2 className="text-lg inline">{loggedInUser}</h2>
            )}
          </userContext1.Consumer>
        </div>
        <UserClass contact="@eswarchampati" />
        {/* <UserCard name="eswar" /> */}
      </div>
    );
  }
}
export default AboutUs;
