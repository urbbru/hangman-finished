import * as React from 'react'
import Hangman from './Hangman'
// import {connect} from 'react-redux'
// import { addAlbum, setAlbums, getAlbums } from '../actions/albums'

// const sleep = time => new Promise(
//   resolve => setTimeout(() => resolve(`I waited for ${time} ms`), time)
// )

export default class AlbumsListContainer extends React.PureComponent {
  render() {
    // if (!this.props.albums) return 'Loading...'
    return <Hangman />
  }
}

// const mapStateToProps = ({albums}) => ({
//         albums
// })

// export default connect(mapStateToProps, {getAlbums})(AlbumsListContainer)
