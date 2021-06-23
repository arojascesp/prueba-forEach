//TI imports
import React, { Fragment, Component } from "react";

//components imports
import ErrorComponent from "../components/ErrorComponent";
import CharacterList from "../components/CharacterList";
import Loader from "../components/Loader";
import PagesNavigation from "../components/PagesNavigation";

class CharacterListPage extends Component {
  state = {
    loading: true,
    error: null,
    data: {
      results: [],
    },
    modalIsOpen: false,
  };

  componentDidMount() {
    this.fetchData();
  }

  fetchData = async () => {
    try {
      const response = await fetch("https://swapi.dev/api/people");
      const data = await response.json();

      this.setState({ loading: false, data: data });
    } catch (error) {
      this.setState({
        loading: false,
        error: error,
        data: null,
      });
    }
  };

  handleOpenModal = (e) => {
    this.setState({ modalIsOpen: true });
  };

  handleCloseModal = (e) => {
    this.setState({ modalIsOpen: false });
  };

  render() {
    if (this.state.loading) {
      return <Loader />;
    }
    if (this.state.error) {
      return <ErrorComponent error={this.state.error} />;
    }

    return (
      <div className="container">
        <CharacterList
          characterList={this.state.data.results}
          onOpenModal={this.handleOpenModal}
          onCloseModal={this.handleCloseModal}
          modalIsOpen={this.state.modalIsOpen}
        />

        <PagesNavigation />
      </div>
    );
  }
}

export default CharacterListPage;
