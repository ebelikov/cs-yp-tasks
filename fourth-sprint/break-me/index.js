/**
 * -- ПРИНЦИП РАБОТЫ -
 *
 * -- ДОКАЗАТЕЛЬСТВО КОРРЕКТНОСТИ --
 *
 * -- ВРЕМЕННАЯ СЛОЖНОСТЬ --
 *
 * -- ПРОСТРАНСТВЕННАЯ СЛОЖНОСТЬ --
 *
 */

const map = new Map();

const getHash = (str, a = 1000, m = 123987123) => {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = (((hash * a) % m) + str[i].charCodeAt()) % m;
  }

  return hash;
};

function makeid(length) {
  length = 19;
  var result = "";
  var characters = "abcdefghijklmnopqrstuvwxyz";
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

const main = () => {
  let condition = true;
  while (condition) {
    const str = makeid();
    const hash = getHash(str);

    if (map.get(hash)) {
      console.log(map.get(hash));
      console.log(str);
      console.log(map.size);
      condition = false;
    }

    map.set(hash, str);
  }
};

main();
