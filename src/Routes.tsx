import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AbsenceDashboard from "./pages/Absence-Dashboard";

export default function RouteManager() {
    return (
        <Router>
            <Routes>
                <Route element={<AbsenceDashboard />} path="/" />
            </Routes>
        </Router>
    );
}
