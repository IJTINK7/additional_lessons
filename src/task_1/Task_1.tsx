import {ChangeEvent, memo, useState} from 'react';

const CONTAINER_STYLES = {display: 'flex', flexDirection: 'column', gap: 10};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
// Task 1
// If change value on input Title component not re-render
// If change value on input Task_1 component not re-render

export const Task_1 = () => {
  console.log("Task_1")

  return (
    <div style={{...CONTAINER_STYLES} as any}>
      <Input />
      <Title title="I am a title" />
    </div>
  );
};

const Title = memo((props: { title: string }) => {
  console.log("Title was render")
      return  <h3>{props.title}</h3>;
})

const Input = memo(() => {
  const [value, setValue] = useState('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value);
  };

  console.log("Input was render")

  return (
    <input type="text" placeholder="123" value={value} onChange={handleChange} />
  );
});
