import { createContext, useEffect, useState } from 'react';

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([]);
  const [loading, setLoading ] = useState(true);
  
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    fetch('https://feedback-interfaceapp.herokuapp.com/feedback')
      .then((response) => response.json())
      .then((data) => setFeedback(data))
      .then((data) => setLoading(false))
      .catch((err) => console.error(err));
  };

  function deleteFeedItem(deleteid) {
    fetch(`https://feedback-interfaceapp.herokuapp.com/feedback/${deleteid}`, {
      method: 'DELETE',
    })
      .then((data) => setFeedback(feedback.filter((item) => item.id !== deleteid)))
      .catch((err) => console.error(err));
  }

  function addFeedback(newFeedback) {
    fetch('https://feedback-interfaceapp.herokuapp.com/feedback', {
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
    fetch(`https://feedback-interfaceapp.herokuapp.com/feedback/${id}`, {
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
      value={{ feedback, deleteFeedItem, addFeedback, feedbackEdit, editFeedback, updateFeedback, loading }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
