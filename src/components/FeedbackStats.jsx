import { useContext } from 'react';
import FeedbackContext from '../context/FeedbackContext';

export default function FeedbackStats({ feedbackData }) {
  const { feedback } = useContext(FeedbackContext);
  let average = feedback.reduce((acc, curr) => acc + curr.rating, 0) / feedback.length;
  average = average.toFixed(1).replace(/[./]0$/, '');
  return (
    <div className="feedback-stats">
      <h4>Reviews {feedback.length}</h4>
      <h4>Average Rating: {average}</h4>
    </div>
  );
}
