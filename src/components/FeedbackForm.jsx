import React, { useContext, useEffect, useState } from 'react';
import FeedbackContext from '../context/FeedbackContext';
import RatingSelect from './RatingSelect';
import Button from './reusable/Button';
import Card from './reusable/Card';

export default function FeedbackForm() {
  const [text, setText] = useState('');
  const [rating, setRating] = useState(10);
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState('');
  const { addFeedback, feedbackEdit, updateFeedback } = useContext(FeedbackContext);

  useEffect(() => {
    if (feedbackEdit.edit === true) {
      setBtnDisabled(false);
      setText(feedbackEdit.item.text);
      setRating(feedbackEdit.item.rating);
    }
  }, [feedbackEdit]);

  function formConditional(e) {
    setText(e.target.value);
    if (text.length < 9) {
      setMessage('Text must be at least 10 characters');
      setBtnDisabled(true);
    } else if (text.trim().length >= 9) {
      setMessage('');
      setBtnDisabled(false);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    e.stopPropagation();
    const newFeedback = {
      text,
      rating,
    };
    if (feedbackEdit.edit === true) {
      updateFeedback(feedbackEdit.item.id, newFeedback);
    } else {
      addFeedback(newFeedback);
    }
  }
  
  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>How would you rate our service today?</h2>
        <RatingSelect select={(rating) => setRating(rating)} />
        <div className="input-group">
          <input
            type="text"
            placeholder="Submit a review"
            onChange={formConditional}
            value={text}
          />
          <Button type="submit" btnDisabled={btnDisabled}></Button>
        </div>
        {message && <div className="message">{message}</div>}
      </form>
    </Card>
  );
}
