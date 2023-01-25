Users = new Meteor.Collection('users');

Meteor.methods({
  createNewUser: function (userName) {
    const isUserNameUniq = Users.find({ userName }).count() === 0;

    if (isUserNameUniq) {
      return Users.insert({ userName });
    } else {
      throw new Meteor.Error(401, 'Bad user name');
    }
  },
});
