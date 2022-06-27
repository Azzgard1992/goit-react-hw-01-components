import styled from '@emotion/styled';

export const Title = styled.h2`
  text-align: center;
  text-transform: uppercase;
  padding: ${props => props.theme.space[6]}px;
`;

function randColor() {
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

export const StatisticsListItem = styled.li`
  width: ${props => props.theme.sizes.normal};
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${props => props.theme.colors.white};
  background-color: ${props => randColor()};
  padding: ${props => props.theme.space[5]}px;
`;

export const Percentage = styled.span`
  font-size: ${props => props.theme.fontSizes.l}px;
`;
