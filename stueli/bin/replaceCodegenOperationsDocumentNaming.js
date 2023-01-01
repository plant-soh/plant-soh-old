const fs = require('fs');

fs.readFile(process.argv[2], 'utf8', (err, data) => {
  if (err) process.exit(1);
  const result = data.replace(
    /(Operations\.\w+(?<!Document)),/g,
    '$1Document,',
  );
  fs.writeFile(process.argv[2], result, 'utf8', (err) => {
    if (err) process.exit(1);
  });
});
