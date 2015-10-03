import {inject} from 'aurelia-framework';  
import {Dispatcher, handle, waitFor} from 'aurelia-flux';
import {DataService} from '../services/data-service.js';

@inject(Dispatcher, DataService)
export class PegStore {

  _pegs = [];

  constructor(dispatcher, dataService) {
    this.dispatcher = dispatcher;
    this.dataService = dataService;
    
    this.fetchData();
  }

  fetchData() {
    this.dataService.getPegs().then((pegs) => {
      this._pegs = pegs;
      this.dispatcher.dispatch('pegs:changed', this._pegs);
    });
  }

  get pegs() {
    return this._pegs;
  }

  @handle('peg:add')
  addPeg(action, peg) {
    console.log('PegStore peg:add', action, peg);
    this._pegs.push(peg);
    this.dispatcher.dispatch('pegs:changed', this._pegs);
  }
}
