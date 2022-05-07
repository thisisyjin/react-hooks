import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

const App = () => {
    const maxlength = (value) => value.length <= 10;
    const name = useInput("Mr.", maxlength);
  
    return (
        <div>
            <h1>Hello</h1>
            <input placeholder="Name" {...name} />
        </div>
    );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
