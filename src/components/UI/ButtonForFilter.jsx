import styled from "styled-components";

const ButtonForFilter = ({ active, onClick, children }) => {
	return (
		<StyledButton active={active} onClick={onClick}>
			{children}
		</StyledButton>
	);
};

export default ButtonForFilter;

const StyledButton = styled.button`
	margin: 0 5px;
	padding: 10px;

	border: 1px solid #ddd;
	border-radius: 5px;
	background-color: ${(props) => (props.active ? "#5820b3" : "#fff")};
	color: ${(props) => (props.active ? "#fff" : "#000")};
	cursor: pointer;
	transition: background-color 0.3s ease;

	&:hover {
		background-color: #e0e0e0;
	}
	svg {
		font-size: 20px;
		margin: 3px;
	}
`;
