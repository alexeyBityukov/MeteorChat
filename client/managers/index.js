import { Template } from 'meteor/templating';
import { Session } from 'meteor/session';

const isUserInited = false;

Session.set({ isUserInited });

Template.index.helpers({
  isUserInited: () => Session.get('isUserInited'),
});
