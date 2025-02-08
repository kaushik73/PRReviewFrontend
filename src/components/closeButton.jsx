import { useState, useEffect, useRef } from "react";
import Modal from "./Modal";
import { RedButton } from "./buttons";

const CloseButton = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const inputRef = useRef(null);

  const toggleModal = () => setIsModalOpen(!isModalOpen);

  const handleSubmit = () => {
    if (inputValue.trim() !== "" && inputValue > 0) {
      alert(`Assigned value: ${inputValue}`);
      setInputValue("");
      toggleModal();
    } else {
      alert("Please enter a valid sprint number.");
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter" && isModalOpen) {
      handleSubmit();
    }
  };

  useEffect(() => {
    if (isModalOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isModalOpen]);

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isModalOpen, inputValue]);

  return (
    <div className="p-0">
      <RedButton text="Close Story" onClick={toggleModal} />
      <Modal
        isOpen={isModalOpen}
        toggleModal={toggleModal}
        onSubmit={handleSubmit}
        title="Sprint Number"
        width="w-100"
        height="h-55"
      >
        <label className="block font-medium text-gray-700 mb-2">
          Enter story closing sprint:
        </label>
        <input
          type="number"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="w-full p-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
          ref={inputRef}
        />
      </Modal>
    </div>
  );
};

export default CloseButton;
