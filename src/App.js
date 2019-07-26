import React, { Component } from 'react';
import Tiles from './components/tiles'
import Modal from './components/modal'
import tiles from './tiles.json'
import './App.css';
const maxClicks = tiles.length
class App extends Component {
  state = {
    clicked: [],
    tiles: tiles,
    clickCnt: 0,
    wins: 0,
    losses: 0
  };
  

  onClick = id => { 
    this.setState({ clickCnt: this.state.clickCnt +1 });
    // console.log('Clicks after: ' + this.state.clickCnt)
    if (this.state.clicked.includes(id)) {
      this.setState({ losses: this.state.losses + 1, clicked: [] });
      // console.log('duplicate');
    } else {
      this.state.clicked.push(id);
      // console.log(`unique ${this.state.clicked.length}`);
      if (this.state.clicked.length === maxClicks ) {
        // this.setState({ wins: this.state.wins + 1, clickCnt: 0, clicked: [] })
        this.setState({ wins: this.state.wins + 1,  clicked: [] })
        // <Modal > modal('show') </Modal>
      
      }
    }
    this.state.tiles.sort((a, b) => 0.5 - Math.random());
  }
 
  componentDidUpdate() {
    // if (this.state.clickCnt === this.state.tiles.length) {
    //   this.setState({ wins: this.state.wins +1, clickCnts: 0, clicked: []})
    // }
  }   
  componentDidMount() {
    console.log("fired componentDidMount");
    //*  place for an ajax call to get data from the server
    //* e.g. this.SetState({ movies })
  }


  render() {
    // console.log("app - rendered");
    return (
       <React.Fragment>
        <header>
          <div className="left">
            <p> Unique clicks:</p>
            <p> {this.state.clicked.length} of {maxClicks}</p>
          </div>
          <div className="center"><h1>Recognizing Emotions from Facial Expressions</h1>
            <p> Click each image only once to Win</p>
          </div>
          <div className="right">
            <p> Wins: {this.state.wins}</p>
            <p> Losses: {this.state.losses}</p>
          </div>
        </header>
        <div className="container">
          <div className="row">
            {this.state.tiles.map(tile => (
            <Tiles  
              image={tile.image}
              alt={tile.alt}
              onClick={() => this.onClick(tile.id)}
              key={tile.id}
            />
            ))}
        </div>
      </div>
     </React.Fragment>
    );
  }
}

export default App;
