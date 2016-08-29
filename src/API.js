import AppDispatcher from './AppDispatcher'
import axios from 'axios'

const API = {
  addImage(img){
    axios.post('/api/images/addimage',img)
          .then(res=>res.data)
          .catch(err=>console.log(err))
  }
}

export default API
