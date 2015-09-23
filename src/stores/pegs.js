import {inject} from 'aurelia-framework';  
import {Dispatcher, handle} from 'aurelia-flux';

@inject(Dispatcher)
export class PegsStore {  
  messages = [];

  constructor(dispatcher) {
    this.dispatcher = dispatcher;
  }

  @handle('message.send')
  addMessage(action, message) {
    this.messages.push(message);
    this.dispatcher.dispatch('message.sent', message);
  }

  getMessages() {
    return this.messages;
  }
}
