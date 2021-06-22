//TI imports
import React, { Fragment, Component } from "react";

//components imports
import ErrorComponent from "../components/ErrorComponent";
import CharacterList from "../components/CharacterList";
import Loader from "../components/Loader";
import PagesNavigation from "../components/PagesNavigation";

class CharacterListPage extends Component {
  state = {
    data: {
      results: [],
    },
    loading: true,
    error: null,
  };

  componentDidMount() {
    this.fetchData();
  }

  fetchData = async () => {
    try {
      const response = await fetch("https://swapi.dev/api/people/");
      const data = await response.json();

      this.setState({
        data: data,
        loading: false,
      });
    } catch (error) {
      this.setState({
        loading: false,
        error: error,
      });
      return <ErrorComponent error={error} />;
    }
  };

  render() {
    const characterList = this.state.data.results;
    const nextPage = this.state.data.next;
    const previousPage = this.state.data.previous;

    if (this.state.loading) {
      return <Loader />;
    }

    return (
      <Fragment>
        <CharacterList
          characterList={characterList}
          nextPage={nextPage}
          previousPage={previousPage}
        />
        <PagesNavigation />
      </Fragment>
    );
  }
}

export default CharacterListPage;
