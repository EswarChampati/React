// {/* <div id="parent">
//         <div id="child">
//             <h1>i am h1 tag</h1>
//         </div>
//     </div> */}
///create the above struture


//  const parent=React.createElement(
//     "div",
//     {id:"parent"},
//     React.createElement(
//         "div",
//         {id:"child"},
//         React.createElement(
//             "h1",{},"i am h1 tag"
//         )
//     )
// )
// console.log(parent) //parent is a react element or a javascript object by the end of the day
// const root=ReactDOM.createRoot(document.getElementById("root"))
// root.render(parent)







//  <div id="parent">
//         <div id="child">
//             <h1>i am h1 tag</h1>
//             <h2>i am h1 tag</h2>
//         </div>
// </div> 
//create the above structure

//  const parent=React.createElement(
//     "div",
//     {id:"parent"},
//     React.createElement(
//         "div",
//         {id:"child"},
//         [React.createElement(
//             "h1",{},"i am h1 tag"
//         ),
//         React.createElement(
//             "h2",{},"i am 2 tag"
//         )]
//     )
// )
// console.log(parent) //parent is a react element or a javascript object by the end of the day
// const root=ReactDOM.createRoot(document.getElementById("root"))
// root.render(parent) 






//  <div id="parent">
//     <div id="child1">
//         <h1>i am h1 tag</h1>
//         <h2>i am h1 tag</h2>
//     </div>
//     <div id="child2">
//             <h1>i am h1 tag</h1>
//             <h2>i am h1 tag</h2>
//     </div>
// </div>
// create this structure 

const parent =React.createElement(
                     "div",
                     {id:"parent"},
                     [React.createElement("div",{id:"child1"},
                        [React.createElement("h1",{},"i am h1 tag"),
                        React.createElement("h2",{},"i am h2 tag")]),
                     React.createElement("div",{id:"child2"},
                        [React.createElement("h1",{},"i am h1 tag"),
                        React.createElement("h2",{},"i am h2 tag")])]
                     )
const root=ReactDOM.createRoot(document.getElementById("root"))
root.render(parent)