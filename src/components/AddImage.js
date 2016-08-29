import React ,{Component} from 'react'


export default class AddImage extends Component {
  constructor(){
    super();
    this.state={
      album : '',
      imgurl : ''
    }
    this.submit=this.submit.bind(this);
  }
  submit(e){
    e.preventDefault();

    console.log('sate:',this.state);
  }
  render(){
    let {album , imgurl} = this.state;
    return(
      <form onSubmit={this.submit}>
        <input value={album} onChange={e=>{this.setState({ album : e.target.value})}} type="text"/><br/>
        <input value={imgurl} onChange={e=>{this.setState({ imgurl : e.target.value})}} type="text"/><br/>
        <button type="submit">Add Image</button>
      </form>
    )
  }
}
