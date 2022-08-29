/**
 * ID - 69780851
 * -- ПРИНЦИП РАБОТЫ -
 * 1. Парсим файлы, при этом создаем мапу где ключами являются слова а значениями
 * массивы с файлами, где данные файлы встречаеются.
 * 2. Парсим запросы.
 * 3. Итерируем запросы, в итерации запроса итерируем слова запроса по файлам где они есть,
 * при этом ведем мапу совпадений файлов.
 * В мапе ключ - индекс файла, значение - кол-во совпадений
 * 4. В итоге получаем мапу всех сопоставлений, сортируем ее и берем 5 лучших результатов
 *
 * -- ДОКАЗАТЕЛЬСТВО КОРРЕКТНОСТИ --
 * В алгоритме ничего хитрого. Перебираем запросы по файлам.
 * Единственная оптимизация - итерируем не по всем файлам, а только по тем,
 * где есть данные слова.
 *
 * -- ВРЕМЕННАЯ СЛОЖНОСТЬ --
 * m - кол-во файлов, ms - кол-во слов в файле
 * n - кол-во запросов, ns - кол-во слов в запросе
 *
 * В худшем случаем все слова встречаются во всех файлах
 * и все слова в файле и запросе - уникальные.
 * Парсинг данных O(m * ms + n * ms)
 *
 * Поиск O(n * ns * m + n * sort), где sort = Max(m, ns) * log(Max(m, ns)) - сортировка мапы совпадений,
 * данную сортировку можно убрать. Оставил ее в данном решении для удобочитаемости.
 *
 * -- ПРОСТРАНСТВЕННАЯ СЛОЖНОСТЬ --
 * Тут запутался как считать пространственную сложность хэш-таблиц
 *
 * filesByWord - ключи * массив файлов; ключи = n * ns; O(n * ns * m),
 * т.е в худше случае у нас будет n*ns - ключей, а в значениях массивы со всеми файлами
 *
 * requests - О(n * ns) - данный массив не обязательный,
 * так как можно итерировать запросы при парсинге строк
 *
 * Для каждого запроса создается matches мапа, но она существуют в рамках одной итерации.
 * matches - O(Max(ns)) - максимальное количество уникальных слов в запросе
 *
 * O(n * ns * m + n * ns + Max(ns)) ~ O(n * ns * m)
 *
 * -- PS --
 * 28.08 - дедлайн =)
 */

const readline = require("readline");
const io_interface = readline.createInterface({ input: process.stdin });

let lineNumber = 0;
let filesLength = null;

const requests = [];

// Построим мапу где ключами будут слова,
// а значениями массивы с мапами файлов, где данные слова встречаются
const filesByWord = new Map();

const prepareOutput = (matches) => {
  return matches.map(({ index }) => index).join(" ") + "\n";
};

const output = (value) => {
  process.stdout.write(value);
};

const compareFunction = (a, b) => {
  if (a.value === b.value) {
    return a.index - b.index;
  } else {
    return b.value - a.value;
  }
};

const searchBestMatches = (requests, filesByWord) => {
  for (let i = 0; i < requests.length; i++) {
    const request = requests[i];
    let matches = new Map();

    for (let word of request) {
      if (!filesByWord.has(word)) {
        continue;
      }

      for (let { file, index } of filesByWord.get(word)) {
        const value = matches.has(index)
          ? matches.get(index) + file.get(word)
          : file.get(word);

        matches.set(index, value);
      }
    }

    // Данный этап можно сделать более оптимизируемым, но сейчас он более удобочитаемый
    const bestMatches = Array.from(matches)
      .map(([index, value]) => ({ index, value }))
      .sort(compareFunction)
      .slice(0, 5);

    const formattedBestMatches = prepareOutput(bestMatches);

    output(formattedBestMatches);
  }
};

const main = () => {
  searchBestMatches(requests, filesByWord);
};

const prepareLine = (line) => {
  return line.trim().split(" ");
};

const handleFileLine = (line, lineNumber) => {
  const file = new Map();
  const index = Number(lineNumber);
  const uniqWordsInFile = new Set();

  prepareLine(line).forEach((word) => {
    file.set(word, file.has(word) ? file.get(word) + 1 : 1);

    // Если уже добавляли файл к данному слову
    if (filesByWord.has(word) && uniqWordsInFile.has(word)) {
      return;
    }

    if (!filesByWord.has(word)) {
      filesByWord.set(word, []);
    }

    filesByWord.get(word).push({ file, index });

    uniqWordsInFile.add(word);
  });
};

const handleRequestLine = (line) => {
  const request = new Set();

  prepareLine(line).forEach((word) => {
    if (!request.has(word)) {
      request.add(word);
    }
  });

  requests.push(request);
};

io_interface.on("line", function (line) {
  if (lineNumber === 0) {
    filesLength = Number(line);
  } else if (lineNumber <= filesLength) {
    handleFileLine(line, lineNumber);
  } else if (lineNumber > filesLength + 1) {
    handleRequestLine(line);
  }

  lineNumber++;
});

io_interface.on("close", function () {
  main();
});
