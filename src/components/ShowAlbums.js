import React ,{Component} from 'react'
import ImageActions from '../actions/ImageActions'
import ImageStore from '../stores/ImageStore'
import {Link } from 'react-router'

export default class ShowAlbums extends Component {
  constructor(){
    ImageActions.getAlbums();
    super();
    this.state={
      albums : ImageStore.getAllAlbums()
    }
    this._onChange = this._onChange.bind(this);
  }
  componentDidMount(){
    ImageStore.startListening(this._onChange);
  }
  componentWillUnmount(){
    ImageStore.stopListening(this._onChange);
  }
  _onChange(){
    this.setState({ albums : ImageStore.getAllAlbums() });
  }
  render(){
    let albumLi = this.state.albums.map(album=>{
      return (
        <Link to={{pathname : '/showImages/' , query : {album : album.name}}}><li key={album._id}>{album.name}</li></Link>
      )
    })
    return(
      <ul>
        {albumLi}
      </ul>
    )
  }
}
