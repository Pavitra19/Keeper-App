import React from "react";
import Header from "./Header";
import CreateArea from "./CreateArea";

import Note from "./Note";
import Footer from "./Footer";

function App() {
  return (
    <div>
      <Header />
      <CreateArea />
      <Note key={1} title="Note title" content="Note Content" />
      <Footer />
    </div>
  );
}

export default App;
