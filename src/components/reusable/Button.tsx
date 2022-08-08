type buttonProps = {
  version: string;
  type?: 'submit' | 'reset' | 'button';
  isDisabled: boolean;
};

export default function Button({
  // children,
  version,
  type,
  isDisabled,
}: buttonProps) {
  return (
    <button className={`btn btn-${version}`} type={type} disabled={isDisabled}>
      Submit
    </button>
  );
}

Button.defaultProps = {
  version: 'primary',
  type: 'button',
  isDisabled: false,
};
