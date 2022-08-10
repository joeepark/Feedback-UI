import { useContext } from 'react';
import FeedbackContext from '../context/FeedbackContext';

type statsProps = {
  feedbackData: {
    id: number;
    rating: number;
    text: string;
  }[];
};

export default function FeedbackStats({ feedbackData }: statsProps) {
  const { feedback } = useContext(FeedbackContext);

  let average: number | string =
    feedback.reduce((acc, curr) => acc + curr.rating, 0) / feedback.length;

  average = average.toFixed(1).replace(/[./]0$/, '');
  return (
    <div className="feedback-stats">
      <h4>Reviews {feedback.length}</h4>
      <h4>Average Rating: {average}</h4>
    </div>
  );
}
