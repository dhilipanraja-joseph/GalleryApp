import React from 'react';
import { render } from 'react-dom';
import { Router , Route , hashHistory , browserHistory , IndexRoute} from 'react-router'
import App from './components/App'
import ShowAlbums from './components/ShowAlbums'
import AddImage from './components/AddImage'
import CreateAlbum from './components/CreateAlbum'


render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <Route path="/albums" components={ShowAlbums}/>
      <Route path="/addimage" components={AddImage}/>
      <Route path="/addalbum" components={CreateAlbum}/>
    </Route>
  </Router>,
  document.getElementById('root')
);
