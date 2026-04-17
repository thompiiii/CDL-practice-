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

  // --- 2. Transporting Cargo Safely ---
  {
    id: 13,
    section: "Transporting Cargo Safely",
    question: "Who is responsible for making sure cargo is properly loaded and secured on a commercial vehicle?",
    choices: [
      "The shipper only",
      "The driver",
      "The loading dock crew only",
      "The consignee receiving the load"
    ],
    answer: 1,
    explanation: "The driver is responsible for inspecting cargo, recognizing overloads and poor weight distribution, and making sure it stays secured during the trip."
  },
  {
    id: 14,
    section: "Transporting Cargo Safely",
    question: "How soon after starting a trip must you inspect your cargo and its securement?",
    choices: [
      "Within the first 25 miles",
      "Within the first 50 miles",
      "Within the first 100 miles",
      "Only at the destination"
    ],
    answer: 1,
    explanation: "Inspect cargo within the first 50 miles, then again every 150 miles or 3 hours (whichever comes first), and any time you change duty status."
  },
  {
    id: 15,
    section: "Transporting Cargo Safely",
    question: "What is the minimum number of tiedowns required to secure cargo, regardless of length?",
    choices: ["1", "2", "3", "4"],
    answer: 1,
    explanation: "At least 2 tiedowns are required, and you must use at least one tiedown for every 10 feet of cargo."
  },
  {
    id: 16,
    section: "Transporting Cargo Safely",
    question: "GVWR stands for:",
    choices: [
      "Gross Vehicle Width Rating",
      "Gross Vehicle Weight Rating",
      "Graded Vehicle Weight Ratio",
      "Governed Vehicle Wheel Rating"
    ],
    answer: 1,
    explanation: "GVWR = Gross Vehicle Weight Rating: the maximum total weight (vehicle + load) specified by the manufacturer."
  },
  {
    id: 17,
    section: "Transporting Cargo Safely",
    question: "Placing heavy cargo high on the trailer mainly increases the risk of:",
    choices: [
      "Brake fade",
      "Rollover in turns and curves",
      "Tire under-inflation",
      "Hydroplaning"
    ],
    answer: 1,
    explanation: "A high center of gravity makes the vehicle much more likely to roll over, especially on curves and exit ramps. Load heavy items low."
  },
  {
    id: 18,
    section: "Transporting Cargo Safely",
    question: "You are hauling a sealed trailer load. What is still your responsibility?",
    choices: [
      "Breaking the seal to inspect individual pieces",
      "Making sure the vehicle is not overloaded and its weight is within legal limits",
      "Only delivering it on time",
      "Re-packing any loose items"
    ],
    answer: 1,
    explanation: "You cannot inspect a sealed load's contents, but you are still responsible for not exceeding weight limits and for the external condition of the vehicle."
  },
  {
    id: 19,
    section: "Transporting Cargo Safely",
    question: "What is the main purpose of a header board (\"headache rack\")?",
    choices: [
      "To improve aerodynamics",
      "To protect the driver from cargo that might shift forward in a crash",
      "To mount extra lights",
      "To carry spare tires"
    ],
    answer: 1,
    explanation: "A header board, or headache rack, blocks forward movement of cargo so it doesn't crush the cab in a sudden stop or crash."
  },
  {
    id: 20,
    section: "Transporting Cargo Safely",
    question: "A partially filled liquid tanker is harder to control because of:",
    choices: [
      "Brake lag",
      "Liquid surge",
      "Off-tracking",
      "Rearward amplification"
    ],
    answer: 1,
    explanation: "Liquid surge — the forward and backward movement of the load — can push the vehicle in the direction of the wave, especially when stopping."
  },

];
