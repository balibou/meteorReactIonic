const {Link} = ReactRouter;
let Transition = React.addons.CSSTransitionGroup;

AppBody = React.createClass({
  setModalState(status) {
    this.setState({
      modal: status
    })
  },
  getInitialState() {
    return {
      modal: false
    }
  },
  ionModal(tab, content) {
    this.setState({
      modal: (
        <IonModal modalContent={content}>
          <div className="h1 title">{tab}</div>
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
              {/*{this.props.children && React.cloneElement(this.props.children, {
            ionModal: this.ionModal
          }, {setModalState: this.setModalState})}*/}
              {React.cloneElement(this.props.children, {
              ionModal: this.ionModal, setModalState: this.setModalState})}
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
