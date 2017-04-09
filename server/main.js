import { Meteor } from 'meteor/meteor';

// =====================
// Meteor server startup
// =====================
Meteor.startup(() => {
  // code to run on server at startup
});

Meteor.publish('users', () => {
  return Meteor.users.find({});
})