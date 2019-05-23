/* eslint-disable max-len */
import React from 'react';
import '../App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {

    };
  }

  render() {
    return (
      <div className="hostProfile">
        <div className="host">
          <div>
            <div className="top">
              <h2>Hosted by Living The Dream</h2>
            </div>
            <div className="bottom">
              <div className="_czm8crp">Joined in February 2017</div>
            </div>
          </div>
          <div>
            <img src="https://cdn.acidcow.com/pics/20170117/pretty_girls_02.jpg" alt="" />
          </div>
        </div>
        <div className="verified">
          <div>
            <i className="fas fa-star" />
           100 Reviews
          </div>
          <div className="verifiedCheck">
            <i className="fas fa-check-circle" />
            Verified
          </div>
        </div>
        <div>
          Living The Dream offers a 5* luxury hospitality services, with selection of business services and concierge services (exotic rental cars, private jets, yachts, dining reservations, and entertainment). Living the dream offers the epitome of a luxury vacation to travelers seeking the glitz and glamor associated with this world-famous California destination. From private Los Angeles villas overlooking a tremendous Hollywood Hills to high-end shopping excursions on Rodeo Drive and mouth-watering five-star restaurants in Beverly Hills, Los Angeles is a mecca for all things luxury.Condensing Los Angeles into a stereotype associated with celebrity lifestyles and Hollywood luxury would never do this California city justice. This beautiful city boasts a wide range of daytime activities and nightlife adventures making it a top vacation choice. Some vacationers travel to LA for the allure of cinema-worthy scenes and iconic entertainment centers, while others come to explore the diverse Pacific Coast beach towns or to unearth the natural beauty presented by its lulling valleys and majestic mountain ranges. Rent a Lo Angeles villa in one of the citys most popular neighborhoods to get the most out of your trip.
        </div>
        <div>
          <h4>
           Living The Dream supports the Living Wage Pledge
          </h4>
           People who clean this host’s listing are paid a living wage.&nbsp;
          <strong className="strongColor">
             Learn more
          </strong>

          <div className="languages">
            <div>
            Languages:&nbsp;
              <strong>
            English, Français, עברית, Español
              </strong>
            </div>
            <div className="response">
            Response rate:&nbsp;
              <strong>
              92%
              </strong>
            </div>
            <div className="time">
            Response time:&nbsp;
              <strong>
               within an hour
              </strong>
            </div>
          </div>
        </div>
        <div>
          <button className="contact" type="submit">
          Contact host
          </button>
        </div>
        <div className="border">
          <div className="line">
          &nbsp;
          </div>
        </div>
        <div>
          <strong>
          Always communicate through Airbnb&nbsp;
          </strong>
          · To protect your payment, never transfer money or communicate outside of the Airbnb website or app.&nbsp;
          <strong className="strongColor">
           Learn more
          </strong>
        </div>
        <div className="border">
          <div className="line">
          &nbsp;
          </div>
        </div>
      </div>
    );
  }
}

export default App;
