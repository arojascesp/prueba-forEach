//TI imports
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

//components imports
import FizzBuzz from "./FizzBuzz";
import CharacterContainer from "./CharacterContainer";
import Layout from "../components/Layout";
import CharacterDetails from "./CharacterDetails";

const Home = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={FizzBuzz} />
          <Route exact path="/swapi" component={CharacterContainer} />
          <Route exact path="/swapi/character" component={CharacterDetails} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
};

export default Home;
