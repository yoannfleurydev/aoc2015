import { describe, it, expect } from "bun:test";
import { algorithm } from "./index-part1";

describe("day01 part1", () => {
  it("should be 0", () => {
    expect(algorithm("(())")).toBe(0);
    expect(algorithm("()()")).toBe(0);
  });

  it("should be 3", () => {
    expect(algorithm("(((")).toBe(3);
    expect(algorithm("(()(()(")).toBe(3);
    expect(algorithm("))(((((")).toBe(3);
  });

  it("should be -1", () => {
    expect(algorithm("())")).toBe(-1);
    expect(algorithm("))(")).toBe(-1);
  });

  it("should be -3", () => {
    expect(algorithm(")))")).toBe(-3);
    expect(algorithm(")())())")).toBe(-3);
  });
});
