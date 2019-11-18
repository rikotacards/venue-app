export const makeUrlFriendly = (word: string) => {
   return word.replace(/\W+/g, '-').toLowerCase();
}