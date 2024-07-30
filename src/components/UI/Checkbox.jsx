import React from "react";
import styled from "styled-components";

const Checkbox = ({ checked, onChange, label }) => {
	return (
		<CheckboxLabel>
			<CheckboxStyled type="checkbox" checked={checked} onChange={onChange} />
			{label}
		</CheckboxLabel>
	);
};

export default Checkbox;

const CheckboxLabel = styled.label`
	display: flex;
	align-items: center;
	cursor: pointer;

	color: #6d4cc9;
`;

const CheckboxStyled = styled.input`
	margin-right: 10px;
	cursor: pointer;
`;
