import styled from "styled-components";
import TodoItem from "./TodoItem";

const TodoList = ({ tasks, onEdit, onDelete, onToggle }) => {
	return (
		<ListContainer>
			{tasks.map((task) => (
				<TodoItem
					key={task.id}
					task={task}
					onEdit={onEdit}
					onDelete={onDelete}
					onToggle={onToggle}
				/>
			))}
		</ListContainer>
	);
};

export default TodoList;

const ListContainer = styled.ul`
	list-style: none;
	padding: 0;
	margin: 0;
`;
