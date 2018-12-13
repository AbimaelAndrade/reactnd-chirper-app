import React, { Component } from "react";
import { connect } from "react-redux";
import { handdleAddTweet } from "../actions/tweets";
import { Redirect } from "react-router-dom";

class NewTweet extends Component {
  state = {
    text: ""
  };

  handdleChange = e => {
    const text = e.target.value;
    this.setState({
      text,
      toHome: false
    });

    console.log(this.state.text);
  };

  handdleSubmit = e => {
    e.preventDefault();
    const { text } = this.state;
    const { dispatch, id } = this.props;

    dispatch(handdleAddTweet(text, id));

    this.setState({ text: "", toHome: id ? false : true });
  };

  render() {
    const { text, toHome } = this.state;
    let tweetLeft = 280 - text.length;

    if (toHome === true) {
      return <Redirect to="/" />;
    }

    return (
      <div>
        <h3 className="center">Compose new Tweet</h3>
        <form className="new-tweet" onSubmit={this.handdleSubmit}>
          <textarea
            placeholder="What's happening?"
            value={text}
            onChange={this.handdleChange}
            className="textarea"
            maxLength={280}
          />
          {tweetLeft <= 100 && (
            <div className="tweet-length"> {tweetLeft} </div>
          )}

          <button type="submit" className="btn" disabled={text === ""}>
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default connect()(NewTweet);
