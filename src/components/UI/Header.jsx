import styled from "styled-components";

const Header = ({ children }) => {
	return <HeaderStyled>{children}</HeaderStyled>;
};

export default Header;

const HeaderStyled = styled.header`
	margin-bottom: 20px;

	display: flex;
	justify-content: space-between;
	align-items: center;
`;
