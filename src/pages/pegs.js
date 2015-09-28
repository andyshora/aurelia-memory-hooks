import {inject} from 'aurelia-framework';  
import {Dispatcher, handle, waitFor} from 'aurelia-flux';  
import Peg from '../components/peg/peg';
import {PegStore} from '../stores/peg-store'

@inject(Dispatcher, PegStore)
export class Pegs {
  heading = 'Here\'s your memory pegs';

  constructor(dispatcher, store) {
    this.dispatcher = dispatcher;
    this.store = store;
    this.pegs = this.store.getPegs();
  }

  onButtonClicked() {
    let peg = { number: this.pegs.length + 1, word: 'another' };
    console.log('onButtonClicked', peg);
    this.dispatcher.dispatch('peg.add', peg);
  }

  @handle('peg.added')
  onPegAdded(action, peg) {
    console.log('onPegAdded', action, peg);
    this.pegs = this.store.getPegs();
  }  

}

