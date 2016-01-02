IonModal = React.createClass({
  render() {
    return (
      <div className="modal-backdrop">
        <div className="modal-wrapper">
          <div className="modal">
            <div className="bar bar-light bar-header">
              {this.props.children}
            </div>
            <div className="content overflow-scroll has-header">
              {this.props.modalContent}
            </div>
          </div>
        </div>
      </div>
    )
  }
})

Backdrop = React.createClass({
  render() {
    return (
      <div className="modal-backdrop active"></div>
    )
  }
})
