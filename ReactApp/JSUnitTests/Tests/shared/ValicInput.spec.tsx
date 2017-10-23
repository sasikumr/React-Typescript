import React from 'react';
import ValicInput from '../../../src/shared/ValicInputComponent/ValicInputComponent';
import ReactDOM from 'react-dom';
import TestUtils from 'react-dom/test-utils';
import { mount, shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import EnzymeAdapter from 'enzyme-adapter-react-15.4';
import Enzyme from 'enzyme';
Enzyme.configure({ adapter: new EnzymeAdapter() });
let generalProps;
beforeAll(() => {
    const props = {
        onChange: jest.fn(),
        type: 'text',
        name: 'valicInput'
    }   
    generalProps = props;    
});
describe('ValicInput Component Test Case', () => {
    describe('General Case', () => {
        it('renders without crashing', () => {
            const div = document.createElement('div');
            const onChange = jest.fn();
            ReactDOM.render(<ValicInput {...generalProps} />, div);
        });
        it('default type text', () => {
            const onChange = jest.fn();
            let component = TestUtils.renderIntoDocument(
                <ValicInput name="valicInput" value="text" type="mask" onChange={onChange} />
            );
            let element = ReactDOM.findDOMNode(component);
            expect(element.type).toBe('text');
        })

    });
    describe('ValicInput Type Text', () => {
        test('ValicInput component render text ', () => {

            const wrapper = shallow(<ValicInput {...generalProps} value='ValicInput' />)
            const val = wrapper.instance().props['value'];
            expect(val).toBe('ValicInput');
        });

    });

    describe('ValicInput Type SSN', () => {
        test('Render ssn ', () => {
            let component = TestUtils.renderIntoDocument(
                <ValicInput {...generalProps} value="A1111111A" type="ssn" mask="***\-**\-****" maskChar="_" />
            );
            let element = ReactDOM.findDOMNode(component);
            expect(element.value).toBe('A11-11-111A');
        });
        it('Event Simulate ssn change', () => {
            const mockfn = jest.fn();
            const wrapper = mount(<ValicInput name="valicInput" type="ssn" onChange={mockfn} value="" />);
            expect(wrapper.find('input').get(0).value).toBeUndefined()
            
            wrapper.setProps({ value: 'A11-43-9999' })
            wrapper.simulate('change');
            expect(wrapper.find('input').get(0).isFormatValid).toBe(true)
            expect(wrapper.find('input').get(0).value).toBe('A11-43-9999')
        });
    });
    describe('ValicInput Type Email', () => {
        it('email type', () => {
            const onChange = jest.fn();
            let component = TestUtils.renderIntoDocument(
                <ValicInput name="valicInput" type="email" onChange={onChange} />
            );
            let element = ReactDOM.findDOMNode(component);
            expect(element.type).toBe('email');
        });
        it('Event Simulate email change', () => {
            const mockfn = jest.fn();
            
            const wrapper = mount(<ValicInput name="testinput" type="email" onChange={mockfn} value="invalid" />);
            expect(wrapper.find('input').get(0).value).toBe('Invalid');
            
            wrapper.setProps({ value: 'test@gmail.com' });
            wrapper.simulate('change');            
            expect(wrapper.find('input').get(0).isFormatValid).toBe(true)
            expect(wrapper.find('input').get(0).value).toBe('test@gmail.com')

            wrapper.setProps({ value: 'Test' })
            wrapper.simulate('change');
            expect(wrapper.find('input').get(0).isFormatValid).toBe(false)
            expect(wrapper.find('input').get(0).value).toBe('Test')
            
        });

    });
    describe('ValicInput Type Number', () => {
        it('Number Type', () => {
            const onChange = jest.fn();
            let component = TestUtils.renderIntoDocument(
                <ValicInput name="valicInput" type="number" onChange={onChange} />
            );
            let element = ReactDOM.findDOMNode(component);
            expect(element.type).toBe('number');
        })
    });

});