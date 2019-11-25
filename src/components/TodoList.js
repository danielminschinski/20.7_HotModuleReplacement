import React from 'react';
import style from './TodoList.css';

class TodoList extends React.Component {
	constructor(props){
		super(props);
		this.passClickedItem = this.passClickedItem.bind(this);
	}
	
	passClickedItem(clickedItem){
		this.props.onClick(clickedItem);
	}
	
	render() {
		const singleTaskNames = this.props.tasks.map(singleTask => {
			return (
			<li key={singleTask.id} className={style.TodoListStyle} onClick={() => this.passClickedItem(singleTask.id)}>
			{singleTask.text}
			</li>	
			)	
		});
		return (
			<div>
				<h3 className={style.TodoListStyle}>Zadania</h3>
					<ul>	
						{singleTaskNames}
					</ul>	
			</div>
		)
	}
}
export default TodoList;
