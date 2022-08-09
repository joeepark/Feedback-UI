import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import FeedbackForm from './components/FeedbackForm';
import FeedbackList from './components/FeedbackList';
import FeedbackStats from './components/FeedbackStats';
import Header from './components/Header';
import { FeedbackProvider } from './context/FeedbackContext';
import { FeedbackData } from './data/FeedbackData';

function App() {
  const [feedbackData, setFeedbackData] = useState(FeedbackData);

  function deleteFeedItem(deleteid: number) {
    setFeedbackData(feedbackData.filter((feedbackid) => feedbackid.id !== deleteid));
    return;
  }

  function addFeedback(newFeedback: any) {
    newFeedback.id = uuidv4();
    setFeedbackData([newFeedback, ...feedbackData]);
    return;
  }

  // console.log(feedbackData);

  if (feedbackData.length === 0) {
    return (
      <>
        <Header />
        <h2 style={{ textAlign: 'center' }}>No data to show</h2>
      </>
    );
  }
  return (
    <FeedbackProvider>
      <Header />
      <div className="container">
        <h1>My App</h1>
        <FeedbackForm addFeedback={addFeedback} />
        <FeedbackStats feedbackData={feedbackData} />
        <FeedbackList handleDelete={deleteFeedItem} />
      </div>
    </FeedbackProvider>
  );
}

export default App;
