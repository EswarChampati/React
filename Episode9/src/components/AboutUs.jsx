import UserClass from "./UserClass.jsx";
import { Component } from "react";
import UserCard from "./UserCard.jsx";

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
        <UserClass contact="@eswarchampati" />
        {/* <UserCard name="eswar" /> */}
      </div>
    );
  }
}
export default AboutUs;
