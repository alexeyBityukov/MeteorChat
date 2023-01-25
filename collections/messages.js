Messages = new Meteor.Collection('messages');

Meteor.methods({
  createNewMessage: function ({ messageContent, userId }) {
    const isMessageContentNonEmpty = messageContent !== '';

    if (isMessageContentNonEmpty) {
      Messages.insert({
        content: messageContent,
        userId,
      });
    }
  },
});
