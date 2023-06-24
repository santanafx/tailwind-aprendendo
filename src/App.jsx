import "./App.css";
import { Spotify } from "./components/Spotify";
import { Testimonial } from "./components/Testimonial";

function App() {
  return (
    <div>
      {/* <Testimonial />
      <button className="block shadow bg-green-600 text-white text-center p-4 mt-5 rounded-xl mx-auto hover:bg-green-500">Clicar Aqui</button> */}
      <Spotify />
    </div>
  );
}

export default App;
