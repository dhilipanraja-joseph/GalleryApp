import React ,{Component} from 'react'

export default class CreateAlbum extends Component {
  submit(e){
    e.preventDefult();
    console.log("add album");
  }
  render(){
    return(
      <div>
        <form onSubmit={this.submit}>
          <input type="text"/>
          <button type="submit">Add Album</button>
        </form>
      </div>
    )
  }
}
