import styled from '@emotion/styled';

export const StatsListItem = styled.li`
  background-color: ${props => props.theme.colors.secondaryBg};
  width: ${props => props.theme.sizes.normal};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${props => props.theme.space[5]}px;
  border-top: ${props => props.theme.borders.normal};
  :not(:last-child) {
    border-right: ${props => props.theme.borders.normal};
  }
`;

export const StatName = styled.span`
  margin-bottom: ${props => props.theme.space[4]}px;
  color: ${props => props.theme.colors.secondaryText};
`;

export const StatValue = styled.span`
  font-size: ${props => props.theme.fontSizes.l}px;
  font-weight: ${props => props.theme.fontWeights.bold};
`;
