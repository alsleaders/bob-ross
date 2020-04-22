import React, { Component } from 'react'
import axios from 'axios'
import Cat from './Cat'

const API_URL = 'https://sdg-octodex.herokuapp.com/'
const HexbotAPI = 'https://api.noopschallenge.com/hexbot?count=2'

function getRandomInt() {
  return Math.floor(Math.random() * Math.floor(149))
}
class HelloWorld extends Component {
  state = {
    cats: [],
  }

  goGetTheCats() {
    fetch(`${API_URL}`)
      .then((resp) => {
        console.log(resp.json)
        return resp.json()
      })
      .then((items) => {
        console.log(items.data)
        this.setState({ cats: items.data })
      })
  }

  componentDidMount() {
    axios.get(HexbotAPI).then((resp) => {
      this.setState({
        boxColor: resp.data.colors[0].value,
        borderColor: resp.data.colors[1].value,
      })
    })
  }

  // goGetTheCats = () => {
  //   fetch(`${API}`).then((response) => {
  //     console.log(response)
  //     this.setState({
  //       listOfCats: response,
  //     }).then(console.log('hello'))
  //   })
  //   axios.get('/api/location').then(resp => {
  //     this.setState({
  //       mapList: resp.data

  //   .catch(error => {
  //     alert('Please check your button and try again!')
  //   })
  // }

  render() {
    return (
      <>
        <button onClick={() => this.goGetTheCats()}>Octocats</button>

        <section
          className="hex-color"
          style={{ background: this.state.borderColor }}
        >
          <div
            className="container boxShape"
            style={{ background: this.state.boxColor }}
          >
            <section class="main-body">
              <p>
                This is {this.state.boxColor} color box <br />
                {this.state.cats.map((cat) => {
                  return (
                    <Cat
                      key={cat.name}
                      image={cat.image}
                      name={cat.name}
                      number={cat.number}
                      makerURL={cat.authors[0].image}
                    />
                  )
                })}
                <br />
                with a {this.state.borderColor} border
              </p>
            </section>
          </div>
        </section>

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
