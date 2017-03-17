const initialState = {
  posts: []
}

export const main = (state = initialState, action) => {
  switch (action.type) {
    case 'LOAD_POSTS':
      return Object.assign({}, state, {posts: state.posts.concat(action.data)})
    case 'ALL_POSTS':
      return Object.assign({}, state, {posts: action.data})
    case 'SORT':
      return Object.assign({}, state, {posts: action.data})
    default:
      return Object.assign({}, state)
  }
}
