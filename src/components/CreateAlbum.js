import React ,{Component} from 'react'
import ImageActions from '../actions/ImageActions'

export default class CreateAlbum extends Component {
  constructor(){
    super();
    this.state={
      name:''
    }
    this.submit=this.submit.bind(this);
  }
  submit(e){
    e.preventDefault();
    ImageActions.createAlbum(this.state);
    console.log("add album");
  }
  render(){
    return(
      <div>
        <form onSubmit={this.submit}>
          <input value={this.state.name} onChange={e=>{this.setState({name : e.target.value})}} type="text"/>
          <button type="submit">Add Album</button>
        </form>
      </div>
    )
  }
}
