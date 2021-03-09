import "./App.scss";

import { useEffect, useState } from "react";
import { Route, Switch } from "react-router";
import BlogPage from "./pages/BlogPage";
import AboutPage from "./pages/AboutPage";
import HomePage from "./pages/HomePage";
import Navbar from "./components/nav/Navbar";

function App() {
  // useEffect(() => {
  //   const getDestinations = async () => {
  //     const response = await axios.get(
  //       `http://traveldestinations.dd:8083/jsonapi/node/destination`
  //     );

  //     setDestinations(response.data.data);
  //   };
  //   getDestinations();
  // }, []);

  // console.log("what is destinations", destinations);

  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route path="/blog" component={BlogPage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/" component={HomePage} />
      </Switch>
    </div>
  );
}

export default App;
