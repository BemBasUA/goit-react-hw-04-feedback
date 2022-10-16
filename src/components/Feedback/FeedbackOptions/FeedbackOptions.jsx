import { Box } from 'components/Box/Box';
import { Title } from '../Feedback.styled/Feedback.styled';
import { Button } from '../Feedback.styled/Feedback.styled';
import PropTypes from 'prop-types';

const shortid = require('shortid');

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const optionsArray = Object.keys(options);
  return (
    <Box>
      <Title>Please leave feedback</Title>
      {optionsArray.map(option => {
        const result = option.charAt(0).toUpperCase() + option.slice(1);
        return (
          <Button
            key={shortid.generate()}
            id={option}
            onClick={() => onLeaveFeedback(option)}
          >
            {result}
          </Button>
        );
      })}
    </Box>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.object.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
