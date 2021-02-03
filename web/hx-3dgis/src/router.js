import { Router, Route, IndexRoute } from 'dva/router';
import { hashHistory } from 'react-router';
import Manager from './ddmap/routers/Manager';
import App from './ddmap/routers/App';
import VideoMain from './ddmap/modules/root/manager/video/VideoMain'
function RouterConfig() {
  return (
    <Router history={hashHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Manager} />
        <Route path="/manager" component={Manager}/>
      </Route>
      <Route  path="/videomain" component={VideoMain}>
      </Route>
    </Router>
  );
}
export default RouterConfig;