import StickyApp from "./components/stickyNote";
import AddNotes from "./components/addnote/addNotes";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ViewNotes from "./components/viewnote/viewNotes";
import Settings from "./components/settings/settings";
import ErrorPage from "./components/spareparts/errorPage";
import '../src/components/style.css'
function App() {
  return (
    <div className="App">
       <BrowserRouter basename="/stickynote">
        <Routes>
            <Route index element={<StickyApp/>} />
            <Route path="/add" element={<AddNotes/>} />
            <Route exact path="/view/:id" element={<ViewNotes/>} />
            <Route exact path="/settings" element={<Settings/>} />
            <Route path="*" element={<ErrorPage/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;