export const getRandomItemFromArray = (arr, factor) => arr[Math.floor(Math.random(factor) * arr.length)];

export const getRandomDate = (start, end) => new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));