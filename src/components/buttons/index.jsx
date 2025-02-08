export const GreenButton = ({ text, onClick, type }) => {
  return (
    <button
      className="cursor-pointer py-2 px-4 bg-green-500 text-white rounded hover:bg-green-700"
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export const RedButton = ({ text, onClick, type }) => {
  return (
    <button
      className="cursor-pointer px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400"
      onClick={onClick}
      type={type}
    >
      {text}
    </button>
  );
};
export const BlueButton = ({ text, onClick, type }) => {
  return (
    <button
      className="cursor-pointer px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
      onClick={onClick}
      type={type}
    >
      {text}
    </button>
  );
};

export const GrayButton = ({ text, onClick, type, className }) => {
  return (
    <button
      className={`cursor-pointer py-2 px-4 bg-gray-500 text-white rounded hover:bg-gray-700 ${className}`}
      onClick={onClick}
      type={type}
    >
      {text}
    </button>
  );
};
