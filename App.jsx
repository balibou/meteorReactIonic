App = React.createClass({
  mixins: [ReactMeteorData],

  getMeteorData() {
    return {
      tasks: Tasks.find({}, {sort: {createdAt: -1}}).fetch()
    }
  },

  renderTasks() {
    return this.data.tasks.map((task) => {
      return <Task key={task._id} task={task} />;
    });
  },

  handleSubmit(event) {
      event.preventDefault();

      var text = React.findDOMNode(this.refs.textInput).value.trim();

      Tasks.insert({
        text: text,
        createdAt: new Date()
      });

      React.findDOMNode(this.refs.textInput).value = "";
    },

  render() {
    return (
      <div className="container">
        <header>
          <h1>Todo List</h1>

          <form className="new-task" onSubmit={this.handleSubmit} >
            <input
              type="text"
              ref="textInput"
              placeholder="Type to add new tasks" />
          </form>
        </header>

        <ul>
          {this.renderTasks()}
        </ul>
      </div>
    );
  }
});
