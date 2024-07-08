import http from "node:http";
import { readFile } from "node:fs/promises";

const port = 80;

http.createServer(async (request, response) => {
    let status = 200;
    let path;

    switch (request.url) {
        case "/":
            path = "./index.html";

            break;

        case "/about":
            path = "./about.html";

            break;

        case "/contact":
            path = "./contact-me.html";

            break;

        default:
            status = 404;
            path = "./404.html";

            break;
    }

    response.writeHead(status, { "Content-Type": "text/html" });

    console.log(request.method, request.url);

    const file = await readFile(path);

    response.end(file);
}).listen(port);

console.log(`Serving on: http://localhost:${port}`);
