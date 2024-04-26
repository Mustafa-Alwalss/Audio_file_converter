import React from "react";
import Header from "./components/Header/Header";
import FormCom from "./components/Form/FormComp";
import Footer from "./components/Footer/Footer";

const App: React.FC = () => {
  return (
    <div
      style={{
        height: "100%",
      }}
    >
      <Header />
      <FormCom />
      <Footer />
    </div>
  );
};

export default App;
