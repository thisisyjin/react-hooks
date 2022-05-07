import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

const App = () => {
    const titleUpdater = useTitle("Loading...");
    setTimeout(() => titleUpdater("Home"), 5000);
  
    return <div>hi</div>;
  };

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
