import { EventEmitter } from 'events'
import AppDispatcher from '../AppDispatcher'

let _images=[],_albums=[];
class ImageStore extends EventEmitter{
  constructor(){
    super();
    AppDispatcher.register(action=>{
      switch(action.type){
          case 'ALL_ALBUMS':  _albums=action.albums;
                              this.emit('CHANGE');
                              break;
          case 'GET_ALBUM':   _images=action.album;
                              this.emit('CHANGE');
                              break;
      }
    })
  }

  startListening(cb) {
    this.on('CHANGE',cb);
  }

  stopListening(cb) {
    this.removeListener('CHANGE',cb);
  }

  getAllAlbums(){
    return _albums;
  }

  getImages(){
    return _images;
  }
}

export default new ImageStore()
