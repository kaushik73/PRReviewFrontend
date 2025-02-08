// import AssigneeForm from "./components/AssigneeForm";
// import ReviewerForm from "./components/ReviewerForm";
// import { useState } from "react";
// import StoryInitialData from "./components/StoryInitialData";
// import StoryReviewersTable from "./components/StoryReviewersTable";

// const App = () => {
//   const [stories, setStories] = useState([]);
//   const [formType, setFormType] = useState("Assignee");

//   const handleFormSubmit = (storyData) => {
//     setStories((prev) => [...prev, storyData]);
//   };

//   const handleFillReviewerForm = (reviewer) => {
//     alert(`Fill reviewer form for ${reviewer}`);
//   };

//   return (
//     <div className="p-6">
//       <StoryInitialData onSubmit={handleFormSubmit} />
//       <div className="mt-6">
//         <StoryReviewersTable
//           data={stories}
//           onFillReviewerForm={handleFillReviewerForm}
//         />
//       </div>
//       <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-4">
//         <h1 className="text-2xl font-bold mb-6">
//           PR Review - {formType} Form{" "}
//         </h1>
//         <button
//           onClick={() =>
//             setFormType((prev) =>
//               prev === "Assignee" ? "Reviewer" : "Assignee"
//             )
//           }
//           className="cursor-pointer mb-6 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
//         >
//           Switch to {formType === "Assignee" ? "Reviewer" : "Assignee"}
//         </button>

//         {formType === "Assignee" ? <AssigneeForm /> : <ReviewerForm />}
//       </div>{" "}
//     </div>
//   );
// };

// export default App;

// App.js
import { useState } from "react";
import Routing from "./components/Routing";
import { UserProvider } from "./context/userContext";

function App() {
  const [stories, setStories] = useState([]);

  const handleFormSubmit = (storyData) => {
    setStories((prev) => [...prev, storyData]);
  };

  const handleFillReviewerForm = (reviewer) => {
    alert(`Fill reviewer form for ${reviewer}`);
  };

  return (
    <UserProvider>
      <Routing
        stories={stories}
        handleFormSubmit={handleFormSubmit}
        handleFillReviewerForm={handleFillReviewerForm}
      />
    </UserProvider>
  );
}

export default App;
