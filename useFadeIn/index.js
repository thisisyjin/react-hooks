import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

const App = () => {
  const fadeInH1 = useFadeIn(2, 2);
  const fadeInP = useFadeIn(4, 6);
  return (
    <div>
      <h1 {...fadeInH1}>hello</h1>
      <p {...fadeInP}>lorem ipsum lalallala</p>
    </div>
  );
};

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
