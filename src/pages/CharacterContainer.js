//TI imports
import React, { Component } from "react";

//components imports
import Loader from "../components/Loader";
import CharacterList from "../components/CharacterList";
import PagesNavigation from "../components/PagesNavigation";
import ErrorPage from "../components/ErrorPage";

class CharacterContainer extends Component {
  state = {
    data: {
      previous: "",
      next: "https://swapi.dev/api/people/?page=2",
      results: [],
    },
    loading: true,
    error: null,
    modalIsOpen: "false",
    api_url: "https://swapi.dev/api/people/",
  };

  componentDidMount() {
    this.setState({ loading: "true" });
    this.fetchData(this.state.api_url);
  }

  fetchData = async (api_url) => {
    try {
      const response = await fetch(api_url);
      const data = await response.json();

      this.setState({
        loading: false,
        data: data,
      });
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  };

  handleUpgrade = (e) => {
    this.fetchData(this.state.data.next);
  };
  handleDecrease = (e) => {
    this.fetchData(this.state.data.previous);
  };

  handleOpenModal = (e) => {
    this.setState({ modalIsOpen: "true" });
  };

  handleCloseModal = (e) => {
    this.setState({ modalIsOpen: "false" });
  };

  render() {
    if (this.state.loading) {
      return <Loader />;
    }
    if (this.state.error) {
      return <ErrorPage error={this.state.error} />;
    }
    return (
      <div className="container">
        <CharacterList
          characterList={this.state.data.results}
          isOpen={this.state.modalIsOpen}
          openModal={this.handleOpenModal}
          closeModal={this.handleCloseModal}
        />
        <PagesNavigation
          nextPage={this.state.data.next}
          previousPage={this.state.data.previousPage}
          onUpgrade={this.handleUpgrade}
          onDecrease={this.handleDecrease}
        />
      </div>
    );
  }
}

export default CharacterContainer;
