
export default function BinarySearch(arr, searchValue,uiarr) {
  console.log("search triggered");
  let high = arr.length - 1;
  let low = 0;

  while (low <= high) {
    let mid = Math.floor((high + low) / 2);
    uiarr.push({'l':low,'h':high,'m':mid});
    if (arr[mid] < searchValue) {
      low = mid + 1;
    } else if (arr[mid] > searchValue) {
      high = mid - 1;
    } else {
      return "found";
    }
  }
  return "not found";
}
