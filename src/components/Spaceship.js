// Code The Spaceship Component Here
import React from "react";


export default class Spaceship extends React.Component {

  render () {
    return (
      <div>
        <p>Name:{this.props.name}</p>
        <p>Speed: {this.props.speed}</p>
        <p>hasRockets: {this.props.hasRockets}</p>
        <p>colors: {this.props.colors}</p>
      </div>

    )
  }

}

Spaceship.defaultProps = {
  name: "lf"
  speed: slow
  hasRockets: false
  colors: ['black', 'red']
}
