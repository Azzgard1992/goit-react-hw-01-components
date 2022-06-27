import styled from '@emotion/styled';

export const Table = styled.table`
  font-size: ${props => props.theme.fontSizes.s}px;
  border-radius: ${props => props.theme.radii.table};
  border-spacing: 0;
  text-align: center;
  width: ${props => props.theme.sizes.table}px;
  margin-top: ${props => props.theme.space[6]}px;
  margin-left: ${props => props.theme.space[0]};
  margin-right: ${props => props.theme.space[0]};
`;

export const Th = styled.th`
  background: ${props => props.theme.colors.tableBg};
  color: ${props => props.theme.colors.white};
  text-transform: uppercase;
  text-shadow: ${props => props.theme.shadows.textShadow};
  padding-top: ${props => props.theme.space[4]}px;
  padding-bottom: ${props => props.theme.space[4]}px;
  padding-left: ${props => props.theme.space[5]}px;
  padding-right: ${props => props.theme.space[5]}px;
  border-style: ${props => props.theme.borders.solid};
  border-width: ${props => props.theme.borders.borderWidth};
  border-color: ${props => props.theme.colors.white};
  :first-child {
    border-top-left-radius: ${props => props.theme.radii.table};
  }
  :last-child {
    border-top-right-radius: ${props => props.theme.radii.table};
    border-right: ${props => props.theme.borders.none};
  }
`;

export const Td = styled.td`
  border-style: ${props => props.theme.borders.solid};
  border-width: ${props => props.theme.borders.borderWidth};
  border-color: ${props => props.theme.colors.white};
  padding-top: ${props => props.theme.space[4]}px;
  padding-bottom: ${props => props.theme.space[4]}px;
  padding-left: ${props => props.theme.space[5]}px;
  padding-right: ${props => props.theme.space[5]}px;
  background: ${props => props.theme.colors.secondaryTableBg};
  :first-child {
    text-align: left;
    :first-letter {
      text-transform: uppercase;
    }
  }
`;
