import React, { useState } from 'react';
import RatingSelect from './RatingSelect';
import Button from './reusable/Button';
import Card from './reusable/Card';

export default function FeedbackForm() {
  const [text, setText] = useState('');
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

  console.log(text.length);

  return (
    <Card>
      <form>
        <RatingSelect />
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
