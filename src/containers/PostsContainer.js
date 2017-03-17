import React, { Component } from 'react'
import { connect } from 'react-redux'
import { loadPosts, sort, group } from '../actions/index'

class PostsContainer extends Component {
  componentDidMount () {
    this.props.loadPosts()
  }
  render () {
    const { main, sort, group } = this.props
    return <div> 
      <b><a href="javascript:;">All post</a> / <a href="javascript:;" onClick={ () => sort(main)}> Sort title a-z </a> / <a href="javascript:;" onClick={ () => group(main)}>Group by username</a></b>
        { main.posts.map(x => <li> {x.title} -- {x.username} </li>) }
      </div>
  }
}

PostsContainer.propTypes = {
  main: React.PropTypes.object,
  loadPosts: React.PropTypes.func
}

export default connect(({main}) => ({main}), {loadPosts, sort, group})(PostsContainer)
