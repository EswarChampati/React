import React from "react"
import ReactDOM from "react-dom/client"

const Title= ()=>(
             <h1> title element</h1>
);

const Heading=()=>(
    <div>
        {Title()}
        <h1>Heading component</h1>
    </div>
);

const root=ReactDOM.createRoot(document.getElementById("root"))
root.render(<Heading/>)

