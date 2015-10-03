import $ from 'jquery';

export class DataService {
  getPegs() {
    return $.getJSON('../src/data/pegs.json').promise();
  }
}
