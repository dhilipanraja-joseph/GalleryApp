import { EventEmitter } from 'events'
import AppDispatcher from '../AppDispatcher'

class ImageStore extends EventEmitter{
  constructor(){
    super();

    AppDispatcher.register(action=>{
      switch(action.type){
          case 'ADDED_IMG':  
      }
  }
}
