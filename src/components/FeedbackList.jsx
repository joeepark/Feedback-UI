import { useContext } from 'react';
import FeedbackContext from '../context/FeedbackContext';
import FeedbackItem from './FeedbackItem';
import Card from './reusable/Card';

export default function FeedbackList() {
  const { feedback, loading } = useContext(FeedbackContext);

  if (loading) {
    return (
      <Card>
        <h2 style={{ textAlign: 'center' }}>Loading...</h2>
      </Card>
    );
  }
  if (feedback.length === 0) {
    return (
      <Card>
        <h2 style={{ textAlign: 'center' }}>No data to show</h2>
      </Card>
    );
  }
  return (
    <div className="feedback-list">
      {feedback.map((item) => (
        <FeedbackItem key={item.id} item={item} />
      ))}
    </div>
  );
}
