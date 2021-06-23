//TI imports
import React from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";

//components imports
import Functional from "./Functional";
import CharacterListPage from "./CharacterListPage";
import CharacterDetail from "../components/CharacterDetail";

const Home = () => {
  return (
    <CharacterListPage />
    // <React.Fragment>
    //   <Functional />
    //   <BrowserRouter>
    //     <Switch>
    //       <Route exact path="/fizzbuzz" component={Functional} />
    //       <Route exact path="/characters" component={CharacterListPage} />
    //       <Route exact path="/character/details" component={CharacterDetail} />
    //     </Switch>
    //     <Link
    //       to="/characters"
    //       className="btn btn-dark text-center d-flex justify-content-center"
    //     >
    //       SWAPI
    //     </Link>
    //   </BrowserRouter>
    // </React.Fragment>
  );
};

export default Home;
