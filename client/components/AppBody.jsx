const {Link} = ReactRouter;
let Transition = React.addons.CSSTransitionGroup;

AppBody = React.createClass({
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
  render() {
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
