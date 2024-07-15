import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
  return (
    <main className="flex items-center justify-center h-screen w-screen bg-accent/20">
      <Navbar />
      <div className="p-4 w-full h-full overflow-y-auto overflow-x-hidden">
        <Outlet />
      </div>
    </main>
  );
}

export default App;
