import React, { Component } from 'react';
import './List.css';
import ContactPageButton from './ContactPageButton';
import dropdownIcon from './pics/dropdown.png';
import dropupIcon from './pics/dropup.png';

class List extends Component {
  constructor(props){
    super(props);
    this.state={
      open: true,
      show: false,
      fav: false
    };
    this.toggle=this.toggle.bind(this);
    this.showModal=this.showModal.bind(this);
    this.closeModal=this.closeModal.bind(this);
    this.addFav=this.addFav.bind(this);
  }

  toggle(){
    this.setState({
      open: !this.state.open
    });
  }

  showModal(){
    this.setState({
      show: true
    });
  }

  closeModal(){
    this.setState({
      show: false
    });
  }

  addFav(){
    this.setState({
      fav: !this.state.fav
    });
    this.props.addFav();
  }

  render() {
    let imgSrc = dropdownIcon;
    let collapseAll = "collapseAll";
    if (this.props.mustShow || this.state.open===true){
      collapseAll += ' in';
      imgSrc = dropupIcon;
    }

    let modalClass = "hideModal";
    if (this.state.show===true) {
      modalClass = "showModal";
    }

    let star = "notFav";
    let whiteStar = "blockStar";
    let blackStar = "noneStar";
    if (this.state.fav===true) {
      star = "isFav";
      whiteStar = "noneStar";
      blackStar = "blockStar";
    }

    return (
      <div className="List">
          <p className="category">All</p>
          <img src={imgSrc} alt={imgSrc} className="dropImage" onClick={this.toggle}/>

          <div className={modalClass}>
            <div className="modal-content">
              <span className="close" onClick={this.closeModal}>&times;</span>
              <div className="contactInfo">
                <div>{this.props.contactName}</div>
                <div className={star} onClick={this.addFav}>
                  <p className={whiteStar}>&#9734;</p>
                  <p className={blackStar}>&#9733;</p>
                </div>
                <div>{this.props.contactInfo}</div>
                <ContactPageButton color="green">Edit</ContactPageButton>
                <ContactPageButton color="red">Delete</ContactPageButton>
              </div>
            </div>
          </div>

          <div className={collapseAll} onClick={this.showModal}>{this.props.listName}</div>
          <div className="empty"></div>
      </div>
    );
  }
}

export default List;
