import React, { Component } from 'react'
import axios from 'axios'

const API = 'https://sdg-octodex.herokuapp.com/'

class HelloWorld extends Component {
  state = {
    array: []
  }

  goGetTheCats() {
    axios
      .get(API)
      .then(resp => {
        console.log(resp)
        console.log(resp.data)
        console.log(resp.data.data)
        return resp.data.data
      })
      .then(dog => {
        console.log(dog)
        // this.setState({
        //   array: dog
        // })
      })
      .catch(error => {
        alert('Please check your button and try again!')
      })
  }

  render() {
    return (
      <>
        <button onClick={this.goGetTheCats}>Octocats</button>
        <p>
          This is going to say something. <br />I haven't decided what yet.
        </p>

        <h4>P. Maharana Finds A Bug</h4>

        <p>
          {' '}
          One day, while walking through his code base, P. Maharana found a bug.
        </p>

        <p>
          Ahh. I don't wanna know your name. I don't wanna know anything
          anything about you. Ahh. Give me a hand, Lorenzo. Ow, dammit, man, I
          sliced my hand. Hey boy, are you alright?
        </p>

        <p>
          Yeah. Quiet, quiet. I'm gonna read your thoughts. Let's see now,
          you've come from a great distance? Whoa, whoa, kid, kid, stop, stop,
          stop, stop. Radiation suit, of course, cause all of the fall out from
          the atomic wars. This is truly amazing, a portable television studio.
          No wonder your president has to be an actor, he's gotta look good on
          television. Lorraine.
        </p>

        <p>
          I have to tell you about the future. Uh? Go. Go. Where the hell are
          they. Thanks.
        </p>
      </>
    )
  }
}

export default HelloWorld
