// import React from "react";
// import { BlueButton, GrayButton } from "./buttons";

// // Reusable Modal Component
// const Modal = ({
//   isOpen,
//   toggleModal,
//   onSubmit,
//   title,
//   width = "max-w-95vw",
//   height = "max-h-95vh",
//   children,
// }) => {
//   return (
//     <div
//       className={`fixed z-10 top-0 left-0  w-full h-full bg-black bg-opacity-50 flex items-center justify-center transition-opacity ${
//         isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
//       }`}
//     >
//       <div
//         className={`bg-white rounded-xl shadow-lg p-6 m-4 ${width} ${height} `}
//       >
//         <h2 className="text-xl font-bold mb-4 text-center">{title}</h2>
//         {children}
//         <div className="flex justify-end mt-4">
//           <GrayButton text="Close" onClick={toggleModal} className={"mr-2"} />

//           <BlueButton text="Submit" type={"Submit"} onClick={onSubmit} />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Modal;

import React from "react";
import { BlueButton, GrayButton } from "./buttons";

// Reusable Modal Component
const Modal = ({
  isOpen,
  toggleModal,
  onSubmit,
  title,
  width = "max-w-95vw",
  height = "max-h-95vh",
  children,
}) => {
  return (
    <div
      className={`fixed z-10 top-0 left-0 w-full h-full flex items-center justify-center transition-opacity ${
        isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
      style={{ backdropFilter: "blur(20px)" }}
    >
      <div
        className={`bg-white rounded-xl shadow-lg p-6 m-4 ${width} ${height}`}
      >
        <h2 className="text-xl font-bold mb-4 text-center">{title}</h2>
        {children}
        <div className="flex justify-end mt-4">
          <GrayButton text="Close" onClick={toggleModal} className={"mr-2"} />
          <BlueButton text="Submit" type={"Submit"} onClick={onSubmit} />
        </div>
      </div>
    </div>
  );
};

export default Modal;
