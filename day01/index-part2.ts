export function algorithm(content: string) {
  let left = 0;
  let right = 0;

  for (let i = 1; i <= content.length; i++) {
    if (content[i - 1] === "(") {
      left++;
    } else {
      right++;
    }

    if (left - right === -1) {
      return i;
    }
  }

  return content.length;
}

const file = Bun.file("./inputs/day01.txt");
const content = await file.text();

console.log(algorithm(content));
