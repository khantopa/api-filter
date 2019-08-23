import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import App from '../App';

import Login from '../components/login/Login';
import List from '../components/list/List';
import Detail from '../components/detail/Detail';

let wrapper, router;

beforeEach(() => {
  wrapper = shallow(<App/> );
  router = wrapper.find(Router);
});

afterEach(() => {
  wrapper.unmount();
});

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
  expect(shallowToJson(wrapper)).toMatchSnapshot();
});


it('should render 1 Router', () => {
  expect(router).toHaveLength(1);
});

it('should rednder 3 Routes', () => {
  expect(router.find(Route)).toHaveLength(3);
});

it('Should renders correct routes', () => {
  const pathMap = router.find(Route).reduce((pathMap, route) => {
    const routeProps = route.props();
    pathMap[routeProps.path] = routeProps.component;
    return pathMap;
  }, {});  
  expect(pathMap['/']).toBe(Login);
  expect(pathMap['/contacts']).toBe(List);
  expect(pathMap['/contacts/:id']).toBe(Detail);
});
