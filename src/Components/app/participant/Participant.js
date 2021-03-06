import React, { Component } from 'react';


class Participant extends Component {

  handleClick = () => { this.props.onClick(this.props.p.id) }

  handleDelete = () => { this.props.onDelete(this.props.p.id) }

  render() {
    return (
        <span className="deleteButton" onClick={this.handleDelete}>x</span>
    );
  }
}

export default Participant;