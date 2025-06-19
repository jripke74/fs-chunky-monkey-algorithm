function chunkArrayInGroups(arr, num) {
  const newArray = [];
  for (let i = 0; i < arr.length; i += num) {
    newArray.push(arr.slice(i, i + num));
  }
  return newArray;
}