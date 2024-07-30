import React from "react";
import styled from "styled-components";

const ButtonForList = ({ children, onClick }) => {
	return <ListButtonStyled onClick={onClick}>{children}</ListButtonStyled>;
};

export default ButtonForList;

const ListButtonStyled = styled.button`
	margin: 5px;
	padding: 5px 10px;
	display: flex;
	align-items: center;
	color: #5820b3bf;
	border: 1px solid #5820b351;
	border-radius: 5px;
	cursor: pointer;
	transition: background-color 0.3s ease;

	&:hover {
		background-color: #d5cee0f2;
	}

	svg {
		font-size: 18px;
		margin: 3px;
	}
`;
