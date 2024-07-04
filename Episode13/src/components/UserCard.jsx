import { useEffect, useState } from "react";
const UserCard = (props) => {
  const [count1] = useState(1);
  const [count2] = useState(2);
  useEffect(() => {
    const id = setInterval(() => {
      console.log("namesthe");
    }, 1000);
    return () => {
      clearInterval(id);
    };
  }, []);
  return (
    <div className="border border-solid border-black">
      <h1>count: {count1}</h1>
      <h1>count: {count2}</h1>
      <h2>Name: {props.name}</h2>
      <h3>Location: Bhimavaram</h3>
      <h4>Contact: eswarraghunadhavarma@gmail.com</h4>
    </div>
  );
};

export default UserCard;
