import React from "react";

const Hello = props => <h1>Hi, {props.name}</h1>;

Hello.defaultProps = {
  name: "Anonymous"
};

const App = () => (
  <div>
    <Hello name="John" />
    <Hello />
  </div>
);

export default App;
