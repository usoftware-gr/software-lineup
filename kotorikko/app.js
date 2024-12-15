const fs = require('fs');

fs.writeFile('test.txt', 'Hello!', function (err) {
    if (err) { throw err; }
    console.log('test.txtが作成されました');
});