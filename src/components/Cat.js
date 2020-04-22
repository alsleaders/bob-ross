import React, { Component } from 'react'

class Cat extends Component {
  render() {
    console.log(this.props)
    return (
      <div>
        <div class="outer-image">
          <img class="image-area" src={this.props.image} />
          <section class="caption">
            <p>{this.props.number}</p>
            <div class="name-pic">
              <p>{this.props.name}</p>
              <img src={this.props.makerURL} />
            </div>
          </section>
        </div>
      </div>
    )
  }
}

export default Cat
