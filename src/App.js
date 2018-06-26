import React from "react";
import {connect} from "react-redux";

const App = ({times, count, max}) => (
  <div>
    <p>{times}</p>
    <p>highscore: {max}</p>
    <button onClick={count}>Count</button>
  </div>
);

const mapState = state => ({
  times: state.context.count,
  max: state.context.max,
});

const mapDispatch = {
  count: () => ({type: "INCREASE_ASYNC"}),
};

export default connect(
  mapState,
  mapDispatch
)(App);
