import { Component } from "react";
import MethodesComponent from "./MethodesComponent.js";
import LifeCycle from "./LifeCycle";
import "./App.css";

class App extends Component {
  state = {
    display: true,
  };

  ShowOrDelete = () => {
    this.setState({
      display: !this.state.display,
    });
  };

  render() {
    const showComponent = this.state.display ? (
      <LifeCycle name="Toto 2"></LifeCycle>
    ) : (
      <div></div>
    );

    const hello = <MethodesComponent />;

    return (
      <div className="App">
        {showComponent}
        <button onClick={this.ShowOrDelete}>Cliquez ici !</button>
        {hello}
      </div>
    );
  }
}

export default App;
