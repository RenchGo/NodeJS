//Код сервера для файла index.html
const http = require("http");
const fs = require('fs').promises; //Импортируем модуль fs. Этот модуль содержит функцию readFile(), которую мы будем использовать для загрузки файла HTML.

const host = 'localhost';
const port = 8000;

const requestListener = function (req, res) {
	fs.readFile(__dirname + "/index.html") //Метод для загрузки файла
		.then(contents => { //Возвратим старницу после загрузки, если успешно выполнился пред.метод
			res.setHeader("Content-Type", "text/html");
			res.writeHead(200);
			res.end(contents);
		})
		.catch(err => {
			res.writeHead(500);
			res.end(err);
			return;
		}
	)
};

const server = http.createServer(requestListener);
server.listen(port, host, () => {
	console.log(`Server is running on http://${host}:${port}`);
});