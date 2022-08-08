import FeedbackItem from './FeedbackItem';

type feedbackProps = {
  feedback: {
    id: number;
    rating: number;
    text: string;
  }[];
  handleDelete: Function;
};

export default function FeedbackList({
  feedback,
  handleDelete,
}: feedbackProps) {
  return (
    <div className="feedback-list">
      {feedback.map((item) => (
        <FeedbackItem key={item.id} item={item} handleDelete={handleDelete} />
      ))}
    </div>
  );
}
