import React from 'react';
import MyInput from './MyInput';
import { shallow } from 'enzyme';

const setUp = (props) => shallow(<MyInput {...props} />);

const props = {
  value: 1,
  disabled: true,
  onChange: () => {},
};

describe('should render MyInput component', () => {
  let component;

  beforeEach(() => {
    component = setUp(props);
    jest.spyOn(React, "useEffect").mockImplementation( f => f());
  });

  it("render MyInput component without crashing", () => {
    setUp();
  });

  it('should render input', () => {
    const input = component.find('input');
    expect(input).toHaveLength(1);
  });

});
