import Alt from "./Alt";
import { Container, Button } from "reactstrap";
import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { derece: 0 };
  }

  render() {
    return (
      <div>
        <Container>
          <div className="my-4">
            <h1>Hava Nasıl</h1>
            <p>Şu anki sıcaklık = {this.state.derece} derece</p>
            <Button
              onClick={() => this.setState({ derece: this.state.derece + 1 })}
              className="me-1"
            >
              Sıcaklık Arttır
            </Button>
            <Button
              onClick={() => this.setState({ derece: this.state.derece - 1 })}
            >
              Sıcaklık Azalt
            </Button>
          </div>
          <Alt sicaklik={this.state.derece} />
        </Container>
      </div>
    );
  }
}

export default App;
