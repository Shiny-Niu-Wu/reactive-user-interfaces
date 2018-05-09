import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import {Link} from 'react-router-dom';
import Homepage from './Homepage';
import Personal from './Personal';
import Entries from './Entries';
import GroupPage from './GroupPage';
import Group from './Group';
import GroupBox from './GroupBox';
import New from './New';
import EntryBox from './EntryBox';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);

    this.listEntries=this.listEntries.bind(this);
    this.filterByDate=this.filterByDate.bind(this);
    this.newGroup=this.newGroup.bind(this);
    this.search=this.search.bind(this);
    this.searchGroup=this.searchGroup.bind(this);
    this.clickGroup=this.clickGroup.bind(this);
    this.addComment=this.addComment.bind(this);


    let stringState = localStorage.getItem('diaryData');
    if (stringState) {
      this.state = JSON.parse(stringState);
    } else {
      this.state={
        entries: [],
        groups: [],

        id: '',
        search: '',
        chosenDay: '',

        searchGroup: '',
        selectedGroup: '',
      }
    }

  }

  listEntries(date, title, group, html){
    let entriesCopy = this.state.entries.slice();
    entriesCopy.unshift({
      date: date,
      title: title,
      group: group,
      html: html,
      followUps: [],
      id: entriesCopy.length
    });
    this.setState({
      entries: entriesCopy
    });
  }

  filterByDate(e){
    this.setState({
      chosenDay: e.target.value
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

  addComment(comment, id){
    const entriesCopy = this.state.entries.slice();
    const index = this.state.entries.findIndex(e => id === e.id);
    const entryCopy = Object.assign({}, entriesCopy[index])
    const followUpsCopy = entryCopy.followUps.slice();
    followUpsCopy.push({
      comment: comment
    });
    entryCopy.followUps=followUpsCopy;
    entriesCopy[index]=entryCopy;
    this.setState({
      entries: entriesCopy
    });
  }

  componentDidUpdate(){
    const stringState = JSON.stringify(this.state);
    localStorage.setItem('diaryData', stringState);
  }

  render() {
    console.log(this.state);
    let entriesCopy = this.state.entries.slice();
    console.log(this.state.entries);
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
          <Route exact path="/" render={props => {

            entriesCopy = entriesCopy.sort((a, b) => {
              if (a.date.toLowerCase() < b.date.toLowerCase()) return 1;
              if (a.date.toLowerCase() > b.date.toLowerCase()) return -1;
              return 0;
            });

            if (this.state.chosenDay !== " ") {
              entriesCopy = entriesCopy.filter((entry) => {
                const day = this.state.chosenDay;
                const date = entry.date;
                return date.match(day)
              });
            }

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
                changeDate={this.filterByDate}
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
                entry={entry}
                addComment={this.addComment}
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
                  <div className="groupBox">
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
