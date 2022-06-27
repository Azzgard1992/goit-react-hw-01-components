import { Box } from 'components/Box/Box';
import PropTypes from 'prop-types';
import { Avatar, Name, Status } from './FriendList.styled';

export const FriendList = ({ friends }) => {
  return (
    <ul>
      {friends.map(({ avatar, name, isOnline, id }) => (
        <Box
          key={id}
          width="friendList"
          display="flex"
          alignItems="center"
          mx="0"
          mb="5"
          p="4"
          as="li"
          boxShadow="boxShadows"
        >
          <Status isOnline={isOnline}></Status>
          <Avatar src={avatar} alt="User avatar" />
          <Name>{name}</Name>
        </Box>
      ))}
    </ul>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ),
};
