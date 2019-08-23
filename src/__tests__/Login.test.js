import Login from '../components/login/Login';

let wrapper;

beforeEach(() => {
  wrapper = shallow(<Login history={[]} />);
});

afterEach(() => {
  wrapper.unmount();
});

it('should render login', () => {
  expect(shallowToJson(wrapper)).toMatchSnapshot();
});

it('Email check', () => {
  wrapper.find('input[type="email"]').simulate('change', { target: { name: 'email', value: 'test@test.com' } });
  expect(wrapper.state('email')).toEqual('test@test.com');
});

it('Password check', () => {
  wrapper.find('input[type="password"]').simulate('change', { target: { name: 'password', value: '12345678' } });
  expect(wrapper.state('password')).toEqual('12345678');
});

it('login check with right data', () => {
  wrapper.find('input#email').simulate('change', { target: { name: 'email', value: 'test@test.com' } });
  wrapper.find('input#password').simulate('change', { target: { name: 'password', value: '12345678' } });
  wrapper.find('button').simulate('click'); 
  expect(wrapper.state('email')).toEqual('test@test.com');
  expect(wrapper.state('password')).toEqual('12345678');
})