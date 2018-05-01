import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Calendar from 'rc-calendar';
import 'rc-calendar/assets/index.css';
import DatePicker from 'rc-calendar/lib/Picker';
import './Homepage.css';
import ProfilePic from './pics/profile.jpg';

class Homepage extends Component {
  constructor(props){
    super(props);
    this.state={
      
    }



    this.search=this.search.bind(this);
  }


  search(e){
    this.props.search(e);
  }

  render() {
    const format = 'YYYY-MM-DD';

    return (
      <div className="Homepage">
        <div className="wrapper">
          <header>DocuMe</header>
          <aside>
            <img src={ProfilePic} alt={ProfilePic} className="profile"></img>
            <Link to="/personal"><div className="side">Personal</div></Link>
            <Link to="/"><div className="side">&#9733; Home</div></Link>
            <Link to="/groups"><div className="side">Groupings</div></Link>
            <Link to="/new"><div className="side">Create New</div></Link>
          </aside>
          <main>
            <div className="filterBar">
              <div className="filterBy">Filter By Date: </div>
              <div className="datePicker">
                <DatePicker
                  getCalendarContainer={this.getCalendarContainer}

                  calendar={
                    <Calendar

                    />
                  }
                >
                {
                  ({ value }) => {
                    return (
                      <span>
                        <input
                          style={{ width: 200 }}
                          readOnly
                          placeholder="Choose Date"
                          value={value && value.format(format) || ''}
                        />
                      </span>
                    );
                  }
                }
              </DatePicker>
            </div>
            <button className="showAll">Show All</button>
            <input className="search" placeholder="Search" onChange={this.search}></input>
          </div>
            <div className="entries">
              {this.props.entries}
            </div>
          </main>
        </div>
      </div>
    );
  }
}

export default Homepage;
