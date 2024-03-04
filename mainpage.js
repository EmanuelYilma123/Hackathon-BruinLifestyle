// Updated JavaScript Code for Fitness Application


document.addEventListener("DOMContentLoaded", function() {
    setupEventListeners(); // Setup all event listeners after the DOM is loaded
    toggleInitialVisibility(); // Set initial visibility for specific sections based on checkbox state
  });
   // Setup Event Listeners
  function setupEventListeners() {
    const sportCheckbox = document.getElementsByName("specific-sport-training")[0];
    sportCheckbox.addEventListener("change", toggleSportOptions);
     const daysOfWeek = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
    daysOfWeek.forEach(day => {
      const checkbox = document.getElementsByName(day)[0];
      checkbox.addEventListener("change", () => toggleTimeInput(day));
    });
     const recommendationButton = document.querySelector("#signup-link-holder button");
    recommendationButton.addEventListener("click", getRecommendation);
  }
   // Toggle visibility based on checkbox states
  function toggleInitialVisibility() {
    toggleSportOptions(); // For specific sports options
    const daysOfWeek = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
    daysOfWeek.forEach(toggleTimeInput); // For day-specific time inputs
  }
   var text = "";
   function getRecommendation() {
    const fitnessGoals = getSelectedCheckboxes("fitness-goals-form");
    const exerciseTime = parseInt(document.getElementById("exercise-time").value);
    const availability = getAvailability();

    // Generate a workout recommendation based on the inputs
    let recommendation = "Here is your personalized workout plan.\n\n";

    // Fitness Goals
    recommendation += " Let's start with your fitness goals.\n";
    if (fitnessGoals.length === 0) {
        recommendation += " It appears you haven't selected any specific fitness goals.\n";
    } else {
        fitnessGoals.forEach(goal => {
            recommendation += ` For ${goal}\n, you can `;
        });
    }
    recommendation += "\n";

    // Exercise Time
    recommendation += `Exercise Time Per Day: ${exerciseTime} minutes\n\n`;

    // Availability
    recommendation += "Availability:\n";
    let availableDays = 0;
    for (const day in availability) {
        if (availability[day]) {
            recommendation += ` - ${day}: ${availability[day].from} to ${availability[day].to}\n`;
            availableDays++;
        }
    }

    if (availableDays === 0) {
        recommendation = " - No available days selected for exercise\n";
    }

    

    // Generate Workout Plan based on different scenarios
    recommendation += "\nYour Workout Plan:\n";

    // Show facilities based on fitness goals
    const matchingFacilities = getMatchingFacilities(fitnessGoals);
    //const saveEnergyFacilities = getEnergyUse(fitnessGoals);
    if (matchingFacilities.length > 0) {
        recommendation += "Facilities that match your fitness goals:\n";
        matchingFacilities.forEach(facility => {
            recommendation += `- ${facility}\n`;
        });

        //recommendation += "How much you will save if you choose alternatives:\n";
        //saveEnergyFacilities.forEach(facility => {
          //recommendation += `- ${facility}\n`;
        //})
    }

    

   
  displayRecommendation(recommendation, matchingFacilities );
}

function getMatchingFacilities(fitnessGoals) {
  const facilitiesDictionary = {
    "weight-loss": ["John Wooden Treadmill : Average Energy Consumption: 50 watts per hour, Carbon Footprint Estimate: 0.1-0.2 kg CO2e per hour", "Running Outside: Average Energy Consumption: 0, Carbon Footprint Estimate: 0 ","Drake Stadium Track"],
    "muscle-gain": ["John Wooden Strength Training Equipment: 150-300 watts per hour", "Bruin Fit Training Equipment: 0.15-0.3 kg CO2e per hour"],
    "cardio": ["John Wooden Treadmill: Average Energy Consumption: 50 watts per hour, Carbon Footprint Estimate: 0.1-0.2 kg CO2e per hour","Running Outside: 0 energy consumption 0 carbon footprint", "Drake Stadium Track: 0 energy consumption, Carbon Footprint Estimate:  0.001< kg CO2e per hour" , "basketball: 150-300 watts per hour", "tennis: 150-300 watts per hour", "swimming:  range of 200-400 watts per hour per person., 0.2 - 0.4 kg CO2e per hour per person"],
    "volleyball": ["sand volleyball at Sunset Canyon Recreation Center: energy consumption 0 Carbon footprint estimate: 0.001 <kg CO2e perhour"],
    "swimming": ["swimming at Sunset Canyon Recreation Center: 200-400 watts per hour per person, 0.2-0.4 kg CO2e per hour per person"],
    "tennis": ["tennis at Sunset Canyon Recreation Center: 150-300 watts per hour", "tennis at Sycamore Tennis Courts: 150-300 watts per hour", "Tennis at UCLA courts: 150-300 watts per hour" ],
    "rock-climbing": ["rock-climbing at John Wooden: Average Energy Consumption: 50 watts per hour Carbon Footprint Estimate: 0.1-0.2 kg CO2e per hour."],
    "soccer": ["soccer at Intramural Field: 0.001 kg CO2e per hour"],
    "gymnastics": ["gymnastics at John Wooden: 150-300 watts per hour"],
    "basketball": ["basketball at Hitch: Minimal Equipment-Related Energy Consumption: 0, Carbon Footprint Estimate:  <0.001 kg CO2e per hour", "basketball at John Wooden: 150 watts per hour"],
  };


  let matchingFacilities = [];

  fitnessGoals.forEach((goal) => {
    matchingFacilities = matchingFacilities.concat(facilitiesDictionary[goal] || []);
  });

  return [...new Set(matchingFacilities)]; // Remove duplicates
}

/*function getAvailableTimes(fitnessGoals, facilitiesDictionary) {
  const availableTimes = {};  // Initialize availableTimes as an empty object

  const activityTimeSlots = {
    "John Wooden Treadmill": {
      "Monday-Thursday": ["05:15 AM", "01:00 AM"],
      "Friday": ["05:15 AM", "10:00 PM"],
      "Saturday": ["08:00 AM", "09:00 PM"],
      "Sunday": ["08:00 AM", "09:00 PM"],
    },
    "John Wooden Strength Training Equipment": {
      "Monday-Thursday": ["06:00 AM", "01:00 AM"],
      "Friday": ["06:00 AM", "09:00 PM"],
      "Saturday": ["09:00 AM", "06:00 PM"],
      "Sunday": ["09:00 AM", "11:00 PM"],
    },
    "rock-climbing at John Wooden": {
      "Monday-Thursday": ["06:00 AM", "01:00 AM"],
      "Friday": ["06:00 AM", "09:00 PM"],
      "Saturday": ["09:00 AM", "06:00 PM"],
      "Sunday": ["09:00 AM", "11:00 PM"],
    },
    "gymnastics at John Wooden": {
      "Monday-Thursday": ["06:00 AM", "01:00 AM"],
      "Friday": ["06:00 AM", "09:00 PM"],
      "Saturday": ["09:00 AM", "06:00 PM"],
      "Sunday": ["09:00 AM", "11:00 PM"],
    },
    "basketball at John Wooden": {
      "Monday-Thursday": ["06:00 AM", "01:00 AM"],
      "Friday": ["06:00 AM", "09:00 PM"],
      "Saturday": ["09:00 AM", "06:00 PM"],
      "Sunday": ["09:00 AM", "11:00 PM"],
    },
    "Running Outside": {
      "anytime": ["anytime"],
    },
    "Drake Stadium Track": {
      "Monday-Thursday": ["06:00 AM", "10:00 AM", "05:00 PM", "10:00 PM"],
      "Friday": ["06:00 AM", "10:00 AM", "05:00 PM", "08:00 PM"],
      "Saturday": ["09:00 AM", "12:00 PM"],
      "Sunday": ["09:00 AM", "08:00 PM"],
    },
    "Bruin Fit Training Equipment": {
      "Monday-Thursday": ["06:00 AM", "01:00 AM"],
      "Friday": ["06:00 AM", "09:00 PM"],
      "Saturday": ["09:00 AM", "06:00 PM"],
      "Sunday": ["09:00 AM", "11:00 PM"],
    },
    "sand volleyball at Sunset Canyon Recreation Center": {
      "Monday-Thursday": ["06:00 AM", "01:00 AM"],
      "Friday": ["06:00 AM", "09:00 PM"],
      "Saturday": ["09:00 AM", "06:00 PM"],
      "Sunday": ["09:00 AM", "11:00 PM"],
    },
    "swimming at Sunset Canyon Recreation Center": {
      "Monday-Thursday": ["06:00 AM", "01:00 AM"],
      "Friday": ["06:00 AM", "09:00 PM"],
      "Saturday": ["09:00 AM", "06:00 PM"],
      "Sunday": ["09:00 AM", "11:00 PM"],
    },
    "tennis at Sunset Canyon Recreation Center": {
      "Monday-Thursday": ["06:00 AM", "01:00 AM"],
      "Friday": ["06:00 AM", "09:00 PM"],
      "Saturday": ["09:00 AM", "06:00 PM"],
      "Sunday": ["09:00 AM", "11:00 PM"],
    },
    "Sycamore Tennis Courts": {
      "Monday-Friday": ["08:00 AM", "07:00 PM"],
      "Saturday-Sunday": ["09:00 AM", "07:00 PM"],
    },
    "Tennis at UCLA COURTS": {
      "Monday-Friday": ["05:00 PM", "07:00 PM"],
      "Saturday-Sunday": ["03:00 PM", "10:00 PM"],
    },
    "soccer at intramural field": {
      "Monday-Thursday": ["10:00 AM", "10:00 PM"],
      "Friday": ["09:00 AM", "10:00 PM"],
      "Saturday": ["09:00 AM", "08:00 PM"],
      "Sunday": ["09:00 AM", "10:00 PM"],
    },
    "basketball at Hitch": {
      "Monday-Friday": ["08:00 AM", "09:30 PM"],
      "Saturday-Sunday": ["09:00 AM", "09:30 PM"],
    },
    // Add entries for other activities if needed...
  };
  
  // Continue adding entries for other activities based on the provided time slots
  

    // Iterate through fitness goals
    fitnessGoals.forEach((goal) => {
      // Check if the goal is present in facilitiesDictionary
      if (facilitiesDictionary.hasOwnProperty(goal)) {
        // Iterate through activities for the current goal
        facilitiesDictionary[goal].forEach((activity) => {
          // Check if the activity is present in activityTimeSlots
          if (activityTimeSlots.hasOwnProperty(activity)) {
            // Add the activity and its available times to the result
            availableTimes[activity] = activityTimeSlots[activity];
          }
        });
      }
    });
  
    return availableTimes;  // Return the availableTimes object
  } */

// Get available times based on fitness goals

/*
function getEnergyUse(fitnessGoals) {
  const energyUseDictionary = {
    "weight-loss": ["150-300 watts per hour", "0.15-0.3 kg CO2e per hour"],
    "muscle-gain": ["50 watts per hour", "0.1-0.2 kg CO2e per hour"],
    "cardio": ["150-300 watts per hour", "0.15-0.3 kg CO2e per hour"],
    "volleyball": ["Nothing"],
    "swimming": ["0.2-0.4 kg CO2e per hour", "0.001"],
    "tennis": ["Nothing"],
    "rock-climbing": ["0.2-0.4 kg CO2e per hour"],
    "soccer": ["0.001 kg CO2e per hour"],
    "gymnastics": ["100-200 watts per hour"],
    "basketball": ["150-300 watts per hour"],
  };

  let saveEnergyFacilities = [];

  fitnessGoals.forEach((goal) => {
    saveEnergyFacilities = matchingFacilities.concat(energyUseDictionary[goal] || []);
  });

  return [...new Set(saveEnergyFacilities)];
}
 */
 // Sample function to get selected checkboxes - Modify as needed
 function getSelectedCheckboxes(formId) {
    const checkboxes = document.querySelectorAll(`#${formId} input[type="checkbox"]:checked`);
    return Array.from(checkboxes).map(checkbox => checkbox.name); // Assuming the 'name' attribute is a valid identifier for the value
 }
 
 
 // Sample function to get availability - Modify as needed
 function getAvailability() {
    const daysOfWeek = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
    return daysOfWeek.reduce((availability, day) => {
        const checkbox = document.getElementsByName(day)[0];
        if (checkbox.checked) {
            const from = document.querySelector(`input[name="${day}-from"]`).value;
            const to = document.querySelector(`input[name="${day}-to"]`).value;
            availability[day] = { from, to };
        }
        return availability;
    }, {});
 }
 
 
   function getSelectedCheckboxes(formId) {
    const checkboxes = document.querySelectorAll(`#${formId} input[type="checkbox"]:checked`);
    return Array.from(checkboxes).map(checkbox => checkbox.name); // Assuming the 'name' attribute is a valid identifier for the value
  }
   function getAvailability() {
    const daysOfWeek = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
    return daysOfWeek.reduce((availability, day) => {
      const checkbox = document.getElementsByName(day)[0];
      if (checkbox.checked) {
        const from = document.querySelector(`input[name="${day}-from"]`).value;
        const to = document.querySelector(`input[name="${day}-to"]`).value;
        availability[day] = { from, to };
      }
      return availability;
    }, {});
  }
  function displayRecommendation(recommendation, matchingFacilities) {
    let resultElement = document.querySelector("#recommendation-result");
    if (!resultElement) {
      resultElement = document.createElement("div");
      resultElement.id = "recommendation-result";
      document.getElementById("signup-link-holder").insertAdjacentElement("afterend", resultElement);
    }
    
    resultElement.innerHTML = `<h2>Recommendation:</h2><p>${recommendation}</p>`;
  
    if (matchingFacilities.length > 0) {
      resultElement.innerHTML += `<p>The facilities that match your fitness goals are: ${matchingFacilities.join(", ")}</p>`;
    } else {
      resultElement.innerHTML += "<p>No facilities match your fitness goals.</p>";
    }
  }
   function toggleTimeInput(day) {
    const timeInput = document.getElementById(`${day}-times`);
    timeInput.style.display = document.getElementsByName(day)[0].checked ? "block" : "none";
  }
   function toggleSportOptions() {
    const sportOptions = document.getElementById("sport-options");
    const isChecked = document.getElementsByName("specific-sport-training")[0].checked;
    sportOptions.style.display = isChecked ? "block" : "none";
  }
 