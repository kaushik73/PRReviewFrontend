import { useState } from "react";
import Modal from "./Modal";
import { GreenButton, RedButton } from "./buttons";

//  Todo : focus on input , om enter press  - submit cloud click
const CloseButton = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const toggleModal = () => setIsModalOpen(!isModalOpen);

  const handleSubmit = () => {
    if (inputValue.trim() !== "") {
      alert(`Assigned value: ${inputValue}`);
      setInputValue("");
      toggleModal();
    } else {
      alert("Please enter a valid number.");
    }
  };

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
        />
      </Modal>
    </div>
  );
};

export default CloseButton;
