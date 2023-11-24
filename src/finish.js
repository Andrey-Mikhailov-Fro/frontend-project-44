export default (result, myName) => {
  if (result === true) {
    console.log(`Congratulations, ${myName}`);
  } else {
    console.log(`Let's try again, ${myName}`);
  }
};
