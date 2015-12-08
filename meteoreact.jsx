Tasks = new Mongo.Collection("tasks");

if (Meteor.isClient) {
  Meteor.startup(function () {
    React.render(<App />, document.getElementById("render-target"));
  });
}
Meteor.methods({
  addTask(text) {
    if (! Meteor.userId()) {
      throw new Meteor.Error("not-authorized");
    }

    Tasks.insert({
      text: text,
      createdAt: new Date(),
      owner: Meteor.userId(),
      username: Meteor.userId()
    });
  },

  removeTask(taskId) {
    Tasks.remove(taskId);
  },

  setChecked(taskId, setChecked) {
    Tasks.update(taskId, { $set: { checked: setChecked} });
  }
});
