import { useState } from 'react';
import Card from './Card';
import { FaTimes } from 'react-icons/fa';

type itemProps = {
  item: {
    id: number;
    rating: number;
    text: string;
  };
  handleDelete: Function;
};

export default function FeedbackItem({ item, handleDelete }: itemProps) {
  const { id, rating, text } = item;
  const [ratingDisplay, setRatingDisplay] = useState(rating);
  const [textDisplay, setTextDisplay] = useState(text);

  return (
    <>
      <Card>
        <div className="num-display">{ratingDisplay}</div>
        <button className="close" onClick={() => handleDelete(id)}>
          <FaTimes color="purple" />
        </button>
        <div className="text-display">{textDisplay}</div>
      </Card>
    </>
  );
}
