import user from 'data/user';
import data from 'data/data';
import frinds from 'data/friends';
import transactions from 'data/transactions';
import { Profile } from '../Profile/Profile';
import { Statistics } from '../Statistics/Statistics';
import { FriendList } from '../FriendList/FriendList';
import { TransactionHistory } from '../TransactionHistory/TransactionHistory';
import { Box } from 'components/Box/Box';

export const App = () => {
  return (
    <Box width="container" mx="0" py="5" bg="bg">
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />
      <FriendList friends={frinds} />
      <TransactionHistory items={transactions} />
    </Box>
  );
};
