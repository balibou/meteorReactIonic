// Tasks = new Mongo.Collection("tasks");
//
// if (Meteor.isClient) {
//   Meteor.subscribe("tasks");
//
//   Meteor.startup(function () {
//     React.render(<App />, document.getElementById("render-target"));
//   });
// }
//
// if (Meteor.isServer) {
//   Meteor.publish("tasks", function () {
//     return Tasks.find({
//       $or: [
//         { private: {$ne: true} },
//         { owner: this.userId }
//       ]
//     });
//   });
// }
//
// Meteor.methods({
//   addTask(text) {
//     if (! Meteor.userId()) {
//       throw new Meteor.Error("not-authorized");
//     }
//
//     Tasks.insert({
//       text: text,
//       createdAt: new Date(),
//       owner: Meteor.userId(),
//       username: Meteor.userId()
//     });
//   },
//
//   removeTask(taskId) {
//     const task = Tasks.findOne(taskId);
//     if (task.private && task.owner !== Meteor.userId()) {
//       throw new Meteor.Error("not-authorized");
//     }
//     Tasks.remove(taskId);
//   },
//
//   setChecked(taskId, setChecked) {
//     const task = Tasks.findOne(taskId);
//     if (task.private && task.owner !== Meteor.userId()) {
//       throw new Meteor.Error("not-authorized");
//     }
//     Tasks.update(taskId, { $set: { checked: setChecked} });
//   },
//
//   setPrivate(taskId, setToPrivate) {
//     const task = Tasks.findOne(taskId);
//
//     if (task.owner !== Meteor.userId()) {
//       throw new Meteor.Error("not-authorized");
//     }
//
//     Tasks.update(taskId, { $set: { private: setToPrivate } });
//   }
// });
