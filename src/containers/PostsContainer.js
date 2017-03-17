import React, { Component } from 'react'
import { connect } from 'react-redux'
import { loadPosts, sort, group, allPosts } from '../actions/index'

class PostsContainer extends Component {
  componentDidMount () {
    this.props.loadPosts()
  }
  render () {
    const { main, sort, group, loadPosts, allPosts } = this.props
    return <div> 
      <b><a href="" onClick={() => window.location.reload()}>All post</a> / <a href="javascript:;" onClick={ () => sort(main)}> Sort title a-z </a> / <a href="javascript:;" onClick={ () => group(main)}>Group by username</a></b>
        { main.posts.map(x => <p> <b>{x.title.substr(0,1).toUpperCase() + x.title.substr(1)}</b><br/> <small>{x.body}</small><br/>User: {x.username} </p>) }
      </div>
  }
}

PostsContainer.propTypes = {
  main: React.PropTypes.object,
  loadPosts: React.PropTypes.func,
  sort: React.PropTypes.func,
  group: React.PropTypes.func
}

export default connect(({main}) => ({main}), {loadPosts, sort, group, allPosts})(PostsContainer)
