import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { KSABusinessTravel } from "@/app/components/KSABusinessTravel";

export default function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route path="/" element={<KSABusinessTravel />} />
        <Route path="ksa-business-setup" element={<KSABusinessTravel />} />
        <Route path="*" element={<Navigate replace to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}
