import { Template } from 'meteor/templating';

const errorBadName = false;

Session.set({ errorBadName });

Template.initForm.helpers({
  errorBadName: () => Session.get('errorBadName'),
});

Template.initForm.events({
  'submit form': function (e) {
    e.preventDefault();

    const userName = e.target[0].value;

    Meteor.call('createNewUser', userName, function (error, userId) {
      if (error) {
        Session.set({ errorBadName: true });
      } else {
        Session.set({ isUserInited: true, errorBadName: false, userId });
      }
    });
  },
});
