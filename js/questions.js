// Oregon CDL Class A — practice question bank.
// Facts paraphrased from the Oregon / AAMVA CDL manual.
// Each question has exactly 4 choices. `answer` is the index (0–3) of the correct choice.
// Used by practice.js via window.CDL_QUESTIONS.

window.CDL_QUESTIONS = [
  // --- 1. Driving Safely ---
  {
    id: 1,
    section: "Driving Safely",
    question: "What is the legal BAC limit for a commercial driver operating a commercial motor vehicle?",
    choices: ["0.02%", "0.04%", "0.08%", "0.10%"],
    answer: 1,
    explanation: "The BAC limit for CDL holders operating a CMV is 0.04% — half the limit for non-commercial drivers."
  },
  {
    id: 2,
    section: "Driving Safely",
    question: "How far ahead should you normally look while driving a commercial vehicle?",
    choices: ["1–2 seconds", "4–6 seconds", "12–15 seconds", "30 seconds"],
    answer: 2,
    explanation: "Look 12–15 seconds ahead — about a quarter mile at highway speed — so you have time to react."
  },
  {
    id: 3,
    section: "Driving Safely",
    question: "What is the minimum following distance rule at speeds up to 40 mph for a commercial vehicle?",
    choices: [
      "1 second per 10 feet of vehicle length",
      "2 seconds regardless of length",
      "4 seconds regardless of length",
      "1 second per 5 feet of vehicle length"
    ],
    answer: 0,
    explanation: "Allow 1 second for every 10 feet of vehicle length at speeds up to 40 mph. Over 40 mph, add 1 extra second."
  },
  {
    id: 4,
    section: "Driving Safely",
    question: "When driving in fog at night, which headlights should you use?",
    choices: ["High beams", "Low beams", "Parking lights only", "No lights; use 4-way flashers only"],
    answer: 1,
    explanation: "Use low beams in fog. High beams reflect back off the fog and reduce visibility."
  },
  {
    id: 5,
    section: "Driving Safely",
    question: "On a two-lane undivided road, where should you place your three reflective triangles after stopping?",
    choices: [
      "All three directly behind the vehicle",
      "10 ft behind, 100 ft behind, and 100 ft ahead of the vehicle",
      "All three 50 ft behind the vehicle",
      "One beside the vehicle, one 10 ft behind, one 200 ft behind"
    ],
    answer: 1,
    explanation: "On a two-way road, place triangles 10 ft, 100 ft, and 100 ft on the approach sides — so one is ahead and two behind."
  },
  {
    id: 6,
    section: "Driving Safely",
    question: "Your drive wheels begin to skid. What should you do first?",
    choices: [
      "Apply the brakes hard",
      "Take your foot off the accelerator and push in the clutch",
      "Steer hard in the opposite direction of the skid",
      "Shift to a higher gear"
    ],
    answer: 1,
    explanation: "Release the accelerator and push in the clutch to stop driving the wheels. Then steer in the direction you want to go and counter-steer to avoid over-correcting."
  },
  {
    id: 7,
    section: "Driving Safely",
    question: "Before descending a long, steep downgrade, you should:",
    choices: [
      "Shift into neutral to save fuel",
      "Select a safe speed and a low gear before starting down",
      "Rely on the service brakes the whole way",
      "Stay in top gear until the brakes begin to fade"
    ],
    answer: 1,
    explanation: "Select a safe speed and a low gear before starting down. Using a low gear lets the engine help brake and prevents overheating."
  },
  {
    id: 8,
    section: "Driving Safely",
    question: "You are driving a 60-ft combination at 55 mph. What is the minimum safe following distance?",
    choices: ["3 seconds", "5 seconds", "7 seconds", "10 seconds"],
    answer: 2,
    explanation: "1 second per 10 ft of length = 6 seconds, plus 1 extra second because speed is over 40 mph = 7 seconds."
  },
  {
    id: 9,
    section: "Driving Safely",
    question: "Backing a commercial vehicle is risky. When you must back up, you should:",
    choices: [
      "Back toward the blind (passenger) side so you don't hit oncoming traffic",
      "Back toward the driver's side whenever possible",
      "Rely on mirrors — never get out to look",
      "Back as fast as safely possible to get it over with"
    ],
    answer: 1,
    explanation: "Back toward the driver's side when you can — you can see that side better. Get out and look before backing (GOAL)."
  },
  {
    id: 10,
    section: "Driving Safely",
    question: "You must use low beam headlights within how many feet of oncoming vehicles?",
    choices: ["100 ft", "200 ft", "500 ft", "1,000 ft"],
    answer: 2,
    explanation: "Switch to low beams within 500 ft of oncoming traffic, and within 500 ft when following another vehicle."
  },
  {
    id: 11,
    section: "Driving Safely",
    question: "Which type of fire extinguisher is best for an electrical fire?",
    choices: ["Class A only", "Class B only", "Class C (or B:C)", "Water"],
    answer: 2,
    explanation: "Class A = ordinary combustibles, B = flammable liquids, C = electrical, D = metals. Commercial vehicles must carry B:C or A:B:C."
  },
  {
    id: 12,
    section: "Driving Safely",
    question: "If your brakes fail going down a steep grade, your best option is to:",
    choices: [
      "Stay on the road and pump the brakes",
      "Downshift to the lowest gear",
      "Use an escape ramp if available",
      "Turn off the engine to stall the truck"
    ],
    answer: 2,
    explanation: "Use an escape ramp — it's designed for that purpose. Don't hesitate; damage to the truck is preferable to a runaway."
  },

];
