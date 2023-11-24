const getRandomIntInclusive = (min, max) => {
  const minimal = Math.ceil(min);
  const maximum = Math.floor(max);
  return Math.floor(Math.random() * (maximum - minimal + 1) + minimal);
};

export default getRandomIntInclusive;
