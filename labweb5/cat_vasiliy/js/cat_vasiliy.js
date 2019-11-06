var catVasiliy = {
  name: 'Vasya',
  birthday: new Date(),
  listOfEvents: ['vacuum cleaner', 'beep', 'food', 'mice', 'ksksks'],
  meow: function () {
    console.log('Meow!');
  },
  reaction: function (event) {
    var indexOfEvent = this.listOfEvents.indexOf(event);
    if (indexOfEvent > -1 && typeof event === 'string') {
      this.meow();
      switch (event) {
        case 'vacuum cleaner':
        case 'beep':
          console.log('run from here!!!!');
          break;
        case 'ksksks':
          console.log('sksksk');
          break;
        case 'food':
        case 'mice':
          console.log('OwO, what`s this?');
          break;
      }
    } else {
      return false;
    }
  },
};
