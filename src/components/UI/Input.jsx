import React from "react";
import styled from "styled-components";

const Input = ({ value, onChange, placeholder, as = "input" }) => {
	return (
		<InputStyled
			as={as}
			value={value}
			onChange={onChange}
			placeholder={placeholder}
		/>
	);
};

export default Input;

const InputStyled = styled.input`
	width: 100%;

	margin-bottom: 10px;
	padding: 10px;

	border: 1px solid #7b5fcf;
	border-radius: 7px;
	font-size: 16px;
	color: #7b5fcf;

	box-sizing: border-box;
	&:hover {
		background-color: #7b5fcf2e;
		color: #7b5fcf;
	}
	&::placeholder {
		color: #7b5fcf;
	}
`;
