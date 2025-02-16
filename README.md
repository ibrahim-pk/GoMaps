# react-go-map 📍

A React component for embedding **Go Maps** with location search and markers.

## 🚀 Installation

To use the `react-go-map` component, follow the installation steps:

1. **Install the package via npm:**
   ```sh
   npm install react-go-map

#Add the GoMapsLocation component to your React app by importing it:

import GoMapsLocation from "react-go-map";

⚠️ Important Notes
API Key Required: You need a valid API key from Go Maps Pro to use this package. Get an API key here.
Responsive Design: The component is fully responsive, but ensure that the parent container has a defined height for the map to display correctly.
Browser Support: This component works best on modern browsers that support JavaScript and Google Maps APIs.
Customization: You can customize the map's initial location and zoom level by passing props to the component.
📌 Usage
Basic Example
Here’s how you can use the component with a default location:

import React from "react";
import GoMapsLocation from "react-go-map";

function App() {
  return (
    <div>
      <h1>Go Maps Demo</h1>
      <GoMapsLocation apiKey="YOUR_API_KEY" initialLocation={{ lat: 23.8103, lng: 90.4125 }} />
    </div>
  );
}

export default App;


#Customizing the Location
You can dynamically set the location by passing the initialLocation prop:


<GoMapsLocation
  apiKey="YOUR_API_KEY"
  initialLocation={{ lat: 40.7128, lng: -74.0060 }} // Example: New York City
/>

Adding Location Search
The component supports a search box to find locations by address or place name:

<GoMapsLocation
  apiKey="YOUR_API_KEY"
  initialLocation={{ lat: 34.0522, lng: -118.2437 }} // Los Angeles
/>
🎯 Features
Location Search using Google Maps Autocomplete.
Dynamic Location Updates based on user input.
Marker Display for the selected location.
Fully responsive and mobile-friendly.
📝 Changelog
[1.1.0] - 2025-02-16
Added dynamic location search feature with autocomplete.
Improved map marker animations.
[1.0.0] - 2025-02-12
Initial release of react-go-map component.
👨‍💻 Developed By
Md Ibrahim Pk
🎓 University: NSTU
📧 Contact: ibrahimpk220@gmail.com

---

This README.md now includes:

- **Installation** steps.
- **Important Notes** for users.
- **Usage** examples with dynamic location and search features.
- **Features** overview.
- **Changelog** to track updates.
- Your **developer information** (name, university, and contact).

This is a complete, ready-to-use **README.md** for your package! Let me know if you need further adjustments. 😄






