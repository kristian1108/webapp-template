import React from "react";
import ReactDOM from "react-dom/client";
import HelloWorld from "./components/HelloWorld";

const App = () => {
  return (
    <div style={{width: "100%", height: "100%"}}>
      <HelloWorld />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);