import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  Navigate,
} from "react-router-dom";
import ReviewerForm from "./ReviewerForm";
import AssigneeForm from "./AssigneeForm";
import LoginForm from "./LoginForm";
import ChangePasswordForm from "./ChangePasswordForm";
import StoryInitialData from "./StoryInitialData";
import StoryReviewersTable from "./StoryReviewersTable";

function Routing({ stories, handleFormSubmit, handleFillReviewerForm }) {
  return (
    <Router>
      <div className="min-h-screen p-6 bg-gray-50">
        <header className="flex justify-between items-center mb-4 bg-slate-400 p-4 border-2 rounded-xl">
          <h1 className="text-2xl font-bold">PR Review App</h1>
          <Link to="/login" className="text-blue-600">
            Login
          </Link>
        </header>

        {/* <nav className="flex space-x-4 mb-4 bg-slate-400 p-4 border-2 rounded-xl">
          <Link to="/story-reviewers-table" className="text-blue-600">
            Story Reviewers Table
          </Link>
        </nav> */}

        {/* Routes */}
        <Routes>
          <Route path="/login" element={<LoginForm />} />
          <Route path="/change-password" element={<ChangePasswordForm />} />
          <Route path="/reviewer-form" element={<ReviewerForm />} />
          <Route
            path="/story-initial-data"
            element={<StoryInitialData onSubmit={handleFormSubmit} />}
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
          <Route path="/" element={<Navigate to="/story-reviewers-table" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default Routing;
