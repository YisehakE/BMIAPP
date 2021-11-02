const fs = require("fs") // File System Module

//OR
// const fs = require("fs/promises");


// const files = fs.readdir("./", (err, files) => {
//     console.log(err ? err: files);
// })

//OR
// async function _readdir() {
//     try {
//         const files = await fs.readdir("./");
//         console.log(files)

//     } catch(err) {
//         console.log(err);
//     }
// }
// _readdir();


// //READING A SINGLE FILE LIKE INDEX
// fs.readFile("./index.html", "utf8", (err, file) => {
//     console.log(err ? err : file);
// })  

//
const file = fs.readFileSync("./index.html", "utf8");


const http = require("http");

const server = http.createServer(
    (request, response) => {
        response.writeHead(200, { "Content-Type": "text/html" });
        response.write(file);
        response.end();

    }
);



//NOTE: WANT TO USE PORT NUMBER > 3000 because anything lower might be 
//Already used by computer for other things
// server.listen(7000)
const PORT = process.env.PORT || 7000;
server.listen(PORT);

console.log(`Server is running on port ${PORT}`);

