export function algorithm(content: string) {
  const left = [...content.matchAll(/\(/g)].length;
  const right = [...content.matchAll(/\)/g)].length;

  return left - right;
}

const file = Bun.file("./inputs/day01.txt");
const content = await file.text();

console.log(algorithm(content));
