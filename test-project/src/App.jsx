import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignIn from './signin';
import SignUp from './Signup';
import Home from './Home';
import CreateTrip from './CreateTrip';
import ActiveTrip from './ActiveTrips';
import PersonalTrips from './PersonalTrip';
import EditTrip from './EditTrip';
import Suggested from './suggested';
import TripDetail from './TripDetail';
import HelpCenter from './HelpCenter';
import EditProfile from './EditProfile';
import Notification from './Notification';
import LoggedNav from './LoggedNav';
import HomeNav from './HomeNav';
import SuggestionNav from './SuggestionNav';
import SideBar from './SideBar';
import Footer from './Footer';
import CloseTrip from './CloseTrip'
import PersonalTripDetail from './TripPersonalDetail';


const dummyTrip = {
  city: "Paris",
  destination: "France",
  startDate: "2025-08-01",
  endDate: "2025-08-10",
  description: "A wonderful trip to Paris.",
  email: "test@example.com",
  transportation: "Train",
  numberOfTravelers: 2,
  tripCost: 1500,
};
const PersonTrip = {
  city: "Babogaya",
  destination: "Ethiopia",
  startDate: "2025-08-01",
  endDate: "2025-08-10",
  description: "A wonderful trip to Babogaya.",
  email: "test@example.com",
  transportation: "Bus",
  numberOfTravelers: 2,
  tripCost: 1200,
};

const App = () => (
  <Router>
    <Routes>
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/Home" element={<Home />} />
      <Route path="/Create" element={<CreateTrip />} />
      <Route path="/Active-trip" element={<ActiveTrip />} />
      <Route path="/Personal-trip" element={<PersonalTrips />} />
      <Route path="/Edit-trip" element={<EditTrip />} />
      <Route path="/Suggested" element={<Suggested />} />
      <Route
        path="/Trip-detail"
        element={
          <TripDetail
            isOpen={true}
            onClose={() => {}}
            tripData={dummyTrip}
          />
        }
      />
      <Route path="/Help-center" element={<HelpCenter />} />
      <Route path="/Edit-Profile" element={<EditProfile />} />
      <Route path="/Notification" element={<Notification />} />
      <Route path="/Logged-nav" element={<LoggedNav />} />
      <Route path="/Home-nav" element={<HomeNav />} />
      <Route path="/Suggestion-nav" element={<SuggestionNav />} />
      <Route path="/SideBar" element={<SideBar />} />
      <Route path="/Footer" element={<Footer />} />
      <Route path="/Close-trip" element={<CloseTrip />} />
      <Route
        path="/Personal-Trip-detail"
        element={
          <PersonalTripDetail
            isOpen={true}
            onClose={() => {}}
            tripData={PersonTrip}
          />
        }
      />
      
      
      {/* Add other routes here */}
    </Routes>
  </Router>
);


export default App;
