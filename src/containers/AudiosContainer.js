import React, { Component } from 'react'
import { connect } from 'react-redux'
import { loadPosts, sort, group } from '../actions/index'
import update from 'immutability-helper';

class AudiosContainer extends Component {
  constructor() {
    super()
    this.state = {
      choices: [
        { name: 'wave', url: 'https://static.bandlab.com/soundbanks/previews/new-wave-kit.ogg', props: { controls: 'controls' } },
        { name: 'organ', url: 'https://static.bandlab.com/soundbanks/previews/synth-organ.ogg', props: { controls: 'controls' } }
      ],
      items: [],
      playables: []
    }
  }

  load(data) {
    const newArray = this.state.items.slice()
    const newPlayables = this.state.playables.slice()
    newArray.push(data)
    const audio = new Audio(data.url)
    newPlayables.push(audio)
    this.setState({ items: newArray, playables: newPlayables })
  }

  playAll () {  
    this.stopAll()
    this.state.playables.map(x => {
      x.play()
    })
  }

  playOnly(data) {
    this.stopAll()
    const instrument = new Audio(data.url);
    instrument.play();
  }

  stopAll(){
    this.state.playables.forEach(x => {
      x.pause()
    })
  }
  render() {
    const { main, sort, group } = this.props
    return <div>
      <span>Audio Samples</span>
      <b>
        {this.state.choices.map(x => <li><a href="javascript:;" onClick={() => this.load(x)} > {x.name} </a></li>)}
      </b>
      <p>
        <button onClick={() => this.playAll()}>Play All</button> <button onClick={() => this.stopAll()}>Stop All</button>
      </p>
      <div>
        {
          this.state.items.map((x, i) => <p>{x.name}    <audio>
            <source src={x.url} type="audio/ogg" />
          </audio> <button onClick={() => this.playOnly(x)}>Play Only {x.name}</button></p>)
        }
      </div>

    </div>
  }
}

AudiosContainer.propTypes = {
  main: React.PropTypes.object
}

export default connect(({ main }) => ({ main }), {})(AudiosContainer)
