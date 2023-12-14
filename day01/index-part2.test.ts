import { describe, it, expect } from "bun:test";
import { algorithm } from "./index-part2";

describe("day01 part1", () => {
  it("should be 1", () => {
    expect(algorithm(")")).toBe(1);
  });

  it("should be 5", () => {
    expect(algorithm("()())")).toBe(5);
  });

  it("should be 5", () => {
    expect(algorithm("()()))))))")).toBe(5);
  });
});
