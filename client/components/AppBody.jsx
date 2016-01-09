const {Link} = ReactRouter;
let Transition = React.addons.CSSTransitionGroup;

AppBody = React.createClass({
  mixins: [ReactMeteorData],
  getMeteorData() {
    return {
      user: Meteor.user(),
      userLoading: Meteor.loggingIn()
    }
  },
  getInitialState() {
    return {
      modal: false
    }
  },
  ionModal(settings) {
    this.setState({
      modal: (
        <IonModal>
          <div className="h1 title">{settings}</div>
          <button onClick={ () => this.setState({modal:false}) } className="button button-icon active">
            <i className="icon ion-ios-close-empty"></i>
          </button>
        </IonModal>
      )
    })
  },
  login() {
    Meteor.loginWithFacebook()
  },
  render() {
    if (this.data.userLoading) {
      return <SpinnerView />
    }
    if (!this.data.user) {
      return (
        <div className="ionic-body">
          <div className="view welcome-view">
              <div className="top-content row">
                <div className="app-copy col col-top">
                  <h1 className="app-logo">Starter</h1>
                  <p className="app-tagline">
                      Mobile starter with Meteor + React + Ionic + Facebook.
                    </p>
                </div>
              </div>
              <div className="bottom-content row">
                <div className="col col-bottom">
                  <a onClick={this.login} className="facebook-sign-in button button-block">
                    Log in with Facebook
                  </a>
                </div>
              </div>
          </div>
        </div>
      )
    }
    return (
      <div className="ionic-body">
        <div className="bar bar-header bar-light">
          <Link className="button button-icon icon ion-gear-a" to="settings"></Link>
          <Link className="h1 title" to="/">Home</Link>
          <Link className="button button-icon icon ion-heart" to="other"></Link>
        </div>
        <div className="view">
          <div className="scroll-content ionic-scroll">
            <div className="content overflow-scroll has-header">
              {this.props.children && React.cloneElement(this.props.children, {
            ionModal: this.ionModal
          })}
              {/*{this.props.ionModal}*/}
            </div>
          </div>
        </div>

        {this.state.modal ? <Backdrop /> : false}
        <Transition transitionName="modal" transitionEnterTimeout={500} transitionLeaveTimeout={300}>
          {this.state.modal}
        </Transition>

      </div>
    )
  }
});
