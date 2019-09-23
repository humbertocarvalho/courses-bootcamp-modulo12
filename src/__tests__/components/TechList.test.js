import React from 'react';
import { useSelector } from 'react-redux';
import { render, fireEvent, cleanup } from '@testing-library/react';
import TechList from '~/components/TechList';

jest.mock('react-redux');

describe('TechList component', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('should render tech list w/ 2 techs', () => {
    useSelector.mockImplementation(cb =>
      cb({
        techs: ['Node.js', 'ReactJS']
      })
    );

    const { getByText, getByTestId } = render(<TechList />);
    expect(getByTestId('tech-list')).toContainElement(getByText('Node.js'));
    expect(getByTestId('tech-list')).toContainElement(getByText('ReactJS'));
  });

  // it('should be able to add new tech', () => {
  //   const { getByText, getByTestId, getByLabelText } = render(<TechList />);

  //   fireEvent.change(getByLabelText('Tech'), { target: { value: 'Node.js' } });
  //   fireEvent.submit(getByTestId('tech-form'));

  //   expect(getByTestId('tech-list')).toContainElement(getByText('Node.js'));
  //   expect(getByLabelText('Tech')).toHaveValue('');
  // });

  // it('should store techs in storage', () => {
  //   let { getByText, getByTestId, getByLabelText } = render(<TechList />);

  //   fireEvent.change(getByLabelText('Tech'), { target: { value: 'Node.js' } });
  //   fireEvent.submit(getByTestId('tech-form'));

  //   expect(getByTestId('tech-list')).toContainElement(getByText('Node.js'));
  //   expect(getByLabelText('Tech')).toHaveValue('');

  //   cleanup(); // it('should be able to add new tech', () => {
  //   const { getByText, getByTestId, getByLabelText } = render(<TechList />);

  //   fireEvent.change(getByLabelText('Tech'), { target: { value: 'Node.js' } });
  //   fireEvent.submit(getByTestId('tech-form'));

  //   expect(getByTestId('tech-list')).toContainElement(getByText('Node.js'));
  //   expect(getByLabelText('Tech')).toHaveValue('');
  // });

  // it('should store techs in storage', () => {
  //   let { getByText, getByTestId, getByLabelText } = render(<TechList />);

  //   fireEvent.change(getByLabelText('Tech'), { target: { value: 'Node.js' } });
  //   fireEvent.submit(getByTestId('tech-form'));

  //   expect(getByTestId('tech-list')).toContainElement(getByText('Node.js'));
  //   expect(getByLabelText('Tech')).toHaveValue('');

  //   cleanup();

  //   ({ getByText, getByTestId } = render(<TechList />));

  //   expect(localStorage.setItem).toHaveBeenCalledWith(
  //     'techs',
  //     JSON.stringify(['Node.js'])
  //   );
  //   expect(getByTestId('tech-list')).toContainElement(getByText('Node.js'));
  // });
  // it('should be able to add new tech', () => {
  //   const { getByText, getByTestId, getByLabelText } = render(<TechList />);

  //   fireEvent.change(getByLabelText('Tech'), { target: { value: 'Node.js' } });
  //   fireEvent.submit(getByTestId('tech-form'));

  //   expect(getByTestId('tech-list')).toContainElement(getByText('Node.js'));
  //   expect(getByLabelText('Tech')).toHaveValue('');
  // });

  // it('should store techs in storage', () => {
  //   let { getByText, getByTestId, getByLabelText } = render(<TechList />);

  //   fireEvent.change(getByLabelText('Tech'), { target: { value: 'Node.js' } });
  //   fireEvent.submit(getByTestId('tech-form'));

  //   expect(getByTestId('tech-list')).toContainElement(getByText('Node.js'));
  //   expect(getByLabelText('Tech')).toHaveValue('');

  //   cleanup();

  //   ({ getByText, getByTestId } = render(<TechList />));

  //   expect(localStorage.setItem).toHaveBeenCalledWith(
  //     'techs',
  //     JSON.stringify(['Node.js'])
  //   );
  //   expect(getByTestId('tech-list')).toContainElement(getByText('Node.js'));
  // });
  //   ({ getByText, getByTestId } = render(<TechList />)); // it('should be able to add new tech', () => {
  //   const { getByText, getByTestId, getByLabelText } = render(<TechList />);

  //   fireEvent.change(getByLabelText('Tech'), { target: { value: 'Node.js' } });
  //   fireEvent.submit(getByTestId('tech-form'));

  //   expect(getByTestId('tech-list')).toContainElement(getByText('Node.js'));
  //   expect(getByLabelText('Tech')).toHaveValue('');
  // });

  // it('should store techs in storage', () => {
  //   let { getByText, getByTestId, getByLabelText } = render(<TechList />);

  //   fireEvent.change(getByLabelText('Tech'), { target: { value: 'Node.js' } });
  //   fireEvent.submit(getByTestId('tech-form'));

  //   expect(getByTestId('tech-list')).toContainElement(getByText('Node.js'));
  //   expect(getByLabelText('Tech')).toHaveValue('');

  //   cleanup();

  //   ({ getByText, getByTestId } = render(<TechList />));

  //   expect(localStorage.setItem).toHaveBeenCalledWith(
  //     'techs',
  //     JSON.stringify(['Node.js'])
  //   );
  //   expect(getByTestId('tech-list')).toContainElement(getByText('Node.js'));
  // });
  // it('should be able to add new tech', () => {
  //   const { getByText, getByTestId, getByLabelText } = render(<TechList />);

  //   fireEvent.change(getByLabelText('Tech'), { target: { value: 'Node.js' } });
  //   fireEvent.submit(getByTestId('tech-form'));

  //   expect(getByTestId('tech-list')).toContainElement(getByText('Node.js'));
  //   expect(getByLabelText('Tech')).toHaveValue('');
  // });

  // it('should store techs in storage', () => {
  //   let { getByText, getByTestId, getByLabelText } = render(<TechList />);

  //   fireEvent.change(getByLabelText('Tech'), { target: { value: 'Node.js' } });
  //   fireEvent.submit(getByTestId('tech-form'));

  //   expect(getByTestId('tech-list')).toContainElement(getByText('Node.js'));
  //   expect(getByLabelText('Tech')).toHaveValue('');

  //   cleanup();

  //   ({ getByText, getByTestId } = render(<TechList />));

  //   expect(localStorage.setItem).toHaveBeenCalledWith(
  //     'techs',
  //     JSON.stringify(['Node.js'])
  //   );
  //   expect(getByTestId('tech-list')).toContainElement(getByText('Node.js'));
  // });
  //   expect(localStorage.setItem).toHaveBeenCalledWith(
  //     'techs',
  //     JSON.stringify(['Node.js'])
  //   );
  //   expect(getByTestId('tech-list')).toContainElement(getByText('Node.js'));
  // });
});
