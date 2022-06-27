import PropTypes from 'prop-types';
import { Box } from '../Box/Box';
import {
  Avatar,
  Name,
  ProfileInformation,
  Tag,
  Location,
} from './Profile.styled';
import { ProfileStats } from './ProfileStats';

export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <Box width="profile" mb="6" mx="0" boxShadow="boxShadows">
      <ProfileInformation>
        <Avatar src={avatar} alt="User avatar" />
        <Name>{username}</Name>
        <Tag>@{tag}</Tag>
        <Location>{location}</Location>
      </ProfileInformation>
      <ProfileStats
        followers={stats.followers}
        views={stats.views}
        likes={stats.likes}
      />
    </Box>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.objectOf(PropTypes.number),
};
