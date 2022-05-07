import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

const App = () => {
  const deleteWorld = () => console.log("delete world!");
  const abort = () => console.log("Aborted");
  const confirmDelete = useConfirm("Are you sure?", deleteWorld, abort);
  
  return (
    <div>
      <button onClick={confirmDelete}>delete the world</button>
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

