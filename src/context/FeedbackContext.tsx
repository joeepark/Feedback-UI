import { createContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { FeedbackData } from '../data/FeedbackData';

//@ts-ignore
const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }: any) => {
  const [feedback, setFeedback] = useState(FeedbackData);

  function deleteFeedItem(deleteid: number) {
    setFeedback(feedback.filter((feedbackid) => feedbackid.id !== deleteid));
  }

  function addFeedback(newFeedback: any) {
    newFeedback.id = uuidv4();
    setFeedback([newFeedback, ...feedback]);
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
    setFeedback(feedback.map((item) => (item.id === id ? { ...item, ...upitem } : item)));
  }
  console.log('fb', feedback);
  // console.log('feedbackEdit', feedbackEdit);
  return (
    <FeedbackContext.Provider
      value={{ feedback, deleteFeedItem, addFeedback, feedbackEdit, editFeedback, updateFeedback }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
