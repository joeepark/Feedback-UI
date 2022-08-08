type buttonProps = {
  version: string;
  type?: 'submit' | 'reset' | 'button';
  btnDisabled: boolean;
};

export default function Button({
  // children,
  version,
  type,
  btnDisabled,
}: buttonProps) {
  return (
    <button className={`btn btn-${version}`} type={type} disabled={btnDisabled}>
      Submit
    </button>
  );
}

Button.defaultProps = {
  version: 'primary',
  type: 'button',
  btnDisabled: true,
};
