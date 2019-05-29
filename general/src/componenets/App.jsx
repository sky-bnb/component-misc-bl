/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable max-len */
import React from 'react';
import '../App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      toggle: false,
      moduleWin: false,

    };
    this.toggleShow = this.toggleShow.bind(this);
    this.moduleShow = this.moduleShow.bind(this);
  }

  toggleShow() {
    const { toggle } = this.state;
    if (toggle) {
      this.setState({ toggle: false });
    } else {
      this.setState({ toggle: true });
    }
  }

  moduleShow() {
    const { moduleWin } = this.state;
    if (moduleWin) {
      this.setState({ moduleWin: false });
    } else {
      this.setState({ moduleWin: true });
    }
  }


  render() {
    const { toggle, moduleWin } = this.state;
    const popUp = (
      <div className="modalAm">
        <div className="amenitiesContent">
          <div className="leaveModal" onClick={this.moduleShow}>
            x
          </div>
          <h2>
            Amenities
          </h2>
          <div className="basic">
            <h3>
            Basic
            </h3>
            <div>
              Wifi
            </div>
            <div className="border">
              <div className="line">
              &nbsp;
              </div>
            </div>
            <div>
              Fireplace
            </div>
            <div className="border">
              <div className="line">
              &nbsp;
              </div>
            </div>
            <div>
              Air condition
            </div>
            <div className="border">
              <div className="line">
              &nbsp;
              </div>
            </div>
            <div>
              Heating
            </div>
          </div>
          <div className="dining">
            <h3>
              Dining
            </h3>
            <div>
              Kitchen
            </div>
            <div className="border">
              <div className="line">
              &nbsp;
              </div>
            </div>
            <div>
              Refrigerator
            </div>
            <div className="border">
              <div className="line">
              &nbsp;
              </div>
            </div>
            <div>
              Stove
            </div>
            <div className="border">
              <div className="line">
              &nbsp;
              </div>
            </div>
            <div>
              Cooking Basics
            </div>
          </div>
          <div className="bedAndBath">
            <h3>
            Bed and bath
            </h3>
            <div>
              Hair Dryer
            </div>
            <div className="border">
              <div className="line">
              &nbsp;
              </div>
            </div>
            <div>
              Shampoo
            </div>
            <div className="border">
              <div className="line">
              &nbsp;
              </div>
            </div>
            <div>
              Bed linens
            </div>
            <div className="border">
              <div className="line">
              &nbsp;
              </div>
            </div>
            <div>
              Towels
            </div>
          </div>
          <div className="safety">
            <h3>
              Safety features
            </h3>
            <div>
              Fire extinguisher
            </div>
            <div className="border">
              <div className="line">
              &nbsp;
              </div>
            </div>
            <div>
              Carbon monoxide detector
            </div>
            <div className="border">
              <div className="line">
              &nbsp;
              </div>
            </div>
            <div>
              First aid kit
            </div>
          </div>
        </div>
      </div>
    );
    return (
      <div>
        <div className="summary">
          <div className="house">
            <h1>
              <span>
              Beverly Hills/West Hollywood Dream Mansion
              </span>
            </h1>
            <div className="location">
            West Hollywood
            </div>
          </div>
          <div className="hostIcon">
            <img src="https://marriedbiography.com/wp-content/uploads/2017/03/Jessica-Burciaga.jpg" alt="" />
          </div>
        </div>
        <div>
          <div className="villa">
            <div className="icon">
              <i className="fas fa-home" />
            </div>
            <div className="size">
              <div>
                <strong>
                Entire Villa
                </strong>
              </div>
              <div className="bedroom">
                <div className="guests">
                16+ guests
                </div>
                <div className="guests">
                3 bedrooms
                </div>
                <div className="guests">
                5 beds
                </div>
                <div className="guests">
                3 baths
                </div>
              </div>
            </div>
          </div>
          <div className="highlight">
            <div className="icon">
              <i className="fas fa-map-marker-alt" />
            </div>
            <div>
              <div>
                <strong>
                Location friendly
                </strong>
              </div>
              <div>
                6 recent guests said this place has great location
              </div>
            </div>
          </div>
          <div className="border">
            <div className="line">
            &nbsp;
            </div>
          </div>
        </div>
        <div className="space">
          <div>
          Soaring ceilings with giant skylights provide a dramatic greeting as you enter this Mansion. The designer oasis boasts, pool, spa with waterfall, custom cabinetry, built-in barbecue, outdoor shower, and cabana / flex space. This architectural gem features all top-of-the-line finishes that envelop one as soon as theyre fortunate enough to step foot inside. Case in point, tis a truly smart home that allows one to control all of its dynamic functions from the touch of the wall-mounted iPad.
          </div>
          <div className="readMoreSpace">
            <div className={toggle ? 'show' : 'none'}>
              <div className="pair">
                <div>
                  <strong>
                  The space
                  </strong>
                </div>
                <div>
                Very private Los Angeles house in the BEST LOCATION!
                </div>
                <ul>
                  <li>
                  Gorgeous heated oasis pool with waterfall & jacuzzi
                  </li>
                  <li>
                  Outdoor fire pit
                  </li>
                  <li>
                  Indoor fireplace
                  </li>
                  <li>
                  4+ car parking
                  </li>
                  <li>
                  High-Speed WiFi
                  </li>
                  <li>
                  Cable TV 200+ Channels
                  </li>
                </ul>
              </div>
              <div className="pair">
                <div>
                LOCATION:
                </div>
                <div>
                The house is located in the best area of Los Angeles, on a residential street, you are less than 5-10 min away to Beverly Hills, Rodeo Dr, Sunset Strip, The Grove, West Hollywood, and numerous shops and restaurants.
                </div>
              </div>
              <div className="pair">
                <div>
                SAFETY:
                </div>
                <div>
                The neighborhood is extremely safe. It is ok to walk around in the early morning or late at night.
                </div>
              </div>
              <div className="pair">
                <div>
                HOUSE:
                </div>
                <div>
                Living room of the house is cozy and relaxing. There is a fire place, plenty of books, L shape couch with pillows, and Cable TV with 200+ channels.
                </div>
                <div>
                Dinning room is fine with designer furniture.
                2 Bedroom have Queen size bed, 1 bedroom have King size bed. All the rooms have plenty of closet space, and mirrors.
                We can provide you with an extra air mattress if you need to.
                </div>
                <div>
                There are 3 bathroom in the house.
                </div>
              </div>
              <div className="pair">
                <div>
                OUTDOOR:
                </div>
                <div>
                The back yard of the house is large and completely private. There is a large oasis pool with waterfall & jacuzzi, fire pit and garden dinning area.
                </div>
              </div>
            </div>
            <div className="strongColor" onClick={this.toggleShow}>
              <strong>
                {toggle
                  ? 'Hide'
                  : 'Read more about the space'
                }
              </strong>
            </div>
            <div className="contactHost">
              <div className="strongColor">
                <strong>
                  Contact Host
                </strong>
              </div>
            </div>
            <div className="border">
              <div className="line">
              &nbsp;
              </div>
            </div>
          </div>
        </div>
        <div className="amenities">
          <div>
            <strong>
              Ameneties
            </strong>
            <div className="amenitiesContainer">
              <div className="parking">
                <div className="topLeft">
                  <div className="icons">
                    <i className="fas fa-parking" />
                  </div>
                  <div>
                  Free parking on premises
                  </div>
                </div>
                <div className="topLeft">
                  <div className="icons">
                    <i className="fas fa-utensils" />
                  </div>
                  <div>
                  Kitchen
                  </div>
                </div>
              </div>
              <div className="wifi">
                <div className="topLeft">
                  <div className="icons">
                    <i className="fas fa-wifi" />
                  </div>
                  <div>
                  Wifi
                  </div>
                </div>
                <div className="topLeft">
                  <div className="icons">
                    <i className="fas fa-tv" />
                  </div>
                  <div>
                  TV
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="strongColor">
              <strong onClick={this.moduleShow}>
                Show all 10 amenities
              </strong>
            </div>
            {moduleWin ? popUp : ''}
          </div>
          <div className="border">
            <div className="line">
            &nbsp;
            </div>
          </div>
        </div>
        <div className="sleeping">
          <strong>
            Sleeping arrangements
          </strong>
          <div>
            <img src="https://s3-us-west-1.amazonaws.com/sky-bnb/sleep.png" alt="" className="sleep" />
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

export default App;
