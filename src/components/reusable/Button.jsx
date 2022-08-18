export default function Button({ version, type, btnDisabled }) {

  return (
    <button className={`btn btn-${version}`} type={type} disabled={btnDisabled}>
      Submit
    </button>
  );
}
