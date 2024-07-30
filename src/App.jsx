import React, { useReducer } from "react";
import ACTIONS from "./utils/constans";
import styled from "styled-components";
import Header from "./components/UI/Header";
import ButtonForApp from "./components/UI/ButtonForApp";
import FilterButtons from "./components/FilterButtons";
import TodoList from "./components/TodoList";
import Modal from "./components/UI/Modal";

const initialState = { 	// начальное состояние приложения.
	tasks: [],
	filter: "all",
	isModalOpen: false,
	currentTask: null,
};

const reducer = (state, action) => { // действияларды иштетет жана ошол действиянын type-не карап, состоянияны жаныртат.
	switch (action.type) { // switch кайсыл действия жасалышын аныктап берет.
		case ACTIONS.ADD_TASK:
			return {
				...state, // учурдагы состоянияны напрямую озгортпош учун клонить этип алдык.
				tasks: [...state.tasks, action.payload], // эски задачаларга жаны задачаларды(payload) кошуу учун жаны массив тузобуз.
				isModalOpen: false,
			};
		case ACTIONS.EDIT_TASK:
			return {
				...state,
				tasks: state.tasks.map((task) =>
					task.id === action.payload.id ? action.payload : task
				),  // если задачанын id-си менен action.payload-тун id-си совпадает, анда аны жаны задачага алмаштырып коебуз. Болбосо эскисин калтырабыз!
				isModalOpen: false,
			};
		case ACTIONS.DELETE_TASK:
			return {
				...state,
				tasks: state.tasks.filter((task) => task.id !== action.payload), // жаны массив задач создаем, если id-ге чейин action.payload-га окшош болсо.
			};
		case ACTIONS.TOGGLE_TASK_STATUS:
			return {
				...state,
				tasks: state.tasks.map((task) =>
					task.id === action.payload
						? { ...task, completed: !task.completed }
						: task
				), // если задачанын id-си менен action.payload совпадает, то анын статусун карама-каршыга барабарлап коебуз, болбосо оставляем задачу.
			};
		case ACTIONS.SET_FILTER:
			return {
				...state,
				filter: action.payload, // новый фильтрр кочурдук, action.payload-га жонотулгон.
			};
		case ACTIONS.OPEN_MODAL:
			return {
				...state,
				isModalOpen: true,
				currentTask: action.payload, // текущий задачаны модальное окнодо редактирование учун беребиз.
			};
		case ACTIONS.CLOSE_MODAL:
			return {
				...state,
				isModalOpen: false,
				currentTask: null,
			};
		default:
			return state;
	}
};

const App = () => {
	const [state, dispatch] = useReducer(reducer, initialState);

	const handleAddTask = (task) => {
		dispatch({ type: ACTIONS.ADD_TASK, payload: { ...task, id: Date.now() } });
	};

	const handleEditTask = (task) => {
		dispatch({ type: ACTIONS.EDIT_TASK, payload: task });
	};

	const handleDeleteTask = (id) => {
		dispatch({ type: ACTIONS.DELETE_TASK, payload: id });
	};

	const handleToggleTaskStatus = (id) => {
		dispatch({ type: ACTIONS.TOGGLE_TASK_STATUS, payload: id });
	};

	const handleFilterChange = (filter) => {
		dispatch({ type: ACTIONS.SET_FILTER, payload: filter });
	};

	const openModal = (task) => {
		dispatch({ type: ACTIONS.OPEN_MODAL, payload: task });
	};

	const closeModal = () => {
		dispatch({ type: ACTIONS.CLOSE_MODAL });
	};

	const filteredTasks = state.tasks.filter((task) => {
		if (state.filter === "completed") return task.completed;
		if (state.filter === "incomplete") return !task.completed;
		return true;
	});

	return (
		<AppContainer>
			<Header>
				<TitleStyled>Todo-List</TitleStyled>
				<ButtonForApp openModalBtn={openModal} />
			</Header>
			<FilterButtons
				filter={state.filter}
				onFilterChange={handleFilterChange}
			/>
			<TodoList
				tasks={filteredTasks}
				onEdit={openModal}
				onDelete={handleDeleteTask}
				onToggle={handleToggleTaskStatus}
			/>
			{state.isModalOpen && (
				<Modal
					task={state.currentTask}
					onSave={state.currentTask ? handleEditTask : handleAddTask}
					onCancel={closeModal}
				/>
			)}
		</AppContainer>
	);
};

export default App;

const AppContainer = styled.div`
	max-width: 600px;
	margin: 0 auto;
	padding: 20px;
	text-align: center;
`;

const TitleStyled = styled.h1`
	font-size: 2rem;
	color: #333333;
`;
