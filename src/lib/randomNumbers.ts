export function getUniqueRandomNumbers(count: number, max: number): number[] {
  const uniqueNumbers = new Set<number>();
  while (uniqueNumbers.size < count) {
    const randomNum = Math.floor(Math.random() * max);
    uniqueNumbers.add(randomNum);
  }
  return Array.from(uniqueNumbers);
}
