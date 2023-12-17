import Header from "./components/Header";
import style from "./app.module.css";
import Footer from "./components/Footer";
import RouterComponent from "./Router";

function App() {
  return (
    <div className={style.container}>
      <Header />
      <RouterComponent />
      <Footer />
    </div>
  );
}

export default App;
