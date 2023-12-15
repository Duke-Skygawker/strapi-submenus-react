import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import Sidebar from "./Components/Sidebar";
import Submenu from "./Components/Submenu";

const App = () => {
  return (
    <main>
      <Navbar />
      <Sidebar />
      <Submenu />
      <Hero />
    </main>
  );
};
export default App;
