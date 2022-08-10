import { useContext, useEffect, useState } from 'react';
import Card from './reusable/Card';
import { FaTimes, FaEdit } from 'react-icons/fa';
import FeedbackContext from '../context/FeedbackContext';

type itemProps = {
  item: {
    id: number;
    rating: number;
    text: string;
  };
};

export default function FeedbackItem({ item }: itemProps) {
  const { id, rating, text } = item;
  const [ratingDisplay, setRatingDisplay] = useState(rating);
  const [textDisplay, setTextDisplay] = useState(text);
  const { deleteFeedItem, editFeedback } = useContext(FeedbackContext);
  
  return (
    <>
      <Card>
        <div className="num-display">{ratingDisplay}</div>
        <button className="edit" onClick={() => editFeedback(item)}>
          <FaEdit color="purple" />
        </button>
        <button className="close" onClick={() => deleteFeedItem(id)}>
          <FaTimes color="purple" />
        </button>
        <div className="text-display">{textDisplay}</div>
      </Card>
    </>
  );
}
