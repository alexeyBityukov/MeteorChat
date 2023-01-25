import { Template } from 'meteor/templating';

Template.inputNewMessage.events({
  'submit form': function (e) {
    e.preventDefault();

    const messageContent = e.target[0].value;
    const userId = Session.get('userId');

    Meteor.call('createNewMessage', { messageContent, userId });
  },
});
