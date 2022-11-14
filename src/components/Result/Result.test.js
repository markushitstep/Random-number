import React from 'react';
import Result from './Result';
import { shallow } from 'enzyme';
import MyButton from '../MyButton/MyButton';

const setUp = (props) => shallow(<Result {...props} />);

const props = {
  checkElements: [
    <p key={1}>You guessed number: {1}</p>,
    <p key={2}>You guessed number: {1}</p>,
    <p key={3}>You guessed number: {1}</p>,
    <p key={4}>You guessed number: {1}</p>
  ],
  isEndGame: true,
  isWinner: true,
  restart: () => {},
};

describe('should render Result component', () => {
  let component;

  beforeEach(() => {
    component = setUp(props);
  });

  it("render Result component without crashing", () => {
    setUp();
  });

  it("should contain .result wrapper without crashing", () => {
    const wrapper = component.find(".result");
    expect(wrapper.length).toBe(1);
  });

  it('should render div', () => {
    const result = component.find('.result__matches');
    expect(result).toHaveLength(1);
  });

  it('should render div result__loose', () => {
    const isEndGame = true, isWinner = false;
    component = setUp({isEndGame, isWinner})
    const result = component.find('.result__loose');
    expect(result.length).toBe(1);
  });

  it('should render 4 paragraph', () => {
    const paragraph = component.find('p');
    expect(paragraph).toHaveLength(5);
  });

  it('should render 1 button', () => {
    const component = shallow(<MyButton>Restart</MyButton>)
    const button = component.find('button');
    expect(button).toHaveLength(1);
  });

});
