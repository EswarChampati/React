import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      UserInfo: {
        name: "dummyname",
        location: "Earth",
      },
    };
  }
  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/EswarChampati");
    const json = await data.json();
    this.setState({
      UserInfo: json,
    });
  }
  componentDidUpdate() {
    console.log("after updating the state variables");
  }
  componentWillUnmount() {
    console.log("component unmounted");
  }
  render() {
    const { name, location } = this.state.UserInfo;
    return (
      <div className="user-card">
        <h2>Name:{name}</h2>
        <h3>Location:{location}</h3>
        <h4>Contact:{this.props.contact}</h4>
      </div>
    );
  }
}
export default UserClass;
