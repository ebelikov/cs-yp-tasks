/**
 * https://contest.yandex.ru/contest/23815/problems/A/
 * 69483088
 * -- ПРИНЦИП РАБОТЫ -
 * На каждой итерации необходимо делить массив на 2 части, найти отсортированную часть.
 * Если искомое значение находится в отсортированной части, то применяем к ней обычный бинарный поиск
 * если нет, то делим массив на 2 части и повторяем итерацию
 *
 * -- ДОКАЗАТЕЛЬСТВО КОРРЕКТНОСТИ --
 * При каждом делении массива, мы гарантированно получаем 2 части, одна из которых отсортирована.
 * С сортированной частью все понятно, там отработает бинарный поиск. Если каждый раз искомое число
 * будет находится в неотсортированной части, то деля массив на 2 части, рано или поздно мы дойдем до того,
 * что в массиве останется 1 элемент.
 *
 * -- ВРЕМЕННАЯ СЛОЖНОСТЬ --
 * O(log(n))
 *
 * -- ПРОСТРАНСТВЕННАЯ СЛОЖНОСТЬ --
 * Так как мы не используем вспомагательных структур данных, а так же не используем рекурсию,
 * то O(1)
 */

const binarySearch = (arr, k, left = 0, right = arr.length) => {
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (arr[mid] === k) {
      return mid;
    } else if (arr[mid] > k) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return -1;
};

function brokenSearch(arr, k) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    const lValue = arr[left];
    const midValue = arr[mid];
    const rValue = arr[right];

    if (arr[mid] === k) {
      return mid;
    }

    // Отсортирована левая часть или правая
    if (lValue <= midValue) {
      if (lValue <= k && k < midValue) {
        return binarySearch(arr, k, left, mid - 1);
      } else {
        left = mid + 1;
      }
    } else {
      if (midValue < k && k <= rValue) {
        return binarySearch(arr, k, mid + 1, right);
      } else {
        right = mid - 1;
      }
    }
  }

  return -1;
}
