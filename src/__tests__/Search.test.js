import Search from '../components/search/Search';

let wrapper;

beforeEach(() => {
  wrapper = shallow(<Search/> ); 
});

afterEach(() => {
  wrapper.unmount();
});

it('should render Search ', () => {
  expect(shallowToJson(wrapper)).toMatchSnapshot();
});
