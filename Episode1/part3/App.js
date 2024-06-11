const heading = React.createElement(
                                    "h1",
                                    {id:"heading"},
                                    "Hello world from React"
                                   )
console.log(heading)  //heading is a object 
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(heading)