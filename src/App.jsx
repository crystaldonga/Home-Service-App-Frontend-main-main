import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { CookiesProvider, useCookies } from "react-cookie"; // ✅ Added
import Header from "./components/layout/Header";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Contact from "./pages/ContactUs";
import Footer from "./components/layout/Footer";
import AboutUs from "./pages/Aboutus";
import Services from "./pages/Services";
import { ToastContainer } from "react-toastify";
<<<<<<< HEAD

import AddServiceForm from "./components/services/AddServiceForm"
import ViewService from "./components/services/ViewService"
import ProviderDetails from "./components/services/ProviderDetails"
import  ProviderProfile  from "./components/services/ProviderProfile";
=======
import UpdateService from "./components/services/UpdateService";
import AddServiceForm from "./components/services/AddServiceForm";
import ViewService from "./components/services/ViewService";
import ProviderDetails from "./components/services/ProviderDetails";
import ProviderProfile from "./components/services/ProviderProfile";
>>>>>>> a46e343357c35832d1216f0d119589e8f432de23
import UserProfile from "./components/User/UserProfile";
import UserDetailsForm from "./components/User/UserDetailsForm";
import UpdateUserDetailsForm from "./components/User/UpdateUserDetailsForm";
import Me from "./components/User/Me";
import ProviderDetailsUpdate from "./components/services/ProviderDetailsUpdate";

// ✅ Move this to a custom hook or utils later
const getUserRole = () => {
  const token = document.cookie
    .split("; ")
    .find(row => row.startsWith("authToken="))
    ?.split("=")[1];

  if (!token) return null;

  try {
    const tokenPayload = JSON.parse(atob(token.split(".")[1]));
    console.log("tokenPayload role", tokenPayload.role);
    return tokenPayload.role;
  } catch (error) {
    console.error("Error decoding token:", error);
    return null;
  }
};

const isAuthenticated = () => {
  return document.cookie.includes("authToken=");
};

const isProvider = () => {
  return isAuthenticated() && getUserRole() === "PROVIDER";
};

// Protected route
const ProviderProtectedRoute = ({ children }) => {
  if (!isProvider()) {
    return <Navigate to="/login" />;
  }
  return children;
};

const AppRoutes = () => (
  <>
    <ToastContainer />
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route
        path="/dashboard"
        element={
          <ProviderProtectedRoute>
            <Dashboard />
          </ProviderProtectedRoute>
        }
      />
      <Route path="/contact" element={<Contact />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/services" element={<Services />} />
      <Route path="/add-service" element={<AddServiceForm />} />
      <Route path="/update-service" element={<UpdateService />} />
      <Route path="/view-services" element={<ViewService />} />
      <Route path="/provider-details/register" element={<ProviderDetails />} />
      <Route path="/provider-profile" element={<ProviderProfile />} />
      <Route path="/user-profile" element={<UserProfile />} />
      <Route path="/user-details" element={<UserDetailsForm />} />
      <Route path="/user-profile-update" element={<UpdateUserDetailsForm />} />
      <Route path="/me" element={<Me />} />
      <Route path="/provider-profile-update" element={<ProviderDetailsUpdate />} />
    </Routes>
    <Footer />
  </>
);

const App = () => {
  return (
<<<<<<< HEAD
    <Router>
      <ToastContainer /> 
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/dashboard"
          element={
            <ProviderProtectedRoute>
              <Dashboard />
            </ProviderProtectedRoute>
          }
        />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/add-service" element={<AddServiceForm/>} />
       
        <Route path="/view-services" element ={<ViewService/>} />
        <Route path="/provider-details/register" element ={<ProviderDetails/>} />
        <Route path="/provider-profile" element ={<ProviderProfile/>} />
        <Route path = "/user-profile" element={<UserProfile/>}/>
        <Route path="/user-details" element ={<UserDetailsForm/>} />    
        <Route path="/user-profile-update" element ={<UpdateUserDetailsForm/>} />    
        <Route path="/me" element ={<Me/>} />    
        <Route path="/provider-profile-update" element ={<ProviderDetailsUpdate/>} />    

      </Routes>
      <Footer />
    </Router>
=======
    <CookiesProvider> {/* ✅ Wrapped app here */}
      <Router>
        <AppRoutes />
      </Router>
    </CookiesProvider>
>>>>>>> a46e343357c35832d1216f0d119589e8f432de23
  );
};

export default App;
