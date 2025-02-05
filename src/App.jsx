// import AssigneeForm from "./components/AssigneeForm";
// import ReviewerForm from "./components/ReviewerForm";
// import { useState } from "react";
// import StoryReviewersForm from "./components/StoryReviewersForm";
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
//       <StoryReviewersForm onSubmit={handleFormSubmit} />
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

import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { useState } from "react";
import ReviewerForm from "./components/ReviewerForm";
import AssigneeForm from "./components/AssigneeForm";
import LoginForm from "./components/LoginForm";
import ChangePasswordForm from "./components/ChangePasswordForm";
import StoryReviewersForm from "./components/StoryReviewersForm";
import StoryReviewersTable from "./components/StoryReviewersTable";

function App() {
  const [stories, setStories] = useState([]);

  const handleFormSubmit = (storyData) => {
    setStories((prev) => [...prev, storyData]);
  };

  const handleFillReviewerForm = (reviewer) => {
    alert(`Fill reviewer form for ${reviewer}`);
  };

  return (
    <Router>
      <div className="min-h-screen p-6 bg-gray-50">
        <nav className="flex space-x-4 mb-4  bg-slate-400 p-4 border-2 rounded-xl">
          <Link to="/login" className="text-blue-600">
            Login
          </Link>
          <Link to="/change-password" className="text-blue-600">
            Change Password
          </Link>
          <Link to="/reviewer-form" className="text-blue-600">
            Reviewer Form
          </Link>
          {/* <Link to="/assignee-form" className="text-blue-600">
            Assignee Form
          </Link> */}
          <Link to="/story-reviewers-form" className="text-blue-600">
            Story Inital Data
          </Link>
          <Link to="/story-reviewers-table" className="text-blue-600">
            Story Reviewers Table
          </Link>
        </nav>

        <Routes>
          <Route path="/login" element={<LoginForm />} />
          <Route path="/change-password" element={<ChangePasswordForm />} />
          <Route path="/reviewer-form" element={<ReviewerForm />} />
          <Route path="/assignee-form" element={<AssigneeForm />} />
          <Route
            path="/story-reviewers-form"
            element={<StoryReviewersForm onSubmit={handleFormSubmit} />}
          />
          <Route
            path="/story-reviewers-table"
            element={
              <StoryReviewersTable
                data={stories}
                onFillReviewerForm={handleFillReviewerForm}
              />
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
