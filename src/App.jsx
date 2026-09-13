import { useState } from "react";
import MainLayout from "./layouts/MainLayout";
import Loader from "./components/Loader";

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading && (
        <Loader onComplete={() => setLoading(false)} />
      )}

      <MainLayout />
    </>
  );
}

export default App;