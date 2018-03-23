import React, { Component } from 'react';
import './ContactPageButton.css';
import PropTypes from 'prop-types';

class ContactPageButton extends Component {
  render() {
    const { color } = this.props;

    let classes = 'ContactPageButton';
    if (color) classes += ' ' + color;

    return (
      <button className={classes}></button>
    );
  }
}

ContactPageButton.propTypes = {
  color: PropTypes.oneOf(['green', 'red'])
}

export default ContactPageButton;
