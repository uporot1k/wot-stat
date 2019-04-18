export default class Tab {
  constructor (list) {
    this.listItem = list
  }
  alert() {
    console.log(this.listItem);
  }
}