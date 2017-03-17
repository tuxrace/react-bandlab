async function username (data) {
  return fetch(`https://jsonplaceholder.typicode.com/users/${data.userId}`)
    .then(r => r.json())
    .then(r => Object.assign(data, {username: r.username}))
}

export const loadPosts = data => (dispatch, getState) => {
  fetch(`https://jsonplaceholder.typicode.com/posts`)
  .then(r => r.json())
  .then(r => r.map(username))
  .then(r => r.map(x => x.then(y => dispatch({type: 'LOAD_POSTS', data: y}))))
  // .then(r => dispatch({type: 'LOAD_POSTS', data: r}))
}

export const sort = data => (dispatch, getState) => {
  const { posts } = data
  const sorted = Object.keys(posts).sort((a, b) => {
    var first = posts[a].title.toLowerCase(), next = posts[b].title.toLowerCase()
    if (first < next)
      {return -1}
    if (first > next)
      {return 1}
    return 0
  })
  const n = sorted.map(x => posts[x])
  dispatch({type: 'SORT', data: n})
}

export const group = data => (dispatch, getState) => {
  const { posts } = data
  const sorted = Object.keys(posts).sort((a, b) => {
    var first = posts[a].username.toLowerCase(), next = posts[b].username.toLowerCase()
    if (first < next)
      {return -1}
    if (first > next)
      {return 1}
    return 0
  })
  const n = sorted.map(x => posts[x])
  dispatch({type: 'SORT', data: n})
}
