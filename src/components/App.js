import React, { Component } from 'react';
import {Link} from 'react-router'

export default class App extends Component {

  render() {

    return (
      <div className='container'>
        <Link to="/"><h1>Photo Gallery</h1></Link>
        <Link to='/addalbum'>AddAlbum</Link><span> </span>
        <Link to='/albums'>Albums</Link><span> </span>
        <Link to='/addimage'>AddImage</Link><span> </span>
        <div>
          {this.props.children}
        </div>
      </div>
    )
  }
}
