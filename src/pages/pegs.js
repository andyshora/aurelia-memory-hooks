import {inject} from 'aurelia-framework';  
import {Dispatcher, handle, waitFor} from 'aurelia-flux'; 
import {PegStore} from '../stores/peg-store'

@inject(Dispatcher, PegStore)
export class Pegs {
  heading = 'Here\'s your memory pegs';

  constructor(dispatcher, store) {
    this.dispatcher = dispatcher;
    this.store = store;
  }

  onButtonClicked() {
    this.dispatcher.dispatch('peg:add', { number: this.store.pegs.length + 1, word: 'another' });
  }

}
