import {inject} from 'aurelia-framework';  
import {Dispatcher, handle} from 'aurelia-flux';

@inject(Dispatcher)
export class PegStore {  
  pegs = [
    { number: 1, word: 'one' },
    { number: 2, word: 'two' },
    { number: 3, word: 'three' }
  ];

  constructor(dispatcher) {
    this.dispatcher = dispatcher;
  }

  @handle('peg:add')
  addPeg(action, peg) {
    console.log('PegStore peg:add', action, peg);
    this.pegs.push(peg);
    this.dispatcher.dispatch('pegs:changed', this.pegs);
  }

  getPegs() {
    return this.pegs;
  }
}
