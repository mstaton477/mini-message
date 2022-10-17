const moment = require('moment');
let date = moment().startOf('day').fromNow();
let date2 = moment().startOf('hour').fromNow();

// default messages shown in index
const messages = [
  {
    title: 'Book Title',
    description:
      'hsfbgbgjsgsjgsl',
    username: 'vjfal',
    date: date2,
  },
  {
    title: 'Book Title',
    description:
      'fadjfbhlgj',
    username: 'gfanjbgjl',
    date: date,
  },
];

module.exports = messages;