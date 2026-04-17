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

  // --- 3. Air Brakes ---
  {
    id: 21,
    section: "Air Brakes",
    question: "At what air pressure must the low-air-pressure warning device come on?",
    choices: [
      "Before pressure drops below 100 psi",
      "Before pressure drops below 80 psi",
      "Before pressure drops below 60 psi",
      "Before pressure drops below 20 psi"
    ],
    answer: 2,
    explanation: "The low-air-pressure warning must activate before pressure drops below 60 psi in the air tank."
  },
  {
    id: 22,
    section: "Air Brakes",
    question: "In a typical air brake system, the spring (parking) brakes will come on automatically when air pressure drops to:",
    choices: [
      "80–90 psi",
      "60–75 psi",
      "20–45 psi",
      "0–5 psi"
    ],
    answer: 2,
    explanation: "Spring brakes apply automatically when pressure falls into the 20–45 psi range, stopping the vehicle before brakes are lost entirely."
  },
  {
    id: 23,
    section: "Air Brakes",
    question: "What is the purpose of the governor in an air brake system?",
    choices: [
      "It controls how hard the brakes apply",
      "It controls when the air compressor pumps air into the tanks",
      "It limits vehicle top speed",
      "It adjusts trailer air pressure separately"
    ],
    answer: 1,
    explanation: "The governor controls the compressor, cutting it in around 100 psi and out around 125 psi so the tanks stay within a safe range."
  },
  {
    id: 24,
    section: "Air Brakes",
    question: "How often should air tanks be drained?",
    choices: [
      "Every week",
      "Every month",
      "Daily (end of each day of operation)",
      "Only during scheduled maintenance"
    ],
    answer: 2,
    explanation: "Drain air tanks daily. Water and compressor oil collect in them and can freeze or damage the system."
  },
  {
    id: 25,
    section: "Air Brakes",
    question: "During the static air leak test on a combination vehicle (engine off, brakes released, fully charged), maximum allowed pressure drop is:",
    choices: [
      "1 psi per minute",
      "2 psi per minute",
      "3 psi per minute",
      "5 psi per minute"
    ],
    answer: 2,
    explanation: "For a combination vehicle, leakage must not exceed 3 psi per minute. For a single vehicle, the limit is 2 psi per minute."
  },
  {
    id: 26,
    section: "Air Brakes",
    question: "In a dual air brake system, how long should it take to build pressure from 85 to 100 psi?",
    choices: [
      "45 seconds or less",
      "2 minutes or less",
      "5 minutes or less",
      "As long as the engine is at idle"
    ],
    answer: 0,
    explanation: "In a dual system, pressure should build from 85 to 100 psi in 45 seconds or less at normal operating engine speed."
  },
  {
    id: 27,
    section: "Air Brakes",
    question: "Which braking method is used only in an emergency when the vehicle does NOT have antilock brakes?",
    choices: [
      "Controlled (threshold) braking",
      "Stab braking",
      "Engine braking",
      "Pumping lightly"
    ],
    answer: 1,
    explanation: "Stab braking — apply the brakes fully, release when wheels lock, reapply — is an emergency technique for non-ABS vehicles."
  },
  {
    id: 28,
    section: "Air Brakes",
    question: "Air brakes have \"brake lag.\" About how long is the lag before the brakes actually apply?",
    choices: [
      "No lag — they apply instantly",
      "About one-half second",
      "About 2 seconds",
      "About 5 seconds"
    ],
    answer: 1,
    explanation: "Air brakes lag about half a second because the air has to travel through the lines. Build this into your following distance."
  },
  {
    id: 29,
    section: "Air Brakes",
    question: "Before driving a vehicle with a dual air brake system, air pressure in both systems should be at least:",
    choices: [
      "60 psi",
      "80 psi",
      "100 psi",
      "125 psi"
    ],
    answer: 2,
    explanation: "Let pressure build up to at least 100 psi in both systems before driving."
  },
  {
    id: 30,
    section: "Air Brakes",
    question: "You should NOT set the parking brake when:",
    choices: [
      "The vehicle is parked on level ground",
      "The brakes are very hot, or wet and about to freeze",
      "You are leaving the vehicle unattended",
      "You are stopped for a rest break"
    ],
    answer: 1,
    explanation: "Don't set the parking brake if the brakes are very hot (from a long downhill) or if they are wet and could freeze — damage can result."
  },
  {
    id: 31,
    section: "Air Brakes",
    question: "What does the supply pressure gauge show?",
    choices: [
      "Pressure being applied to the service brakes",
      "Air pressure in the storage tanks (the reservoirs)",
      "Tire pressure",
      "Engine oil pressure"
    ],
    answer: 1,
    explanation: "The supply (or reservoir) pressure gauge shows the air pressure in the tanks. The application gauge shows how much pressure you are applying with the brake pedal."
  },
  {
    id: 32,
    section: "Air Brakes",
    question: "Brake drums overheating because of continuous brake application on a long downgrade is called:",
    choices: [
      "Brake lag",
      "Brake fade",
      "Brake surge",
      "Brake drag"
    ],
    answer: 1,
    explanation: "Brake fade is loss of braking effectiveness caused by overheating. Use a low gear and light, steady pressure rather than \"fanning\" the brakes."
  },

  // --- 4. Combination Vehicles ---
  {
    id: 33,
    section: "Combination Vehicles",
    question: "The tendency of a trailer's wheels to follow a shorter path than the tractor's wheels during a turn is called:",
    choices: [
      "Rearward amplification",
      "Off-tracking",
      "Jackknifing",
      "Oversteer"
    ],
    answer: 1,
    explanation: "Off-tracking — the trailer wheels cut inside the tractor's path — is why you must swing wide when making tight right turns."
  },
  {
    id: 34,
    section: "Combination Vehicles",
    question: "\"Rearward amplification\" is most dangerous because:",
    choices: [
      "It makes the brake pedal feel softer",
      "A small steering input at the tractor becomes a much larger movement at the rear trailer, risking rollover",
      "It shortens stopping distance",
      "It overloads the front axle"
    ],
    answer: 1,
    explanation: "Rearward amplification — the \"crack-the-whip\" effect — means sudden steering gets amplified at the trailer. Steer gently, especially with doubles or triples."
  },
  {
    id: 35,
    section: "Combination Vehicles",
    question: "Antilock brakes (ABS) on your combination vehicle:",
    choices: [
      "Shorten stopping distance",
      "Help you keep steering control during hard braking",
      "Replace normal service brakes",
      "Let you brake harder on ice without slowing down"
    ],
    answer: 1,
    explanation: "ABS keeps wheels from locking up, preserving steering control. It does NOT shorten stopping distance — brake normally and let ABS do its job."
  },
  {
    id: 36,
    section: "Combination Vehicles",
    question: "When coupling a tractor to a trailer, the correct trailer height is:",
    choices: [
      "High enough that the tractor slides under with no contact",
      "Low enough that the tractor will raise the trailer slightly as it backs under",
      "At the same height as the fifth wheel, exactly",
      "Height doesn't matter"
    ],
    answer: 1,
    explanation: "The trailer should be just low enough that the tractor raises it a bit as the tractor backs under. Too high and the kingpin can miss the jaws."
  },
  {
    id: 37,
    section: "Combination Vehicles",
    question: "The two air lines between tractor and trailer are:",
    choices: [
      "Red = service, Blue = emergency",
      "Red = emergency, Blue = service",
      "Red = supply, Green = return",
      "Yellow = primary, Black = secondary"
    ],
    answer: 1,
    explanation: "Red is the emergency (supply) line; blue is the service line that applies the trailer brakes when you use the pedal."
  },
  {
    id: 38,
    section: "Combination Vehicles",
    question: "After coupling, how do you test that the fifth wheel is locked onto the kingpin?",
    choices: [
      "Raise the landing gear fully and listen for a click",
      "Pull forward gently against the locked trailer brakes (tug test)",
      "Honk the horn three times",
      "Check only that the air lines are connected"
    ],
    answer: 1,
    explanation: "With the trailer brakes set, put the tractor in low gear and pull gently forward. The coupling should hold. Then visually inspect the locking jaws under the trailer."
  },
  {
    id: 39,
    section: "Combination Vehicles",
    question: "Before uncoupling a loaded trailer, you should:",
    choices: [
      "Disconnect the air lines before lowering the landing gear",
      "Lower the landing gear until it just touches the ground, then add turns for a loaded trailer",
      "Lower the landing gear as fast as possible",
      "Pull forward before lowering anything"
    ],
    answer: 1,
    explanation: "Lower the landing gear until it firmly contacts the ground. For a loaded trailer, crank a few extra turns so the legs support the weight before the tractor pulls away."
  },
  {
    id: 40,
    section: "Combination Vehicles",
    question: "When making a right turn in a combination vehicle, you should:",
    choices: [
      "Swing into the left lane first so you can make a tighter turn",
      "Turn wide as you complete the turn, keeping the rear of the vehicle close to the curb",
      "Cross the center line before starting the turn",
      "Make the turn fast so the trailer can't catch up"
    ],
    answer: 1,
    explanation: "Turn wide as you complete the turn — keep the rear close to the curb so cars can't pass you on the right, then swing wide enough that the trailer clears the corner."
  },

  // --- 5. Vehicle Inspection ---
  {
    id: 41,
    section: "Vehicle Inspection",
    question: "What is the most important reason to inspect your vehicle?",
    choices: [
      "It is a company policy",
      "Safety — for you and other road users",
      "To make a good impression on dispatchers",
      "To keep the paint clean"
    ],
    answer: 1,
    explanation: "Safety is the main reason: defects cause crashes and breakdowns. Inspection is also required by federal and state regulations."
  },
  {
    id: 42,
    section: "Vehicle Inspection",
    question: "What is the minimum legal tread depth on a steering (front) axle tire?",
    choices: [
      "1/32 inch",
      "2/32 inch",
      "4/32 inch",
      "6/32 inch"
    ],
    answer: 2,
    explanation: "Steering axle tires must have at least 4/32\" tread. All other tires must have at least 2/32\"."
  },
  {
    id: 43,
    section: "Vehicle Inspection",
    question: "Which item is NOT required emergency equipment in a commercial vehicle?",
    choices: [
      "A charged fire extinguisher",
      "Three reflective triangles",
      "Spare electrical fuses (unless the vehicle has circuit breakers)",
      "A first-aid kit"
    ],
    answer: 3,
    explanation: "The required emergency equipment is: fire extinguisher, 3 reflective triangles, and spare fuses (if the vehicle uses them). A first-aid kit is good practice but not federally required."
  },
  {
    id: 44,
    section: "Vehicle Inspection",
    question: "Which is a sign of bad brake drums or shoes that should put the vehicle out of service?",
    choices: [
      "A small amount of brake dust on the wheel",
      "Cracks in the drum extending completely across the friction surface",
      "Light rust on the exterior of the drum",
      "A slightly shiny appearance on the drum"
    ],
    answer: 1,
    explanation: "A crack that goes all the way across the friction surface of a drum is a serious defect and will put the vehicle out of service."
  },
  {
    id: 45,
    section: "Vehicle Inspection",
    question: "When during a trip are you required to inspect your vehicle?",
    choices: [
      "Only before the trip starts",
      "Before the trip, during the trip, and after the trip",
      "Only after the trip",
      "Only when the engine warning light comes on"
    ],
    answer: 1,
    explanation: "You must do a pre-trip inspection, monitor the vehicle en-route, and complete a post-trip inspection with a written DVIR listing any defects."
  },
  {
    id: 46,
    section: "Vehicle Inspection",
    question: "During your pre-trip, you find an audible air leak from the brake system. You should:",
    choices: [
      "Ignore it if pressure still builds",
      "Drive carefully until you reach a shop",
      "Not drive — fix the leak first",
      "Tape the leak and continue"
    ],
    answer: 2,
    explanation: "An audible air leak is a serious defect. Don't drive the vehicle until the leak is repaired — loss of air can disable the brakes."
  },
  {
    id: 47,
    section: "Vehicle Inspection",
    question: "What gauges or indicators should you monitor while driving?",
    choices: [
      "Speedometer only",
      "Speedometer, fuel, oil pressure, coolant temperature, and air pressure (if equipped)",
      "Only the fuel gauge",
      "None — just focus on the road"
    ],
    answer: 1,
    explanation: "Scan your instrument panel regularly: speedometer, fuel, oil pressure, coolant temp, voltmeter/ammeter, and (for air brakes) air pressure."
  },

  // --- 6. Basic Vehicle Control & Skills ---
  {
    id: 48,
    section: "Basic Vehicle Control",
    question: "\"GOAL\" stands for:",
    choices: [
      "Gauge, Observe, Adjust, Log",
      "Get Out And Look",
      "Go On At Low-speed",
      "Good Order At Landing"
    ],
    answer: 1,
    explanation: "GOAL — Get Out And Look — reminds drivers to step out and physically check behind and around the vehicle before backing or in any tight situation."
  },
  {
    id: 49,
    section: "Basic Vehicle Control",
    question: "How often should you check your mirrors while driving?",
    choices: [
      "Only when changing lanes",
      "Every 5 to 8 seconds",
      "Once a minute",
      "Only at intersections"
    ],
    answer: 1,
    explanation: "Scan your mirrors regularly — about every 5–8 seconds — and especially before any lane change, turn, or braking maneuver."
  },
  {
    id: 50,
    section: "Basic Vehicle Control",
    question: "In the CDL skills test, what counts as an \"encroachment\"?",
    choices: [
      "Stopping too early",
      "Crossing or touching a boundary line with the vehicle or a tire",
      "Failing to signal",
      "Honking the horn"
    ],
    answer: 1,
    explanation: "An encroachment is when any part of the vehicle crosses a boundary line during a maneuver. Examiners also score pull-ups and final position."
  },
  {
    id: 51,
    section: "Basic Vehicle Control",
    question: "If you're driving a bus or a vehicle carrying hazmat placards, how far before a railroad crossing must you stop?",
    choices: [
      "5 to 10 feet before the tracks",
      "15 to 50 feet before the tracks",
      "100 feet before the tracks",
      "You don't need to stop — just slow down"
    ],
    answer: 1,
    explanation: "Buses and placarded hazmat vehicles must stop 15 to 50 feet before the nearest rail, look and listen, then cross only when safe."
  },
  {
    id: 52,
    section: "Basic Vehicle Control",
    question: "When is the best time to adjust your mirrors?",
    choices: [
      "While driving, one at a time",
      "Before you start driving",
      "Only at the start of each week",
      "Only if someone else drove the truck"
    ],
    answer: 1,
    explanation: "Adjust mirrors before you start driving. Adjusting them while moving is distracting and unsafe."
  },

];
