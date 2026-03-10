import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import HomePage from "./pages/HomePage";
import OurModelPage from "./pages/OurModelPage";
import BrandsPage from "./pages/BrandsPage";
import WhyChinaPage from "./pages/WhyChinaPage";
import ResourcesPage from "./pages/ResourcesPage";
import ContactPage from "./pages/ContactPage";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";
import TermsOfServicePage from "./pages/TermsOfServicePage";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
