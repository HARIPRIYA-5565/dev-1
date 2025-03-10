import React, { useState } from "react";
import Sidebar from "./sidebar"// Import Sidebar component
import HomePage from "./homePage"; // Import Home Dashboard component
import Driverdashboard from "./driverDashboard" // Import Driver Dashboard component
import DriverDetailDashboard from "./driverDetailDashboard"; // Import Driver Detail Dashboard component

// Main App component
const App = () => {
  // State to track which dashboard to show
  const [activePage, setActivePage] = useState('Home'); // Default to Home Dashboard

  // Function to handle sidebar item clicks
  const handleSidebarClick = (page) => {
    setActivePage(page); // Update activePage state based on sidebar item clicked
  };

  // Conditionally render based on activePage state
  const renderContent = () => {
    switch (activePage) {
      case 'Home':
        return <HomePage />;
      case 'Driver':
        return <Driverdashboard />;
      case 'Payouts':
        return <DriverDetailDashboard />;
      default:
        return <HomePage />; // Default fallback to Home if no matching case
    }
  };

  return (
    <div className="flex">
      <Sidebar onClick={handleSidebarClick} /> {/* Pass handleSidebarClick function to Sidebar */}
      <div className="flex-1 p-6">
        {renderContent()} {/* Render the selected dashboard */}
      </div>
    </div>
  );
};

export default App;
