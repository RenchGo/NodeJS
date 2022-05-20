const http = require("http");

const host = 'localhost';
const port = 8000;

const requestListener = function (req, res) { //Изменим функцию requestListener() чтобы она возвращяла нам ответ JSON
	res.setHeader("Content-Type", "application/json"); // Этот метод добавляет добавляет заголовок к HTTP ответу. Заголловки содержат доп информацию, которая может быть прикреплена к запросу или ответу. Этот метод принимает два аргумента: название заголовка и его значение.
	//Возвратим пользователю JSON контент
	res.writeHead(200);
	res.end(`{"message":"This is a JSON response"}`);
}; 

const server = http.createServer(requestListener);
server.listen(port, host, () => {
	console.log(`Server is running on http://${host}:${port}`);
});