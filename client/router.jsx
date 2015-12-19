const {Router, Route, IndexRoute} = ReactRouter;

const history = ReactRouter.history.useQueries(ReactRouter.history.createHistory)()

Meteor.startup(function() {
  const root = document.getElementById('app');

  ReactDOM.render((
    <Router history={history}>
      <Route path="/" component={AppBody}>
        <IndexRoute component={Home}/>
        <Route path="settings" component={Settings} />
        <Route path="other" component={Other} />
      </Route>
    </Router>
  ), root);
});
