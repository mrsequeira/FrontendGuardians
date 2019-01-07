import React, { Component } from 'react';


class Participant extends Component {

  handleClick = () => { this.props.onClick(this.props.p.id) }

  handleDelete = () => { this.props.onDelete(this.props.p.id) }

  render() {
    return (
      <div className="tile">
        <span className="deleteButton" onClick={this.handleDelete}>x</span>
      </div>
    );
  }
}

export default Participant;