import Detail from '../components/detail/Detail';


let wrapper;
let params = { params: {id: 1}};

beforeEach(() => {
  wrapper = shallow(<Detail match={ params } /> ); 
});



it('should render Detail', () => {
  expect(shallowToJson(wrapper)).toMatchSnapshot();
});




