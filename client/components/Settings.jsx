Settings = React.createClass({
  render() {
    return (
      <div>
        <Profile />
        <SettingsList />
      </div>
    )
  }
});

Profile = React.createClass({
  mixins: [ReactMeteorData],
  getMeteorData() {
    return {
      user: Meteor.user(),
      userLoading: Meteor.loggingIn()
    }
  },
  render() {
    if (this.data.userLoading) {
      return <AppLoading />
    }
    if (!this.data.user) {
      return <h2>Please Log in.</h2>
    }
    return (
      <div className="profile-wrapper">
        <div className="image-wrapper">
          <img src={this.data.user.profile.image} />
        </div>
        <div className="login-wrapper">
          Logout
        </div>
      </div>
    )
  }
})

SettingsList = React.createClass({
  getDefaultProps() {
    return {
      settings: ["Setting 1", "Setting 2", "Setting 3"]
    }
  },
  render() {
    let list = this.props.settings.map((setting) => {
      return (
        <div className="item" key={setting}>
          <h2><a>{setting}</a></h2>
        </div>
      )
    })
    return (
      <div className="list">
        {list}
      </div>
    )
  }
})
