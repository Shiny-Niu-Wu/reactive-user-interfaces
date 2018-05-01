import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import {Link} from 'react-router-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import LoginScreen from './LoginScreen'
import Homepage from './Homepage';
import Personal from './Personal';
import Entries from './Entries';
import GroupPage from './GroupPage';
import Group from './Group';
import GroupBox from './GroupBox';
import New from './New';
import EntryBox from './EntryBox';
import './App.css';

injectTapEventPlugin();

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      entries: [],
      groups: [],
      loginPage:[],
      uploadScreen:[],
      id: '',
      search: '',
      searchGroup: '',
      selectedGroup: ''
    };

    this.listEntries=this.listEntries.bind(this);
    this.newGroup=this.newGroup.bind(this);
    this.search=this.search.bind(this);
    this.searchGroup=this.searchGroup.bind(this);
    this.clickGroup=this.clickGroup.bind(this);
  }

  componentWillMount(){
    let loginPage =[];
    loginPage.push(<LoginScreen parentContext={this}/>);
    this.setState({
      loginPage:loginPage
    })
  }

  listEntries(date, title, group, html){
    let entriesCopy = this.state.entries.slice();
    entriesCopy.unshift({
      date: date,
      title: title,
      group: group,
      html: html,
      id: entriesCopy.length
    });
    this.setState({
      entries: entriesCopy
    });
  }

  newGroup(groupName){
    let groupCopy = this.state.groups.slice();
    groupCopy.unshift({
      groupName: groupName,
      id: groupCopy.length
    });
    this.setState({
      groups: groupCopy
    });
  }

  clickGroup(group){
    this.setState({
      selectedGroup: group
    });
  }



  search(e){
    this.setState({
      search: e.target.value
    });
  }

  searchGroup(e){
    this.setState({
      searchGroup: e.target.value
    });
  }

  render() {
    let entriesCopy = this.state.entries.slice();
    let groupsCopy = this.state.groups.slice();

    const chooseGroup = groupsCopy.map((group, i) => {
      return(
          <option key={'option' + group.id}>
            {group.groupName}
          </option>
      );
    })

    return (
      <Router>
        <div className="App">
        {this.state.loginPage}
        {this.state.uploadScreen}
          <Route exact path="/" render={props => {


            if (this.state.search !== " ") {
              entriesCopy = entriesCopy.filter((entry) => {
                const searching = this.state.search.toLowerCase();
                const title = entry.title.toLowerCase();
                const content = entry.html.toLowerCase();
                const group = entry.group.toLowerCase();
                return title.match(searching) || content.match(searching) || group.match(searching)
              });
            }



            const allEntries = entriesCopy.map((entry, i) => {
              return(
                <Link to={"/diary/" + entry.id} key={'entry-'+entry.id}>
                  <div className="boxes">
                    <EntryBox
                      title={entry.title}
                      date={entry.date}
                    />
                  </div>
                </Link>
              );
            })

            return(
              <Homepage
                entries={allEntries}
                search={this.search}
                clickDay={this.clickDay}
              />
            );
          }}
          />
          <Route path="/diary/:id" render={props => {
            const entry = this.state.entries.find(
                c => c.id === parseInt(props.match.params.id)
              );

            return(
              <Entries
                entryDate={entry.date}
                entryTitle={entry.title}
                entryContent={entry.html}
                entryGroup={entry.group}
              />
            );
          }}
          />
          <Route path="/groups" render={props => {
            if (this.state.searchGroup !== " ") {
              groupsCopy = groupsCopy.filter((group) => {
                const searching = this.state.searchGroup.toLowerCase();
                const groupName = group.groupName.toLowerCase();
                return groupName.match(searching);
              });
            }

            const allGroups = groupsCopy.map((group, i) => {
              return(
                <Link to={"/group/" + group.id} key={'group' + group.id}>
                  <div  className="boxes">
                    <GroupBox
                      group={group.groupName}
                      clickGroup={this.clickGroup}
                    />
                  </div>
                </Link>
              );
            })

            return(
              <GroupPage
                newGroup={this.newGroup}
                groups={allGroups}
                searchGroup={this.searchGroup}
              />
            );
          }}
          />
          <Route path="/group/:id" render={props => {
            const group = this.state.groups.find(
                c => c.id === parseInt(props.match.params.id)
              );

              if (this.state.selectedGroup!== '') {
                entriesCopy = entriesCopy.filter((entry) => {
                  const selectedGroup = this.state.selectedGroup.toLowerCase();
                  const matchedEntries = entry.group.toLowerCase();
                  return matchedEntries.match(selectedGroup)
                });
              }

              const allEntries = entriesCopy.map((entry, i) => {
                return(
                  <Link to={"/diary/" + entry.id} key={'entry-'+entry.id}>
                    <div className="boxes">
                      <EntryBox
                        title={entry.title}
                        date={entry.date}
                      />
                    </div>
                  </Link>
                );
              })

            return(
              <Group
                entryGroup={group.groupName}
                entries={allEntries}
              />
            );
          }}
          />
          <Route path="/new" render={props => (
              <New
                submitEntry={this.listEntries}
                groupOption={chooseGroup}
              />
            )}
          />
          <Route path="/personal" render={props => (
              <Personal

              />
            )}
          />
        </div>
      </Router>
    );
  }
}

export default App;
