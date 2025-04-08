import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Login from './components/Login';
import Home from './components/Home';
import Result from './components/Result';
<<<<<<< HEAD
=======
import ContactUs from './components/ContactUs';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfService from './components/TermsOfService';
>>>>>>> bba91e1 (Linking the Login and Contact Us page to Excel Sheet and Improving the overall CSS)

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Root path - shows Login page first */}
        <Route path="/" element={<Login />} />
<<<<<<< HEAD
        
        {/* Home route */}
        <Route path="/home" element={
          <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-grow container mx-auto px-4 py-6">
              <Home />
            </main>
            <Footer />
          </div>
        } />
        
        {/* Result route */}
        <Route path="/result" element={
          <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-grow container mx-auto px-4 py-6">
              <Result />
            </main>
            <Footer />
          </div>
        } />
=======

        {/* Home route */}
        <Route
          path="/home"
          element={
            <div className="min-h-screen flex flex-col">
              <Header />
              <main className="flex-grow container mx-auto px-4 py-6">
                <Home />
              </main>
              <Footer />
            </div>
          }
        />

        {/* Result route */}
        <Route
          path="/result"
          element={
            <div className="min-h-screen flex flex-col">
              <Header />
              <main className="flex-grow container mx-auto px-4 py-6">
                <Result />
              </main>
              <Footer />
            </div>
          }
        />

        {/* Contact Us route */}
        <Route
          path="/contact"
          element={
            <div className="min-h-screen flex flex-col">
              <Header />
              <main className="flex-grow container mx-auto px-4 py-6">
                <ContactUs />
              </main>
              <Footer />
            </div>
          }
        />

        {/* Privacy Policy route */}
        <Route
          path="/privacy-policy"
          element={
            <div className="min-h-screen flex flex-col">
              <Header />
              <main className="flex-grow container mx-auto px-4 py-6">
                <PrivacyPolicy />
              </main>
              <Footer />
            </div>
          }
        />

        {/* Terms of Service route */}
        <Route
          path="/terms-of-service"
          element={
            <div className="min-h-screen flex flex-col">
              <Header />
              <main className="flex-grow container mx-auto px-4 py-6">
                <TermsOfService />
              </main>
              <Footer />
            </div>
          }
        />
>>>>>>> bba91e1 (Linking the Login and Contact Us page to Excel Sheet and Improving the overall CSS)
      </Routes>
    </Router>
  );
};

<<<<<<< HEAD
export default App;
=======
export default App;
>>>>>>> bba91e1 (Linking the Login and Contact Us page to Excel Sheet and Improving the overall CSS)
