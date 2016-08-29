import React ,{Component} from 'react'
import ImageActions from '../actions/ImageActions'
import ImageStore from '../stores/ImageStore'

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
    console.log(this.state.albums);
    return(
      <div>ShowAlbums</div>
    )
  }
}
