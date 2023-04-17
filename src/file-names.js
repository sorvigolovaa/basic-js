function renameFiles(names) {
  const fileCounts = {};
  const newNames = [];

  for (let i = 0; i < names.length; i++) {
    const name = names[i];

    if (name in fileCounts) {
      const newCount = fileCounts[name] + 1;
      fileCounts[name] = newCount;
      const newName = `${name}(${newCount})`;

      if (newName in fileCounts) {
        const newestCount = fileCounts[newName] + 1;
        fileCounts[newName] = newestCount;
        newNames.push(`${name}(${newCount})(${newestCount})`);
      } else {
        fileCounts[newName] = 0;
        newNames.push(newName);
      }
    } else {
      fileCounts[name] = 0;
      newNames.push(name);
    }
  }

  return newNames;
}


module.exports = {
  renameFiles
};
