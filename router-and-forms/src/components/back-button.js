export function BackButton() {
  const handleClick = () => window.history.go(-1);

  return (
    <button type="button" onClick={handleClick}>
      Go back
    </button>
  );
}
