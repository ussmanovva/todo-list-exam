import { FaPlus } from "react-icons/fa";
import styled from "styled-components";

const ButtonForApp = ({ openModalBtn }) => {
	return (
		<AddButtonStyled onClick={() => openModalBtn(null)}>
			<FaPlus /> Add Task
		</AddButtonStyled>
	);
};

export default ButtonForApp;

const AddButtonStyled = styled.button`
	padding: 10px 20px;

	display: flex;
	align-items: center;
	justify-content: center;

	background-color: #5820b3;
	color: #fff;
	border: none;
	border-radius: 5px;
	cursor: pointer;
	transition: background-color 0.3s ease;

	&:hover {
		background-color: #5820b3bf;
	}

	svg {
		margin-right: 8px;
	}
`;
