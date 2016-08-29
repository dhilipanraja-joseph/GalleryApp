import React , {Component} from 'react'
import ImageActions from '../actions/ImageActions'
import ImageStore from '../stores/ImageStore'

export default class ShowImages extends Component {
  constructor(props){
    super(props);
    let album = this.props.location.query.album;
    ImageActions.getAlbumImage(album);
    this.state={
      images : ImageStore.getImages()
    }
  }
  componentDidMount(){
    ImageStore.startListening(this._onChange);
  }
  componentWillUnmount(){
    ImageStore.stopListening(this._onChange);
  }
  _onChange(){
    this.setState({ images : ImageStore.getImages() });
  }
  render(){
    return (
      <div>ShowImages</div>
    )
  }
}
