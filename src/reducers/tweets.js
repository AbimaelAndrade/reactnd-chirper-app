import { RECEIVE_TWEETS, TOGGLE_TWEET, ADD_TWEET } from "../actions/tweets";

function toggleTweet(state = {}, action) {
  return {
    ...state,
    [action.id]: {
      ...state[action.id],
      likes:
        action.hasLiked === true
          ? state[action.id].likes.filter(uid => uid !== action.authedUser)
          : state[action.id].likes.concat([action.authedUser])
    }
  };
}

function addTweet(state = {}, action) {
  const { tweet } = action;

  let replyingTo = {};

  if (tweet.replyingTo !== null) {
    replyingTo = {
      ...state,
      [tweet.replyingTo]: {
        ...state[tweet.replyingTo],
        replies: state[tweet.replyingTo].replies.concat([tweet.id])
      }
    };
  }

  return {
    ...state,
    [tweet.id]: tweet,
    ...replyingTo
  };
}

export default function tweets(state = {}, action) {
  switch (action.type) {
    case RECEIVE_TWEETS:
      return {
        ...state,
        ...action.tweets
      };
    case TOGGLE_TWEET:
      return toggleTweet(state, action);
    case ADD_TWEET:
      return addTweet(state, action);
    default:
      return state;
  }
}
