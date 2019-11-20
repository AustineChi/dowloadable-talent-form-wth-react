import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import GTSAForm from "./views/GTSAForm";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Route path="/" component={GTSAForm} />
      </BrowserRouter>
    </div>
  );
}

export default App;