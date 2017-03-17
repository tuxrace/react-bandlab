import React, { Component } from 'react'
import { connect } from 'react-redux'
import { loadPosts, sort, group } from '../actions/index'

class AudiosContainer extends Component {
  constructor () {
    super()
    this.state = {
      choices: [
        { name: 'wave', url: 'https://static.bandlab.com/soundbanks/previews/new-wave-kit.ogg' },
        { name: 'organ', url: 'https://static.bandlab.com/soundbanks/previews/synth-organ.ogg' }
      ],
      items: [1,2]
    }
  }

  load(data) {
    const items = this.state.items.push(data)
    this.setState({ items })
  }
  render() {
    const { main, sort, group } = this.props
    return <div>

      <b>
        {this.state.choices.map(x => <li><a href="javascript:;" onClick={() => this.load(x)} > {x.name} </a></li>)}
      </b>
      <div>
        {
          this.state.items.map((x, i) => <div>A </div>)
        }
      </div>
      <audio controls>
        <source type="audio/ogg" />
      </audio>
    </div>
  }
}

AudiosContainer.propTypes = {
  main: React.PropTypes.object
}

export default connect(({ main }) => ({ main }), {})(AudiosContainer)
