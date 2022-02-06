import React from 'react';
import Task from './Task'

const Tasks = ({ tasks, onDelete, onToggle }) => {
	return (
		<div className="tasks">
			<div className="caption">
				<h3>Current Tasks</h3>
			</div>

			<div className="tasks-list">
				{tasks.map((task) => (
					<Task 
						key={task.id}
						task={task}
						onDelete={onDelete}
						onToggle={onToggle}
					/>
				))}
			</div>
		</div>
	)
};

export default Tasks;
