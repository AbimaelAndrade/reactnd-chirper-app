import React, { Component } from "react";
import { connect } from "react-redux";
import { handleIncialData } from "../actions/shared";
import Dashboad from "./Dashboad";
import TweetPage from "./TweetPage";
import LoadingBar from "react-redux-loading";

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleIncialData());
  }

  render() {
    return (
      <div>
        <LoadingBar />
        {this.props.loading === true ? null : (
          <TweetPage match={{ params: { id: "hbsc73kzqi75rg7v1e0i6a" } }} />
        )}
      </div>
    );
  }
}

const mapStateToProps = ({ authedUser }) => ({
  loading: authedUser === null
});

export default connect(mapStateToProps)(App);
