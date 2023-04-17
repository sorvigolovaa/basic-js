function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }

  const result = [];
  let skipNext = false;

  for (let i = 0; i < arr.length; i++) {
    const item = arr[i];

    if (skipNext) {
      skipNext = false;
      continue;
    }

    if (item === "--discard-next") {
      skipNext = true;
      continue;
    }

    if (item === "--discard-prev") {
      if (i > 0 && arr[i - 2] !== "--discard-next") {
        result.pop();
      }
      continue;
    }

    if (item === "--double-next") {
      if (i < arr.length - 1) {
        result.push(arr[i + 1]);
      }
      continue;
    }

    if (item === "--double-prev") {
      if (i > 0 && arr[i - 2] !== "--discard-next") {
        result.push(arr[i - 1]);
      }
      continue;
    }

    result.push(item);
  }

  return result;
}


module.exports = {
  transform,
};