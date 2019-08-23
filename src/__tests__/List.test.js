import List from '../components/list/List';
import Search from '../components/search/Search';


let wrapper;

beforeEach(() => {
  global.fetch = jest.fn();
  wrapper = shallow(<List /> );
});

afterEach(() => {
  wrapper.unmount();
});

it('should render List', () => {
  expect(shallowToJson(wrapper)).toMatchSnapshot();
});

it('should have 3 Search', () => {
  expect(wrapper.find(Search)).toHaveLength(3);
})




