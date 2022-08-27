import styled from "styled-components";

export const LeftSection = styled.div`
	width: 100%;
	@media ${(props) => props.theme.breakpoints.sm} {
		width: 80%;
		display: flex;
		flex-direction: column;

		margin: 0 auto;
	}
	@media ${(props) => props.theme.breakpoints.md} {
		width: 100%;
		display: flex;
		flex-direction: column;

		margin: 0 auto;
	}
`;
export const Slogan = styled.p`
	color: rgba(255, 255, 255, 0.5);
	min-width: 280px;
	letter-spacing: 0.02em;
	font-size: 18px;
	line-height: 30px;
	padding: 1rem;

	@media ${(props) => props.theme.breakpoints.md} {
		font-size: 16px;
		line-height: 28px;
	}

	@media ${(props) => props.theme.breakpoints.sm} {
		line-height: 22px;
		font-size: 14px;
		min-width: 100px;
	}
`;
