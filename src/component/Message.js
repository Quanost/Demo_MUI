import React, {useRef, useState,useCallback} from 'react'
function MyComp() {
	const [isShowingForm, setShowingForm] = useState(false);
	const inputRef = useRef(null);

	const refCallback = useCallback((node) => {
		console.log(node);
	}, [])

	const onSubmitForm = (e) => {
		e.preventDefault();

		console.log(inputRef.current.value);
	}

	return <>
		<button type="button" onClick={() => setShowingForm(!isShowingForm)}>
			{isShowingForm ? "To Off" : "To On"}
		</button>
		
		{
			isShowingForm && <form onSubmit={onSubmitForm}>
			<input type="text" ref={refCallback} />
			<button type="submit">Submit</button>
		</form>
		}
	</>
}

export default MyComp