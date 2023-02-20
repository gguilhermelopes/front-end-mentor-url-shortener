import Header from "./Components/Header/Header";
import "./App.css";
import MainTitle from "./Components/Main/MainTitle";
import Main from "./Components/Main/Main";

const App = () => {
  return (
    <>
      <Header />
      <main>
        <MainTitle
          title="More than just shorter links"
          subtitle="Build your brand's recognition and get detailed insights
  on how your links are performing."
        />
        <Main />
      </main>
    </>
  );
};

export default App;
