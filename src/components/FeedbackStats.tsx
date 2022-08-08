type statsProps = {
  feedbackData: {
    id: number;
    rating: number;
    text: string;
  }[];
};

export default function FeedbackStats({ feedbackData }: statsProps) {
  let average: number | string =
    feedbackData.reduce((acc, curr) => acc + curr.rating, 0) /
    feedbackData.length;

  average = average.toFixed(1).replace(/[./]0$/, '');
  return (
    <div className="feedback-stats">
      <h4>Reviews {feedbackData.length}</h4>
      <h4>Average Rating: {average}</h4>
    </div>
  );
}
