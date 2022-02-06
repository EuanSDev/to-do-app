const Task = ({ task, onDelete, onToggle }) => {
	return (
		<div className="item">
			<button className={`done-btn ${task.complete ? 'done-fill' : ''}`} onClick={() => onToggle(task.id)}></button>
			<div className="item-text">{ task.text }</div>
			<button className="remove-btn" onClick={() => onDelete(task.id)}></button>
		</div>
	)
};

export default Task;