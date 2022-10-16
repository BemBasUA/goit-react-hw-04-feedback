import { Box } from 'components/Box/Box';
import { Title } from '../Feedback.styled/Feedback.styled';
import PropTypes from 'prop-types';

export const Section = ({ title, children }) => {
  return (
    <Box as="section">
      <Title>{title}</Title>
      {children}
    </Box>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.array.isRequired,
};
