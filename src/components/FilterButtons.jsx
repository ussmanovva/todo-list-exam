import { FaCheck, FaTasks, FaTimesCircle } from "react-icons/fa";
import ButtonForFilter from "./UI/ButtonForFilter";
import styled from "styled-components";

const FilterButtons = ({ filter, onFilterChange }) => {
	return (
		<FilterContainer>
			<ButtonForFilter
				active={filter === "all"}
				onClick={() => onFilterChange("all")}>
				<FaTasks />
			</ButtonForFilter>
			<ButtonForFilter
				active={filter === "completed"}
				onClick={() => onFilterChange("completed")}>
				<FaCheck />
			</ButtonForFilter>
			<ButtonForFilter
				active={filter === "incomplete"}
				onClick={() => onFilterChange("incomplete")}>
				<FaTimesCircle />
			</ButtonForFilter>
		</FilterContainer>
	);
};

export default FilterButtons;

const FilterContainer = styled.div`
	margin-bottom: 20px;
	display: flex;
	justify-content: center;
`;
