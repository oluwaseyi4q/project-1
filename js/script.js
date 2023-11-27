function updateTicker() {
    const tickerContent = document.getElementById("ticker-content");
    const date = new Date();
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    };
    const formattedDate = date.toLocaleDateString("en-US", options);
  
    // Function to handle success in fetching geolocation
    function success(position) {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      tickerContent.textContent = `Current Date/Time: ${formattedDate} | Location: Latitude ${latitude}, Longitude ${longitude}`;
    }
  
    // Function to handle errors in fetching geolocation
    function error() {
      tickerContent.textContent = `Current Date/Time: ${formattedDate} | Unable to retrieve location`;
    }
  
    // Check for geolocation support
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(success, error);
    } else {
      tickerContent.textContent = `Geolocation is not supported by your browser`;
    }
  }
  
  // Update the ticker content every second
  setInterval(updateTicker, 1000);
  updateTicker(); // Call it immediately to display initial content
  