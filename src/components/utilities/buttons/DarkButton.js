function DarkButton({ children, className }) {
  return (
    <button className={`py-[10px] px-[20px] bg-dark-gray text-white rounded-2xl hover:bg-primary transition duration500 ${className}`}>
      {children}
    </button>
  );
}

export default DarkButton;