import { useContext } from 'react';
import FeedbackContext from '../context/FeedbackContext';
import FeedbackItem from './FeedbackItem';

export default function FeedbackList({ handleDelete }: any) {
  const { feedback } = useContext(FeedbackContext);
  console.log('fbd', feedback);

  return (
    <div className="feedback-list">
      {/* {feedbackData.map((item) => (
        <FeedbackItem key={item.id} item={item} handleDelete={handleDelete} />
      ))} */}
    </div>
  );
}
