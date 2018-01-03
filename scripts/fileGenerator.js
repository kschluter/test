const fs = require('fs');

for(i = 1; i < 51; i++){
    fs.writeFile(`../files/${i}.txt`, `File ${i} content`, (err) => {
        if (err) throw err;
    });
}