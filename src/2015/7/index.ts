/*
--- Day 7: Some Assembly Required ---
This year, Santa brought little Bobby Tables a set of wires and bitwise logic gates! Unfortunately, little Bobby is a little under the recommended age range, and he needs help assembling the circuit.

Each wire has an identifier (some lowercase letters) and can carry a 16-bit signal (a number from 0 to 65535). A signal is provided to each wire by a gate, another wire, or some specific value. Each wire can only get a signal from one source, but can provide its signal to multiple destinations. A gate provides no signal until all of its inputs have a signal.

The included instructions booklet describes how to connect the parts together: x AND y -> z means to connect wires x and y to an AND gate, and then connect its output to wire z.

For example:

123 -> x means that the signal 123 is provided to wire x.
x AND y -> z means that the bitwise AND of wire x and wire y is provided to wire z.
p LSHIFT 2 -> q means that the value from wire p is left-shifted by 2 and then provided to wire q.
NOT e -> f means that the bitwise complement of the value from wire e is provided to wire f.
Other possible gates include OR (bitwise OR) and RSHIFT (right-shift). If, for some reason, you'd like to emulate the circuit instead, almost all programming languages (for example, C, JavaScript, or Python) provide operators for these gates.

For example, here is a simple circuit:

123 -> x
456 -> y
x AND y -> d
x OR y -> e
x LSHIFT 2 -> f
y RSHIFT 2 -> g
NOT x -> h
NOT y -> i
After it is run, these are the signals on the wires:

d: 72
e: 507
f: 492
g: 114
h: 65412
i: 65079
x: 123
y: 456

In little Bobby's kit's instructions booklet (provided as your puzzle input), what signal is ultimately provided to wire a?
*/

import * as fs from "fs";

export type wires = { [key: string]: number };
const wires: wires = {};

export function storeInVariable(value: number, wires: wires, wireName: string) {
  wires[wireName] = value;
}

export function bitwiseAnd(wire1: number, wire2: number) {
  return wire1 & wire2;
}
export function bitwiseOr(wire1: number, wire2: number) {
  return wire1 | wire2;
}
export function leftShift(wire: number, shift: number) {
  return wire << shift;
}
export function rightShift(wire: number, shift: number) {
  return wire >> shift;
}
export function bitwiseNot(wire: number) {
  return 65536 + ~wire;
}

let file = fs.readFileSync("src/2015/1/input.txt", "utf-8").split(/\r?\n/);
runAllInstructions(file);

function runAllInstructions(file: string[]) {
  file.forEach((instruction) => {
    findStartingWires(instruction);
  });

  while (file.length >= 2) {
    file.forEach((instruction) => {
      let splitCommand = instruction.split(" ");

      if (splitCommand.length === 4) {
        runNotInstruction(splitCommand, instruction);
      } else if (splitCommand.length === 5) {
        if (splitCommand[1] === "OR") {
          runOrInstruction(splitCommand, instruction);
        } else if (splitCommand[1] === "AND") {
          runAndInstruction(splitCommand, instruction);
        } else if (splitCommand[1] === "LSHIFT") {
          runLshiftInstruction(splitCommand, instruction);
        } else if (splitCommand[1] === "RSHIFT") {
          runRshiftInstruction(splitCommand, instruction);
        }
      }
    });
  }
}

function runRshiftInstruction(splitCommand: string[], instruction: string) {
  let { wireName, outputWire, shift } = splitShiftInstruction(splitCommand);
  if (wireName in wires) {
    wires[outputWire] = rightShift(wires[wireName], shift);
    removeFromArray(instruction);
  }
}

function runLshiftInstruction(splitCommand: string[], instruction: string) {
  let { wireName, outputWire, shift } = splitShiftInstruction(splitCommand);
  if (wireName in wires) {
    wires[outputWire] = leftShift(wires[wireName], shift);
    removeFromArray(instruction);
  }
}

function splitShiftInstruction(splitCommand: string[]) {
  let wireName = splitCommand[0];
  let shift = parseInt(splitCommand[2]);
  let outputWire = splitCommand[4];
  return { wireName, outputWire, shift };
}

function runAndInstruction(splitCommand: string[], instruction: string) {
  let { wireName1, wireName2, outputWire } = splitAndOrInstruction(
    splitCommand
  );
  if (wireName1 === "1") {
    wireName1 = "_";
    wires[wireName1] = 1;
  }
  if (wireName1 in wires && wireName2 in wires) {
    wires[outputWire] = bitwiseAnd(wires[wireName1], wires[wireName2]);
    removeFromArray(instruction);
  }
}

function runOrInstruction(splitCommand: string[], instruction: string) {
  let { wireName1, wireName2, outputWire } = splitAndOrInstruction(
    splitCommand
  );
  if (wireName1 in wires && wireName2 in wires) {
    wires[outputWire] = bitwiseOr(wires[wireName1], wires[wireName2]);
    removeFromArray(instruction);
  }
}

function splitAndOrInstruction(splitCommand: string[]) {
  let wireName1 = splitCommand[0];
  let wireName2 = splitCommand[2];
  let outputWire = splitCommand[4];
  return { wireName1, wireName2, outputWire };
}

function runNotInstruction(splitCommand: string[], instruction: string) {
  let wireName = splitCommand[1];
  let outputWire = splitCommand[3];
  if (wireName in wires) {
    wires[outputWire] = bitwiseNot(wires[wireName]);
    removeFromArray(instruction);
  }
}

function findStartingWires(instruction: string) {
  if (
    instruction.split(" ").length === 3 &&
    isNaN(instruction.split(" ")[0] as any) === false
  ) {
    wires[instruction.split(" ")[2]] = parseInt(instruction.split(" ")[0]);
    removeFromArray(instruction);
  }
}

function removeFromArray(instruction: string) {
  let index = file.indexOf(instruction);
  file.splice(index, 1);
}

let answer1 = wires["lx"];
console.log(answer1);
