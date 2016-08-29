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
    this._onChange = this._onChange.bind(this);
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
      let imagesRow = this.state.images.map(image=>{
          return (
            <tr key={image._id}>
              <td><img src={image.imgurl} width="150px" alt="NO IMAGE"/></td>
              <td>{image.createdAt}</td>
              <td><button>Delete</button>
                  </td>
            </tr>
          )
      });
      return (

            <table className="table">
              <thead>
                <tr>
                  <th>Image</th>
                  <th>CreatedAt</th>
                  <th>Options</th>
                </tr>
              </thead>
              <tbody>
                {imagesRow}
              </tbody>
            </table>

      )

  }
}
