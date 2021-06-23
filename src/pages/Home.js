//TI imports
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

//components imports
import NumberList from "../components/NumberList";
import CharacterContainer from "./CharacterContainer";
import Layout from "../components/Layout";

const Home = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/fizzbuzz" component={NumberList} />
          <Route exact path="/swapi" component={CharacterContainer} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
};

export default Home;
