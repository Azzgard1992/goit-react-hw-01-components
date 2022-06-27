import styled from '@emotion/styled';

export const ProfileInformation = styled.div`
  text-align: center;
  padding: ${props => props.theme.space[6]}px;
`;

export const Avatar = styled.img`
  border-radius: ${props => props.theme.radii.round};
  width: ${props => props.theme.sizes.avatar}px;
  margin-left: ${props => props.theme.space[0]};
  margin-right: ${props => props.theme.space[0]};
  margin-bottom: ${props => props.theme.space[5]}px;
`;
export const Name = styled.p`
  color: ${props => props.theme.colors.text};
  font-size: ${props => props.theme.fontSizes.l}px;
  font-weight: ${props => props.theme.fontWeights.bold};
  margin-bottom: ${props => props.theme.space[4]}px;
`;

export const Tag = styled.p`
  color: ${props => props.theme.colors.secondaryText};
  font-size: ${props => props.theme.fontSizes.m}px;
  margin-bottom: ${props => props.theme.space[4]}px;
`;
export const Location = styled.p`
  color: ${props => props.theme.colors.secondaryText};
  font-size: ${props => props.theme.fontSizes.m}px;
`;
