import styled from '@emotion/styled';

export const Status = styled.span`
  ::before {
    content: '';
    display: block;
    width: ${props => props.theme.sizes.status}px;
    height: ${props => props.theme.sizes.status}px;
    margin-right: ${props => props.theme.space[6]}px;
    border-radius: ${props => props.theme.radii.round};
    background-color: ${props =>
      props.isOnline ? props.theme.colors.green : props.theme.colors.red};
  }
`;

export const Avatar = styled.img`
  width: ${props => props.theme.sizes.friendAvatar}px;
  margin-right: ${props => props.theme.space[6]}px;
`;

export const Name = styled.p`
  font-size: ${props => props.theme.fontSizes.l}px;
  font-weight: ${props => props.theme.fontWeights.bold};
`;
