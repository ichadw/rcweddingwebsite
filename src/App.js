import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Routes from "./routes";

const App = () => (
  <HelmetProvider>
    <Router>
      <Routes />
    </Router>
  </HelmetProvider>
);

export default App;
