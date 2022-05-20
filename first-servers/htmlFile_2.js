//Код сервера для файла index.html
const http = require("http");
const fs = require('fs').promises; //Импортируем модуль fs. Этот модуль содержит функцию readFile(), которую мы будем использовать для загрузки файла HTML.

const host = 'localhost';
const port = 8000;

let indexFile; //ПРи запуске программы эта переменная будет хранить содержимое файла HTML
const requestListener = function (req, res) {
	res.setHeader("Content-Type", "text/html");
	res.writeHead(200);
	res.end(indexFile);
};

const server = http.createServer(requestListener);

fs.readFile(__dirname + "/index.html")
	.then(contents => {
	  indexFile = contents;
	  server.listen(port, host, () => {
	    console.log(`Server is running on http://${host}:${port}`);
	  });
	})
	.catch(err => {
	  console.error(`Could not read index.html file: ${err}`);
	  process.exit(1);
	});