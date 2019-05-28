/* eslint-disable no-alert */
/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
/* eslint-disable max-len */
import React from 'react';
import scriptLoader from 'react-async-script-loader';
import { google_API } from '../../server/google-api';
import '../App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {

    };
  }

  componentWillUpdate({ isScriptLoadSucceed }) {
    if (isScriptLoadSucceed) {
      const markers = [];
      const options = {
        zoom: 14,
        center: { lat: 37.7749300, lng: -122.4194200 },
      };
      const map = new window.google.maps.Map(document.getElementById('map'), options);

      const marker = new google.maps.Marker({
        position: { lat: 37.7749300, lng: -122.4194200 },
        map,
      });
    } else {
      alert('script not loaded');
    }
  }

  render() {
    return (
      <div>
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
            <div className="iconHost">
              <img src="https://marriedbiography.com/wp-content/uploads/2017/03/Jessica-Burciaga.jpg" alt="" />
            </div>
          </div>
          <div className="verified">
            <div className="hostStar">
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
        <div className="neighborhood">
          <h2>
          The neighborhood
          </h2>
          <div>
            <strong>
            Features
            </strong>
            · diverse · the grove · safe · koreatown · nightlife · architecture
          </div>
          <div className="living">
          Living The Dream’s home is located in West Hollywood, California, United States.
          </div>
          <div>
          The house is located in one of the best area of Los Angeles—the heart of West Hollywood. Walk to Melrose Avenue, or take a few minutes drive to Beverly Hills, the Grove, farmers markets, and much more.
          </div>
          <div className="readMore">
            <strong>
            Read more about the neighborhood
            </strong>
          </div>
          <div className="googleMap">
            <div id="map" />
          </div>
          <div>
          Exact location information is provided after a booking is confirmed.
          </div>

          <div className="border">
            <div className="line">
            &nbsp;
            </div>
          </div>
        </div>
        <div className="policies">
          <h2>
              Policies
          </h2>
          <div>
            <div className="rules">
              <strong>
              House Rules
              </strong>
            </div>
            <div className="rules">
            No smoking
            </div>
            <div className="rules">
            No pets
            </div>
            <div className="rules">
            Check-in is anytime after 4PM and check out by 11AM
            </div>
            <div>
              <strong className="strongColor">
               Read all rules
              </strong>
            </div>
          </div>
          <div className="border">
            <div className="line">
              &nbsp;
            </div>
          </div>
          <div>
            <h4>
                Cancellations
            </h4>
            <div>
              <div>
                <strong>
                 Strict - Free cancellation for 48 hours
                </strong>
              </div>
              <div>
              After that, cancel up to 7 days before check-in and get a 50% refund, minus the service fee.
              </div>
              <div>
                <strong className="strongColor">
                 Read more about the policy
                </strong>
              </div>
            </div>
          </div>
          <div className="border">
            <div className="line">
              &nbsp;
            </div>
          </div>
          <div>
            <strong className="strongColor">
              Report this listing
            </strong>
          </div>
          <div className="border">
            <div className="line">
              &nbsp;
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default scriptLoader(
  [`https://maps.googleapis.com/maps/api/js?key=${google_API}`],
)(App);
