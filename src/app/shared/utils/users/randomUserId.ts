/**
 *
 * @param start startign number
 * @param end ending number
 * @returns a number between 'start' and 'end'
 */
export const getRandomUserId = (start: number, end: number): number => {
  return Math.floor(Math.random() * end) + start;
};
