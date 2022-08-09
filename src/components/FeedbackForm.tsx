import React, { useState } from 'react';
import RatingSelect from './RatingSelect';
import Button from './reusable/Button';
import Card from './reusable/Card';

type feedbackProps = {
  addFeedback: {
    id: string;
    rating: number;
    text: string;
  };
};

export default function FeedbackForm({ addFeedback }: feedbackProps) {
  const [text, setText] = useState('');
  const [rating, setRating] = useState(10);
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState('');

  function formConditional(e: React.ChangeEvent<HTMLInputElement>) {
    setText(e.target.value);
    if (text.length < 9) {
      setMessage('Text must be at least 10 characters');
      setBtnDisabled(true);
    } else if (text.trim().length >= 9) {
      setMessage('');
      setBtnDisabled(false);
    }
    return;
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const newFeedback = {
      text,
      rating,
    };
    addFeedback(newFeedback);
    return;
  }

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <RatingSelect select={(rating: number) => setRating(rating)} />
        <div className="input-group">
          <input
            type="text"
            placeholder="Submit a review"
            onChange={formConditional}
          />
          <Button type="submit" btnDisabled={btnDisabled}></Button>
        </div>
        {message && <div className="message">{message}</div>}
      </form>
    </Card>
  );
}
