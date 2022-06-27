import PropTypes from 'prop-types';
import { Box } from '../Box/Box';
import { StatsListItem, StatName, StatValue } from './ProfileStats.styled';

export const ProfileStats = ({ followers, views, likes }) => {
  return (
    <Box display="flex" justifyContent="space-between" as="ul">
      <StatsListItem>
        <StatName>Followers</StatName>
        <StatValue>{followers}</StatValue>
      </StatsListItem>
      <StatsListItem>
        <StatName>Views</StatName>
        <StatValue>{views}</StatValue>
      </StatsListItem>
      <StatsListItem>
        <StatName>Likes</StatName>
        <StatValue>{likes}</StatValue>
      </StatsListItem>
    </Box>
  );
};

ProfileStats.propTypes = {
  followers: PropTypes.number.isRequired,
  views: PropTypes.number.isRequired,
  likes: PropTypes.number.isRequired,
};
