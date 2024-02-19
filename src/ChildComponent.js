import { Component } from "react";

class ChildComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    console.log("Je suis dans le constructor() ENFANT");
  }

  componentDidMount() {
    console.log("Je suis dans le componentDidMount() ENFANT");
  }

  render() {
    console.log("Je suis dans le render() ENFANT");
    return (
      <div>{console.log("Mise à jour DOM dans composant ENFANT")}hello</div>
    );
  }
}

export default ChildComponent;
