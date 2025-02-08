import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  Navigate,
} from "react-router-dom";
import ReviewerForm from "./ReviewerForm";
import LoginForm from "./LoginForm";
import ChangePasswordForm from "./ChangePasswordForm";
import StoryInitialData from "./StoryInitialData";
import StoryReviewersTable from "./StoryReviewersTable";
import { useState } from "react";

const Routing = ({ stories, handleFormSubmit, handleFillReviewerForm }) => {
  const [isLoginFormOpen, setIsLoginFormOpen] = useState(false);

  const openLoginForm = () => {
    setIsLoginFormOpen(!isLoginFormOpen);
  };

  return (
    <Router>
      <div className="min-h-screen p-6 bg-gray-50">
        {isLoginFormOpen && (
          <LoginForm
            isLoginFormOpen={isLoginFormOpen}
            setIsLoginFormOpen={setIsLoginFormOpen}
          />
        )}
        <header className="flex justify-between items-center mb-4 bg-slate-400 p-4 border-2 rounded-xl">
          <h1 className="text-2xl font-bold">
            <Link to="/story-reviewers-table">PR Review App</Link>
          </h1>
          <span
            onClick={openLoginForm}
            className="text-blue-600 cursor-pointer underline"
          >
            Login
          </span>
        </header>

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
};

export default Routing;
