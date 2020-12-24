/*
--- Day 1: The Tyranny of the Rocket Equation ---
Santa has become stranded at the edge of the Solar System while delivering presents to other planets! To accurately calculate his position in space, safely align his warp drive, and return to Earth in time to save Christmas, he needs you to bring him measurements from fifty stars.

Collect stars by solving puzzles. Two puzzles will be made available on each day in the Advent calendar; the second puzzle is unlocked when you complete the first. Each puzzle grants one star. Good luck!

The Elves quickly load you into a spacecraft and prepare to launch.

At the first Go / No Go poll, every Elf is Go until the Fuel Counter-Upper. They haven't determined the amount of fuel required yet.

Fuel required to launch a given module is based on its mass. Specifically, to find the fuel required for a module, take its mass, divide by three, round down, and subtract 2.

For example:

For a mass of 12, divide by 3 and round down to get 4, then subtract 2 to get 2.
For a mass of 14, dividing by 3 and rounding down still yields 4, so the fuel required is also 2.
For a mass of 1969, the fuel required is 654.
For a mass of 100756, the fuel required is 33583.
The Fuel Counter-Upper needs to know the total fuel requirement. To find it, individually calculate the fuel needed for the mass of each module (your puzzle input), then add together all the fuel values.

What is the sum of the fuel requirements for all of the modules on your spacecraft?
*/

const moduleMasses = [
  60052,
  61005,
  114258,
  66223,
  114571,
  80949,
  129508,
  94463,
  134331,
  102634,
  148109,
  109532,
  60479,
  68048,
  71553,
  68053,
  51105,
  149024,
  138472,
  57246,
  85686,
  121267,
  144206,
  104420,
  149858,
  137795,
  121637,
  68877,
  51560,
  74506,
  83362,
  53806,
  132871,
  100629,
  76102,
  103594,
  68425,
  54734,
  124930,
  120598,
  136375,
  146892,
  90876,
  131455,
  124377,
  125244,
  144563,
  107469,
  86940,
  132916,
  79789,
  136359,
  105127,
  82810,
  83751,
  107741,
  51677,
  113598,
  119741,
  105174,
  128151,
  82407,
  108461,
  50594,
  92897,
  146520,
  56176,
  68640,
  124300,
  88250,
  132105,
  89023,
  80532,
  120433,
  50015,
  84028,
  100491,
  53131,
  135920,
  108820,
  98932,
  109750,
  136854,
  126902,
  108231,
  109391,
  136727,
  128359,
  108575,
  114594,
  131466,
  89977,
  124467,
  114318,
  84544,
  53584,
  87786,
  131991,
  138445,
  70673,
];

function fuelNeededForModule(module) {
  let fuelNeeded = Math.floor(module / 3) - 2;
  return fuelNeeded;
}
function calculateTotalFuel(modules) {
  let totalFuel = 0;
  modules.forEach((module) => {
    totalFuel += fuelNeededForModule(module);
  });
  return totalFuel;
}
console.log(calculateTotalFuel(moduleMasses));
