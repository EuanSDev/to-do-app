import { useEffect, useState } from 'react'
import AddTask from './AddTask'
import Tasks from './Tasks'

const Main = () => {
	const [tasks, setTasks] = useState([])
	useEffect(() => {
		const getTasks = async () => {
			const tasksFromServer = await fetchTasks()
			setTasks(tasksFromServer)
		}

		getTasks()
	}, [])

	// Fetch all tasks
	const fetchTasks = async () => {
		const res = await fetch('http://localhost:5000/tasks')
		const data = await res.json()

		return data
	}

	// Fetch a single task
	const fetchTask = async (id) => {
		const res = await fetch(`http://localhost:5000/tasks/${id}`)
		const data = await res.json()

		return data
	}

	// Add task
	const addTask = async (task) => {
		const res = await fetch('http://localhost:5000/tasks', {
			method: 'POST',
			headers: {
				'Content-type': 'application/json'
			},
			body: JSON.stringify(task)
		})
		
		const data = await res.json()

		setTasks([...tasks, data])
	}

	// Toggle complete
	const toggle_complete = async (id) => {
		const task_to_toggle = await fetchTask(id)
		const up_date_task = { ...task_to_toggle, complete: !task_to_toggle.complete }

		const result = await fetch(`http://localhost:5000/tasks/${id}`, {
			method: 'PUT',
			headers: {
				'Content-type': 'application/json',
			},
			body: JSON.stringify(up_date_task)
		})

		const data = await result.json()

		setTasks(
			tasks.map((task) => 
				task.id === id ? { ...task, complete: data.complete } : task
			)
		)
	}

	// Delete task
	const delete_task = async (id) => {
		await fetch(`http://localhost:5000/tasks/${id}`, { method: 'DELETE', })

		setTasks(tasks.filter((task) => task.id !== id))

		
	}

	return (
		<main>
			<section className="application">
				<AddTask onAdd={addTask} />
				{tasks.length > 0 ? 
					(
						<Tasks 
							tasks={tasks} 
							onDelete={delete_task}
							onToggle={toggle_complete}
						/>
					) : (
						<div className="no-tasks">
							<h3>No Tasks To Show</h3>
						</div>
					)
				}
			</section>
		</main>
	)
};

export default Main;
