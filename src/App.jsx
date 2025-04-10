import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Login from './components/Login';
import Home from './components/Home';
import Result from './components/Result';
import ContactUs from './components/ContactUs';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfService from './components/TermsOfService';
import AboutUs from './components/AboutUs';
import Chatbot from './components/Chatbot';

const App = () => {
  try {
    return (
      <Router>
        <Routes>
          {/* Login Page */}
          <Route path="/" element={<Login />} />

          {/* Home Page */}
          <Route
            path="/home"
            element={
              <div className="min-h-screen flex flex-col">
                <Header />
                <main className="flex-grow container mx-auto px-4 py-6">
                  <Home />
                </main>
                <Footer />
                <Chatbot />
              </div>
            }
          />

          {/* Result Page */}
          <Route
            path="/result"
            element={
              <div className="min-h-screen flex flex-col">
                <Header />
                <main className="flex-grow container mx-auto px-4 py-6">
                  <Result />
                </main>
                <Footer />
                <Chatbot />
              </div>
            }
          />

          {/* Contact Us Page */}
          <Route
            path="/contact"
            element={
              <div className="min-h-screen flex flex-col">
                <Header />
                <main className="flex-grow container mx-auto px-4 py-6">
                  <ContactUs />
                </main>
                <Footer />
                <Chatbot />
              </div>
            }
          />

          {/* Privacy Policy Page */}
          <Route
            path="/privacy-policy"
            element={
              <div className="min-h-screen flex flex-col">
                <Header />
                <main className="flex-grow container mx-auto px-4 py-6">
                  <PrivacyPolicy />
                </main>
                <Footer />
                <Chatbot />
              </div>
            }
          />

          {/* Terms of Service Page */}
          <Route
            path="/terms-of-service"
            element={
              <div className="min-h-screen flex flex-col">
                <Header />
                <main className="flex-grow container mx-auto px-4 py-6">
                  <TermsOfService />
                </main>
                <Footer />
                <Chatbot />
              </div>
            }
          />

          {/* About Us Page */}
          <Route
            path="/about"
            element={
              <div className="min-h-screen flex flex-col">
                <Header />
                <main className="flex-grow container mx-auto px-4 py-6">
                  <AboutUs />
                </main>
                <Footer />
                <Chatbot />
              </div>
            }
          />
        </Routes>
      </Router>
    );
  } catch (error) {
    console.error("Error loading the app:", error);
    return <div>Error loading the app</div>;
  }
};

export default App;