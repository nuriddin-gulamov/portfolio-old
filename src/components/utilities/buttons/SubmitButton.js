function SubmitButton({ children, className }) {
  return (
    <button
      type="submit"
      value="send"
      className={`py-[10px] px-[20px] bg-dark-gray text-white rounded-2xl hover:bg-primary transition duration-500 ${className}`}
    >
      {children}
    </button>
  );
}

export default SubmitButton;
