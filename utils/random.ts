export function randomDigitsQuery(): string {
  const length = Math.floor(Math.random() * 3) + 2; // 2..4
  let digits = '';
  for (let i = 0; i < length; i++) {
    digits += Math.floor(Math.random() * 10);
  }
  return digits;
}
