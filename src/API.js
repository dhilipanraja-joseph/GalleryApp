import AppDispatcher from './AppDispatcher'
import axios from 'axios'

const API = {
  addImage(img){
    axios.post('/api/images/addimage',img)
          .then(res=>res.data)
          .catch(err=>console.log(err))
  },
  createAlbum(album){
    axios.post('/api/albums/addalbum',album)
          .then(res=>res.data)
          .catch(err=>console.log(err))
  },
  getAlbums(){
    axios.get('/api/albums')
          .then(res=>res.data)
          .then(albums=>{
            AppDispatcher.dispatch({
              type : 'ALL_ALBUMS',
              albums
            })
          })
          .catch(err=>console.log(err))
  },
  getAlbumImage(album){
    axios.get(`/api/images/${album}`)
          .then(res=>res.data)
          .then(album=>{
            AppDispatcher.dispatch({
              type : 'GET_ALBUM',
              album
            })
          })
          .catch(err=>console.log(err))
  }
}

export default API
