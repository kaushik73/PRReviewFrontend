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
    <div className="h-screen">
      <UserProvider>
        <Routing
          stories={stories}
          handleFormSubmit={handleFormSubmit}
          handleFillReviewerForm={handleFillReviewerForm}
        />
      </UserProvider>
    </div>
  );
}

export default App;
