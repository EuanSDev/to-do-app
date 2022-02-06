import React from 'react';
import { useState } from 'react'

const AddTask = ({ onAdd }) => {
	const [text, setText] = useState('')
	const [complete, setComplete] = useState(false)

	const onSubmit = (e) => {
		e.preventDefault()

		if(!text){
			alert('Enter text into field')
			return
		}

		onAdd({ text, complete })

		setText('')
		setComplete(false)
	}

	return (
		<div className="add-task">
			<div className="caption">
				<h3>Add a New Task</h3>
			</div>

			<form className="input" onSubmit={onSubmit}>
				<input
					type="text"
					className='todo-input'
					placeholder='What do you need to do?'
					value={text}
					onChange={(e) => setText(e.target.value)}
				/>
				<div className="add-task-button">
					<button className='input-btn' type='submit'>Add task</button>
				</div>
			</form>
		</div>
	)
};

export default AddTask;