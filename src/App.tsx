import { useState } from 'react';
import FeedbackList from './components/FeedbackList';
import FeedbackStats from './components/FeedbackStats';
import Header from './components/Header';
import { FeedbackData } from './data/FeedbackData';

function App() {
  const [feedbackData, setFeedbackData] = useState(FeedbackData);
  // console.log('fd', feedbackData);

  function deleteFeedItem(deleteid: number) {
    setFeedbackData(
      feedbackData.filter((feedbackid) => feedbackid.id !== deleteid)
    );
    return;
  }

  if (feedbackData.length === 0) {
    return (
      <>
        <Header />
        <h2 style={{ textAlign: 'center' }}>No data to show</h2>
      </>
    );
  }
  return (
    <>
      <Header />
      <div className="container">
        <h1>My App</h1>
        <FeedbackStats feedbackData={feedbackData} />
        <FeedbackList feedback={feedbackData} handleDelete={deleteFeedItem} />
      </div>
    </>
  );
}

export default App;
