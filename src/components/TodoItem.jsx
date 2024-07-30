import styled from "styled-components";
import Checkbox from "./UI/Checkbox";
import ButtonForList from "./UI/ButtonForList";
import { FaEdit, FaTrash } from "react-icons/fa";

const TodoItem = ({ task, onEdit, onDelete, onToggle }) => {
	return (
		<ItemContent className={task.completed ? "completed" : ""}>
			<TaskDetails>
				<Checkbox checked={task.completed} onChange={() => onToggle(task.id)} />
				<TaskText>
					<TaskTitle>{task.title}</TaskTitle>
					<TaskDescription>{task.description}</TaskDescription>
				</TaskText>
			</TaskDetails>
			<TaskActions>
				<ButtonForList onClick={() => onEdit(task)}>
					<FaEdit />
				</ButtonForList>
				<ButtonForList onClick={() => onDelete(task.id)}>
					<FaTrash />
				</ButtonForList>
			</TaskActions>
		</ItemContent>
	);
};

export default TodoItem;

const ItemContent = styled.li`
	margin-bottom: 10px;
	padding: 10px;

	display: flex;
	justify-content: space-between;
	align-items: center;

	background-color: #f5f5f5;
	border-radius: 5px;
	transition: background-color 0.3s ease;
	&.completed {
		background-color: #5820b32e;
		text-decoration: line-through;
	}
`;

const TaskDetails = styled.div`
	display: flex;
	align-items: center;
`;

const TaskText = styled.div`
	margin-left: 10px;
	text-align: left;
`;

const TaskTitle = styled.strong`
	display: block;
	color: #333;
`;

const TaskDescription = styled.p`
	margin: 0;
	color: #666;
`;

const TaskActions = styled.div`
	display: flex;
`;
