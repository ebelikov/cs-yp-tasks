const participants = ['sasha', 'zhenya'];

const chooseRandom = (arr) => {
  if (!arr.length) {
    return 'nobody';
  }

  const index = Math.floor(Math.random() * arr.length);

  return arr[index];
};

console.log(chooseRandom(participants));
