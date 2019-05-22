import React from 'react';
import '../App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      test:[]
    };

  }

  render() {
    return (
      <section className="hostProfile">
        <div className="host">
          <div className="left">
            <div className="top">
            <h2>Hosted by Living The Dream</h2>
            </div>
            <div className="bottom">
              <div class="_czm8crp">Joined in February 2017</div>
            </div>
          </div>
          <div className="right">
            <img src="https://cdn.acidcow.com/pics/20170117/pretty_girls_02.jpg" />
          </div>
        </div>
        <div>
       <div>
           reviews
          </div>
          <div>
            verified
          </div>

        </div>
        <div>

        </div>
        <div>

        </div>
        <div>
          button
        </div>
        <div>
          border
        </div>
        <div>
          bottom
        </div>
        <div>
          border fotter
        </div>
        testing
      </section>
    );
  }
}

export default App;
