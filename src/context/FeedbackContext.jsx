import { createContext, useEffect, useState } from 'react';

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    fetch('http://localhost:3000/feedback')
      .then((response) => response.json())
      .then((data) => setFeedback(data))
      .catch((err) => console.error(err));
  };

  function deleteFeedItem(deleteid) {
    fetch(`http://localhost:3000/feedback/${deleteid}`, {
      method: 'DELETE',
    })
      .then((data) => setFeedback(feedback.filter((item) => item.id !== deleteid)))
      .catch((err) => console.error(err));
  }

  function addFeedback(newFeedback) {
    fetch('http://localhost:3000/feedback', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newFeedback),
    })
      .then((response) => response.json())
      .then((data) => setFeedback([data, ...feedback]))
      .catch((err) => console.error(err));
  }

  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  });

  function editFeedback(item) {
    setFeedbackEdit({
      item,
      edit: true,
    });
  }

  function updateFeedback(id, upitem) {
    fetch(`http://localhost:3000/feedback/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(upitem),
    })
      .then((response) => response.json())
      .then((data) =>
        setFeedback(feedback.map((item) => (item.id === id ? { ...item, ...data } : item)))
      )
      .catch((err) => console.error(err));
  }

  return (
    <FeedbackContext.Provider
      value={{ feedback, deleteFeedItem, addFeedback, feedbackEdit, editFeedback, updateFeedback }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
