import { Box } from 'components/Box/Box';
import PropTypes from 'prop-types';
import { StatisticsListItem, Title, Percentage } from './Statistics.styled';

export const Statistics = ({ title, stats }) => {
  return (
    <Box width="statistcs" mx="0" mb="6" bg="white" as="section">
      {title && <Title>{title}</Title>}

      <Box display="flex" justifyContent="space-between" as="ul">
        {stats.map(({ id, label, percentage }) => (
          <StatisticsListItem key={id}>
            <span>{label}</span>
            <Percentage>{percentage}%</Percentage>
          </StatisticsListItem>
        ))}
      </Box>
    </Box>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
