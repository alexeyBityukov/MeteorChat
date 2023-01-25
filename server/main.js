import { Meteor } from 'meteor/meteor';

import '../imports/both.js';

Meteor.publish('messages', function () {
  return Messages.find();
});

Meteor.publish('users', function () {
  return Users.find(
    {},
    {
      fields: {
        //скроем секьюрные поля, например пароль если бы он у нас был
        password: false,
      },
    },
  );
});

Meteor.startup(() => {
  // code to run on server at startup
});
