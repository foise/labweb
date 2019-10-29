var catVasiliy = {
  name: 'Vasya',
  birthday: new Date(),
  listOfEvents: ['vacuum cleaner', 'beep', 'food', 'mice', 'ksksks'],
  meow: function () {
    console.log('Meow!');
  },
  reaction: function (event) {
    var indexOfEvent = this.listOfEvents.indexOf(event);
    this.meow();
    if (indexOfEvent > -1) {
      switch (indexOfEvent) {
        case 0:
        case 1:
          console.log('run from here!!!!');
          break;
        case 4:
          console.log('sksksk');
          break;
        case 2:
        case 3:
          console.log('OwO, what`s this?');
          break;
      }
    }
  },
};
