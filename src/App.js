
import { unstable_HistoryRouter as HistoryRouter, BrowserRouter, Routes, Route } from "react-router-dom";
import IndexPage from "./components/IndexPage";
import Navbar from "./components/Navbar";
import DisplayStream from "./components/streams/DisplayStream";
import StreamCreate from "./components/streams/StreamCreate";
import StreamDelete from "./components/streams/StreamDelete";
import StreamEdit from "./components/streams/StreamEdit";
import StreamShow from "./components/streams/StreamShow";
import history from "./history";

function App() {
  return (
    <div className="App">
      <HistoryRouter history={history}>
        <Routes >
          <Route path="/" element={<Navbar />}>
            <Route index element={<IndexPage />} />
            <Route path="streams/new" element={<StreamCreate />} />
            <Route path="streams/edit/:id" element={<StreamEdit />} /> 
            <Route path="streams/delete/:id" element={<StreamDelete />} />
            <Route path="streams/show" element={<StreamShow />} />
            <Route path="streams/display/:id" element={<DisplayStream />} />

          </Route>
        </Routes>
      </HistoryRouter>

    </div>
  );
}

export default App;