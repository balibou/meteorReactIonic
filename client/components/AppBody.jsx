const {Link} = ReactRouter;

AppBody = React.createClass({
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
              {this.props.children}
            </div>
          </div>
        </div>
      </div>
    )
  }
});
