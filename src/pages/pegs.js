import {inject} from 'aurelia-framework';  
import {Dispatcher, handle} from 'aurelia-flux'; 
import {PegStore} from '../stores/peg-store'

@inject(Dispatcher, PegStore)
export class Pegs {
  heading = 'Here\'s your memory pegs';

  pegs = [];

  constructor(dispatcher, store) {
    this.dispatcher = dispatcher;
    this.store = store;
    this.pegs = this.store.getPegs();
  }

  @handle('pegs:changed')
  onPegsChanged(action, pegs) {
    console.log('pegs:changed', action, pegs);
    this.pegs = pegs;
  }

  onButtonClicked() {
    let p = {
      number: this.pegs.length + 1,
      word: 'another'
    };
    console.log('onButtonClicked,', p);
    this.dispatcher.dispatch('peg:add', p);

  }

}
