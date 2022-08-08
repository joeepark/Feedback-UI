import React from 'react';
import Button from './reusable/Button';
import Card from './reusable/Card';

export default function FeedbackForm() {
  function formSubmit(e: React.ChangeEvent<HTMLInputElement>) {
    console.log(e.target.value);
    return;
  }
  return (
    <Card>
      <form>
        <div className="input-group">
          <input
            type="text"
            placeholder="Submit a review"
            onChange={formSubmit}
          />
          <Button type="submit"></Button>
        </div>
      </form>
    </Card>
  );
}
