function renameFiles(names) {
  const map = new Map();
  const result = [];

  for (const name of names) {
    let newName = name;
    let count = map.get(name) || 0;

    while (map.has(newName)) {
      count++;
      newName = `${name}(${count})`;
    }

    map.set(newName, 1);
    result.push(newName);
  }

  return result;
}

module.exports = {
  renameFiles
};
