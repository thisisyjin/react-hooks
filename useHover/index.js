import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

const App = () => {
  const title = useClick(() =>{ console.log('hello')});
  return (
    <div>
      <h1 ref={title}>Title</h1>
    </div>
  );
};

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
