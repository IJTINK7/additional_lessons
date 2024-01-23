import {ChangeEvent, memo, useMemo, useState} from "react";

export const SlowComponent = memo(() => {
	console.log('SlowComponent re-render...');

	const [value, setValue] = useState('');

	const onChange = (event: ChangeEvent<HTMLInputElement>) => setValue(event.currentTarget.value);

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	useMemo(() => {
		let now = performance.now();

		while (performance.now() - now < 1000) {
			// Artificial delay -- do nothing for 100ms
		}
	}, []);

	return (
		<div>
			<input type="text" value={value} onChange={onChange}/>
			<p>I am a very slow component tree.</p>
		</div>
	);
});