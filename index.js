import express from "express";
import { readFile } from "node:fs/promises";

const app = express();

app.get("/", (request, response) => {
    console.log(request.method, request.url);

    readFile("./index.html").then((file) => {
        response.format({ html: () => response.send(file) });
    });
});

app.get("/about", (request, response) => {
    console.log(request.method, request.url);

    readFile("./about.html").then((file) => {
        response.format({ html: () => response.send(file) });
    });
});

app.get("/contact", (request, response) => {
    console.log(request.method, request.url);

    readFile("./contact-me.html").then((file) => {
        response.format({ html: () => response.send(file) });
    });
});

app.get("*", (request, response) => {
    console.log(request.method, request.url);

    readFile("./404.html").then((file) => {
        response.format({ html: () => response.status(404).send(file) });
    });
});

const PORT = 80;

app.listen(PORT, () => console.log(`Serving on: http://localhost:${PORT}`));
