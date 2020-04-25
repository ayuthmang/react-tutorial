import React from "react";
import PropTypes from "prop-types";

const Hello = (props) => <h1>Hi, {props.name}</h1>;

Hello.propTypes = {
  name: PropTypes.string.isRequired,
};

const App = () => (
  <div>
    <Hello name="John" />
    <Hello />
  </div>
);

export default App;
