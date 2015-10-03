import $ from 'jquery';

export class DataService {
  constructor(args) {
    
  }

  getPegs2() {
    return $.getJSON('../src/data/pegs.json');
  }

  getPegs() {
    
    return $.getJSON('../src/data/pegs.json').promise();
      
  /*    this.http.post('http://your.service.url/messages', message)
          .then(() => {
              this.dispatcher.dispatch('message.sent', message);
              resolve();
          })
          .catch(() => {
              this.dispatcher.dispatch('message.errorWhenSending', message);
              reject();
          }); */
    
  }


}
