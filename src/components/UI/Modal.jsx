import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Input from "./Input"; //
import Checkbox from "./Checkbox";

const Modal = ({ task, onSave, onCancel }) => {
	const [title, setTitle] = useState(task ? task.title : "");
	const [description, setDescription] = useState(task ? task.description : "");
	const [completed, setCompleted] = useState(task ? task.completed : false);

	useEffect(() => {
		if (task) {
			setTitle(task.title);
			setDescription(task.description);
			setCompleted(task.completed);
		}
	}, [task]);

	const handleSave = () => {
		if (title.trim() === "") return;
		onSave({ id: task ? task.id : Date.now(), title, description, completed });
	};

	return (
		<ModalBackdrop>
			<ModalContent>
				<ModalTitle>{task ? "Edit Task" : "Add Task"}</ModalTitle>
				<Input
					value={title}
					onChange={(e) => setTitle(e.target.value)}
					placeholder="Enter the title..."
				/>
				<Input
					as="textarea"
					value={description}
					onChange={(e) => setDescription(e.target.value)}
					placeholder="Enter the description..."
				/>
				<Checkbox
					checked={completed}
					onChange={() => setCompleted(!completed)}
					label="Status"
				/>
				<ModalActions>
					<CancelButton onClick={onCancel}>Cancel</CancelButton>
					<SaveButton onClick={handleSave}>
						{task ? "Update Task" : "Add Task"}
					</SaveButton>
				</ModalActions>
			</ModalContent>
		</ModalBackdrop>
	);
};

export default Modal;

const ModalBackdrop = styled.div`
	position: fixed;
	display: flex;
	justify-content: center;
	align-items: center;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background-color: rgba(0, 0, 0, 0.5);
	z-index: 1000;
`;

const ModalContent = styled.div`
	width: 90%;
	max-width: 450px;
	padding: 20px;
	background-color: #fff;
	border-radius: 15px;
`;

const ModalTitle = styled.h2`
	margin-bottom: 20px;
	color: #7b5fcf;
`;

const ModalActions = styled.div`
	display: flex;
	justify-content: flex-end;
	margin-top: 20px;
`;

const CancelButton = styled.button`
	margin-right: 10px;
	padding: 10px 20px;
	color: #333;
	background-color: white;
	border: 1px solid #5820b351;
	border-radius: 5px;
	cursor: pointer;
	transition: background-color 0.3s ease;

	&:hover {
		background-color: #5820b351;
	}
`;

const SaveButton = styled.button`
	padding: 10px 20px;
	color: #fff;
	background-color: #5820b3;
	border: none;
	border-radius: 5px;
	cursor: pointer;
	transition: background-color 0.3s ease;

	&:hover {
		background-color: #5820b3bf;
	}
`;
