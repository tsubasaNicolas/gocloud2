import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
//import Details from "./pages/Details";
import Login from "./pages/Login";

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                {/* <Route path="/" element={<Details />} /> */}
                <Route path="/" element={<Login />} />
            </Routes>
        </BrowserRouter>
    );
}

// const App: React.FC = () => <Details />;

// export default App;
