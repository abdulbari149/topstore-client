import React from "react";
import { ToastContainer } from "react-toastify";
import { AppRoutes } from "./routes/AppRoutes";
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <React.Fragment>
      <AppRoutes />;
      <ToastContainer autoClose={3000} />
    </React.Fragment>
  );
}

export default App;
