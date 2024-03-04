// Define facilities with their respective information
const facilities = {
    "john wooden center": {
        "activities": {
            "indoor sports (e.g., basketball)": {
                "fitnessgoalcategory": ["basketball", "overall-fitness", "sports-training", "cardio"],
                "energyconsumption": {"unit": "watts per hour", "value": "150-300"},
                "carbonfootprinestimate": {"unit": "kg CO2e per hour", "value": "0.15-0.3"},
                "availabletime": {
                    "monday": ["05:15", "21:30"],
                    "tuesday": ["05:15", "21:30"],
                    "wednesday": ["05:15", "21:30"],
                    "thursday": ["05:15", "21:30"],
                    "friday": ["05:15", "22:00"],
                    "saturday": ["08:00", "21:30"],
                    "sunday": ["08:00", "21:30"],
                },
            },
            "cardiovascular equipment (e.g., treadmill)": {
                "fitnessgoalcategory": ["cardio", "weight-loss", "overall-fitness", "cardio"],
                "energyconsumption": {"unit": "watts per hour", "value": "150-300"},
                "carbonfootprinestimate": {"unit": "kg CO2e per hour", "value": "0.15-0.3"},
                "availabletime": {
                    "monday": ["05:15", "21:30"],
                    "tuesday": ["05:15", "21:30"],
                    "wednesday": ["05:15", "21:30"],
                    "thursday": ["05:15", "21:30"],
                    "friday": ["05:15", "22:00"],
                    "saturday": ["08:00", "21:30"],
                    "sunday": ["08:00", "21:30"],
                },
            },
            "strength training equipment (e.g., weightlifting machines)": {
                "fitnessgoalcategory": ["overall-fitness", "muscle-gain"],
                "energyconsumption": {"unit": "watts per hour", "value": "50"},
                "carbonfootprinestimate": {"unit": "kg CO2e per hour", "value": "0.1-0.2"},
                "availabletime": {
                    "monday": ["05:15", "21:30"],
                    "tuesday": ["05:15", "21:30"],
                    "wednesday": ["05:15", "21:30"],
                    "thursday": ["05:15", "21:30"],
                    "friday": ["05:15", "22:00"],
                    "saturday": ["08:00", "21:30"],
                    "sunday": ["08:00", "21:30"],
                },
            },
            "gymnastics": {
                "fitnessgoalcategory": ["overall-fitness", "flexibility", "strength-training"],
                "energyconsumption": {"unit": "watts per hour", "value": "100-200"},
                "carbonfootprinestimate": {"unit": "kg CO2e per hour", "value": "0.1-0.2"},
                "availabletime": {
                    "monday – friday": ["12:00", "21:30"],
                    "saturday/sunday": ["12:00", "21:30"],
                },
            },
            "basketball": {
                "fitnessgoalcategory": ["basketball", "overall-fitness", "sports-training", "cardio"],
                "energyconsumption": {"unit": "watts per hour", "value": "150-300"},
                "carbonfootprinestimate": {"unit": "kg CO2e per hour", "value": "0.15-0.3"},
                "availabletime": {
                    "monday – friday": ["08:00", "21:30"],
                    "saturday/sunday": ["09:00", "21:30"],
                },
            },
            "rock climbing": {
                "fitnessgoalcategory": ["strength-training", "adventure"],
                "energyconsumption": {"unit": "watts per hour", "value": "200-400"},
                "carbonfootprinestimate": {"unit": "kg CO2e per hour", "value": "0.2-0.4"},
                "availabletime": {
                    "monday – friday": ["10:00", "21:30"],
                    "saturday/sunday": ["10:00", "21:30"],
                },
            },
            // Add information for other activities
        },
    },
    "bruinfit": {
        "activities": {
            "cardiovascular equipment (e.g., treadmill)": {
                "fitnessgoalcategory": ["weight-loss", "overall-fitness", "cardio"],
                "energyconsumption": {"unit": "watts per hour", "value": "150-300"},
                "carbonfootprinestimate": {"unit": "kg CO2e per hour", "value": "0.15-0.3"},
                "availabletime": {
                    "monday": ["06:00", "21:30"],
                    "tuesday": ["06:00", "21:30"],
                    "wednesday": ["06:00", "21:30"],
                    "thursday": ["06:00", "21:30"],
                    "friday": ["06:00", "21:00"],
                    "saturday": ["09:00", "18:00"],
                    "sunday": ["09:00", "23:00"],
                },
            },
            "strength training equipment (e.g., weightlifting machines)": {
                "fitnessgoalcategory": ["overall-fitness", "muscle-gain"],
                "energyconsumption": {"unit": "watts per hour", "value": "50"},
                "carbonfootprinestimate": {"unit": "kg CO2e per hour", "value": "0.1-0.2"},
                "availabletime": {
                    "monday": ["06:00", "21:30"],
                    "tuesday": ["06:00", "21:30"],
                    "wednesday": ["06:00", "21:30"],
                    "thursday": ["06:00", "21:30"],
                    "friday": ["06:00", "21:00"],
                    "saturday": ["09:00", "18:00"],
                    "sunday": ["09:00", "23:00"],
                },
            },
            // Add information for other activities
        },
    },
    "drake stadium track": {
        "activities": {
            "running or walking": {
                "fitnessgoalcategory": ["cardio", "sports-training", "weight-loss"],
                "energyconsumption": {"unit": "minimal"},
                "carbonfootprinestimate": {"unit": "kg CO2e per hour", "value": "0.001"},
                "availabletime": {
                    "monday": ["06:00", "10:00", "17:00", "22:00"],
                    "tuesday": ["06:00", "10:00", "17:00", "22:00"],
                    "wednesday": ["06:00", "10:00", "17:00", "22:00"],
                    "thursday": ["06:00", "10:00", "17:00", "22:00"],
                    "friday": ["06:00", "10:00", "17:00", "22:00"],
                    "saturday": ["09:00", "12:00"],
                    "sunday": ["09:00", "20:00"],
                },
            },
            // Add information for other activities
        },
    },
    "hitch basketball courts": {
        "activities": {
            "basketball": {
                "fitnessgoalcategory": ["basketball", "overall-fitness", "sports-training", "cardio"],
                "energyconsumption": {"unit": "watts per hour", "value": "150-300"},
                "carbonfootprinestimate": {"unit": "kg CO2e per hour", "value": "0.15-0.3"},
                "availabletime": {
                    "monday": ["08:00", "21:30"],
                    "tuesday": ["08:00", "21:30"],
                    "wednesday": ["08:00", "21:30"],
                    "thursday": ["08:00", "21:30"],
                    "friday": ["08:00", "21:30"],
                    "saturday": ["09:00", "21:30"],
                    "sunday": ["09:00", "21:30"],
                },
            },
            // Add information for other activities
        },
    },
    "intramural field": {
        "activities": {
            "soccer": {
                "fitnessgoalcategory": ["cardio", "weight-loss"],
                "energyconsumption": {"unit": "minimal"},
                "carbonfootprinestimate": {"unit": "kg CO2e per hour", "value": "0.001"},
                "availabletime": {
                    "monday": ["10:00", "22:00"],
                    "tuesday": ["10:00", "22:00"],
                    "wednesday": ["10:00", "22:00"],
                    "thursday": ["10:00", "22:00"],
                    "friday": ["09:00", "22:00"],
                    "saturday": ["09:00", "20:00"],
                    "sunday": ["09:00", "22:00"],
                },
            },
            // Add information for other activities
        },
    },
    "los angeles tennis courts": {
        "activities": {
            "tennis": {
                "fitnessgoalcategory": ["cardio", "sports-training", "weight-loss"],
                "energyconsumption": {"unit": "minimal"},
                "carbonfootprinestimate": {"unit": "kg CO2e per hour", "value": "0.001"},
                "availabletime": {
                    "monday": ["17:00", "19:00"],
                    "tuesday": ["17:00", "19:00"],
                    "wednesday": ["17:00", "19:00"],
                    "thursday": ["17:00", "19:00"],
                    "friday": ["17:00", "19:00"],
                    "saturday": ["15:00", "22:00"],
                    "sunday": ["15:00", "22:00"],
                },
            },
            // Add information for other activities
        },
    },
    "sunset canyon recreation center": {
        "activities": {
            "sand volleyball": {
                "fitnessgoalcategory": ["cardio", "weight-loss"],
                "energyconsumption": {"unit": "minimal"},
                "carbonfootprinestimate": {"unit": "kg CO2e per hour", "value": "0"},
                "availabletime": {
                    "monday": ["06:00", "21:00"],
                    "tuesday": ["06:00", "21:00"],
                    "wednesday": ["06:00", "21:00"],
                    "thursday": ["06:00", "21:00"],
                    "friday": ["06:00", "21:00"],
                    "saturday": ["09:00", "18:00"],
                    "sunday": ["09:00", "23:00"],
                },
            },
            "swimming pool": {
                "fitnessgoalcategory": ["cardio", "weight-loss"],
                "energyconsumption": {"unit": "varies"},
                "carbonfootprinestimate": {"unit": "kg CO2e per hour", "value": "0.2-0.4"},
                "availabletime": {
                    "monday": ["06:00", "22:00"],
                    "tuesday": ["06:00", "22:00"],
                    "wednesday": ["06:00", "22:00"],
                    "thursday": ["06:00", "22:00"],
                    "friday": ["06:00", "22:00"],
                    "saturday": ["09:00", "18:00"],
                    "sunday": ["09:00", "23:00"],
                },
            },
            "tennis courts": {
                "fitnessgoalcategory": ["cardio", "weight-loss"],
                "energyconsumption": {"unit": "minimal"},
                "carbonfootprinestimate": {"unit": "kg CO2e per hour", "value": "0.001"},
                "availabletime": {
                    "monday": ["08:00", "19:00"],
                    "tuesday": ["08:00", "19:00"],
                    "wednesday": ["08:00", "19:00"],
                    "thursday": ["08:00", "19:00"],
                    "friday": ["08:00", "19:00"],
                    "saturday": ["09:00", "19:00"],
                    "sunday": ["09:00", "19:00"],
                },
            },
            // Add information for other activities
        },
    },
    // Add information for other facilities
};

// Export the facilities object
export default facilities;
