// Flashcard deck for the Oregon CDL Class A general knowledge test.
// Front = prompt; back = answer. Concise on purpose — flashcards are for recall drilling,
// not deep reading (use the study guide for that).
// Used by flashcards.js via window.CDL_FLASHCARDS.

window.CDL_FLASHCARDS = [
  // --- Driving Safely ---
  { section: "Driving Safely", front: "BAC limit for a CDL holder operating a CMV?", back: "0.04% — half the regular driver limit." },
  { section: "Driving Safely", front: "How far ahead should you look while driving?", back: "12–15 seconds (about a quarter mile at highway speed)." },
  { section: "Driving Safely", front: "Following-distance rule up to 40 mph?", back: "1 second per 10 ft of vehicle length. Over 40 mph, add 1 extra second." },
  { section: "Driving Safely", front: "Total stopping distance at 55 mph on dry pavement?", back: "About 419 ft — roughly the length of a football field." },
  { section: "Driving Safely", front: "Headlight rule near oncoming traffic?", back: "Switch to low beams within 500 ft of an oncoming vehicle (and within 500 ft when following)." },
  { section: "Driving Safely", front: "Reflective triangle placement on a 2-lane road?", back: "10 ft behind, 100 ft behind, and 100 ft ahead of the vehicle." },
  { section: "Driving Safely", front: "Drive wheels start to skid — what do you do first?", back: "Take your foot off the accelerator and push in the clutch. Then steer where you want to go and counter-steer to avoid over-correcting." },
  { section: "Driving Safely", front: "Best lights to use in fog?", back: "Low beams. High beams reflect back and reduce visibility." },
  { section: "Driving Safely", front: "What does GOAL stand for?", back: "Get Out And Look — used before backing or whenever clearance is uncertain." },
  { section: "Driving Safely", front: "Brakes fail going downhill — best option?", back: "Use an escape ramp if available. Don't hesitate." },

  // --- Transporting Cargo Safely ---
  { section: "Cargo", front: "Who is responsible for the cargo on a CMV?", back: "The driver — for inspecting, securing, and re-checking cargo throughout the trip." },
  { section: "Cargo", front: "Cargo re-inspection schedule?", back: "Within the first 50 miles, then every 150 mi or 3 hrs (whichever first), and any time your duty status changes." },
  { section: "Cargo", front: "Minimum number of tiedowns?", back: "At least 2, AND at least 1 tiedown for every 10 ft of cargo." },
  { section: "Cargo", front: "What does GVWR mean?", back: "Gross Vehicle Weight Rating — max total weight (vehicle + load) per the manufacturer." },
  { section: "Cargo", front: "What does GAWR mean?", back: "Gross Axle Weight Rating — max weight any single axle can carry." },
  { section: "Cargo", front: "Why load heavy cargo low?", back: "Keeps the center of gravity low — reduces rollover risk in turns and curves." },
  { section: "Cargo", front: "What is liquid surge?", back: "Forward and backward movement of liquid in a partially filled tanker. Can push the truck during stops." },

  // --- Air Brakes ---
  { section: "Air Brakes", front: "Low-air-pressure warning must come on at what pressure?", back: "Before pressure drops below 60 psi." },
  { section: "Air Brakes", front: "Spring (parking) brakes activate automatically at what pressure?", back: "Between 20 and 45 psi." },
  { section: "Air Brakes", front: "Governor cut-in / cut-out pressures?", back: "Cut-in around 100 psi; cut-out around 125 psi." },
  { section: "Air Brakes", front: "Buildup time in a dual air system, 85 → 100 psi?", back: "45 seconds or less." },
  { section: "Air Brakes", front: "Static air leak limit (engine off, brakes released)?", back: "Single vehicle: max 2 psi/min. Combination: max 3 psi/min." },
  { section: "Air Brakes", front: "Applied air leak limit (full pedal)?", back: "Single: max 3 psi/min. Combination: max 4 psi/min." },
  { section: "Air Brakes", front: "How often should you drain the air tanks?", back: "Daily — water and oil collect in them." },
  { section: "Air Brakes", front: "Stab braking: when do you use it?", back: "Only in emergencies, only on vehicles WITHOUT ABS. Apply fully, release when wheels lock, reapply." },
  { section: "Air Brakes", front: "What is brake lag?", back: "About a half-second delay before air brakes apply. Build it into your following distance." },
  { section: "Air Brakes", front: "When should you NOT set the parking brake?", back: "If brakes are very hot (long downhill) or wet and could freeze." },

  // --- Combination Vehicles ---
  { section: "Combination", front: "Air line color codes between tractor and trailer?", back: "RED = emergency (supply). BLUE = service." },
  { section: "Combination", front: "What is off-tracking?", back: "Trailer wheels follow a tighter path than the tractor through a turn — that's why you swing wide on right turns." },
  { section: "Combination", front: "What is rearward amplification (\"crack-the-whip\")?", back: "A small steering input at the tractor becomes a big movement at the rear trailer. Worst with doubles/triples — steer gently." },
  { section: "Combination", front: "Does ABS shorten your stopping distance?", back: "No. ABS keeps wheels from locking so you can keep steering. Brake normally — let ABS do its job." },
  { section: "Combination", front: "Correct trailer height for coupling?", back: "Just low enough that the tractor raises it slightly as the tractor backs under." },
  { section: "Combination", front: "How do you test the fifth-wheel lock after coupling?", back: "Tug test: with trailer brakes set, gently pull forward in low gear. Then visually inspect the locking jaws around the kingpin." },

  // --- Vehicle Inspection ---
  { section: "Inspection", front: "Minimum tire tread depth, steering axle?", back: "4/32 inch." },
  { section: "Inspection", front: "Minimum tire tread depth, all other axles?", back: "2/32 inch." },
  { section: "Inspection", front: "Required emergency equipment?", back: "Charged fire extinguisher, three reflective triangles, and spare fuses (unless circuit breakers)." },
  { section: "Inspection", front: "Required fire extinguisher class?", back: "B:C (or A:B:C)." },
  { section: "Inspection", front: "How many steps in the standard pre-trip inspection method?", back: "Seven." },
  { section: "Inspection", front: "Audible air leak from the brakes — drive or fix?", back: "Don't drive. Fix the leak first." },

  // --- Basic Control ---
  { section: "Basic Control", front: "How often to check mirrors while driving?", back: "Every 5–8 seconds." },
  { section: "Basic Control", front: "Best direction to back when possible?", back: "Toward the driver's side — better visibility." },
  { section: "Basic Control", front: "Hazmat / bus stop distance at a railroad crossing?", back: "15 to 50 feet before the nearest rail." },
  { section: "Basic Control", front: "When should you adjust your mirrors?", back: "Before you start driving — never while the vehicle is moving." },
  { section: "Basic Control", front: "Passing score on the Oregon CDL knowledge test?", back: "80% (40 of 50 questions)." },
];
