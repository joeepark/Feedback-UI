import { createContext, ReactNode, useState } from 'react';
import { FeedbackData } from '../data/FeedbackData';


const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }: any) => {
  const [feedback, setFeedback] = useState(FeedbackData);

  // console.log(feedbackData);
  return <FeedbackContext.Provider value={feedback}>{children}</FeedbackContext.Provider>;
};


export default FeedbackContext