import React from 'react';
import { Link } from 'react-router-dom';
import Radio, { RadioOption } from '../Radio';

function RadioGroupDemo() {
  const options: RadioOption[] = [
    {
      label: 'Option1',
      value: 'option1',
    },
    {
      label: 'Option2',
      value: 'option2',
    },
    {
      label: 'Option3',
      value: 'option3',
    },
  ];
  return (
    <>
      <Link to="/" className="demo-goback">
        返回
      </Link>
      <div className="demo-box">
        <Radio.Group options={options} value="option1" onChange={console.log} />
        <br />
        <br />
        <Radio.Group options={options} value="option1" disabled={true} />
      </div>
      <div className="demo-box">
        <Radio.Group value="option1" onChange={console.log}>
          <Radio value="option1">Option1</Radio>
          <Radio value="option2">Option2</Radio>
          <Radio value="option3">Option3</Radio>
        </Radio.Group>
        <br />
        <Radio.Group value="option1" disabled={true}>
          <Radio value="option1">Option1</Radio>
          <Radio value="option2">Option2</Radio>
          <Radio value="option3" disabled={true}>
            Option3
          </Radio>
        </Radio.Group>
        <br />
        <Radio.Group
          name="demo-radio-group"
          value="option1"
          onChange={console.log}>
          <Radio value="option1">Native Group1</Radio>
          <Radio value="option2">Native Group2</Radio>
          <Radio value="option3">Native Group3</Radio>
        </Radio.Group>
      </div>
    </>
  );
}

export default RadioGroupDemo;
