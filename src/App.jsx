import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Practice from "./pages/practice";
import React, { useReducer } from "react";
import FolderDirectory from "./pages/folderDirectory";
import ScrollPagination from "./pages/scrollPagination";

export const CounterContext = React.createContext();

const initialState = {
  count: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "increament":
      return { ...state, count: state.count + action.diff };
    case "decreament":
      return { ...state, count: state.count - action.diff };
    case "reset":
      return { ...state, count: initialState.count };
  }
};
function App() {
  const [count, dispatch] = useReducer(reducer, initialState);
console.log(count);

  return (
    <CounterContext.Provider value={{ count: count, dispatch: dispatch }}>
       {/* {count?.count} */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/practice" element={<Practice />} />
          <Route path="/folder-directory" element={<FolderDirectory />} />
          <Route path="/scroll-pagination" element={<ScrollPagination />} />
        </Routes>
      </BrowserRouter>
    </CounterContext.Provider>
  );
}

export default App;
