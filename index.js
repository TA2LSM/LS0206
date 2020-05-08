const fs = require("fs"); //file-system module included

// Synchronous code
// const textIn = fs.readFileSync("./txt/input.txt", "utf-8"); //open file and read it with a utf-8 format
// console.log(textIn);

// //const textOut = `` 'this is: ' + textIn;  //old method
// //const textOut = `This is what we know about the avocado: ${textIn}`; //${textIn}. ile ek özelliklere erişim de var
// const textOut = `This is what we know about the avocado: ${textIn}.\nCreated on ${Date.now()}`; //.\n = new line
// //console.log(textOut);

// fs.writeFileSync("./txt/output.txt", textOut);
// console.log("File written!");

// Asynchronous code
// A callback function will be called after this process ends.
// Other users can access other features if there is any...
// fs.readFile("./txt/start.txt", "utf-8", (err, data) => {
//   console.log(data);
//   console.log("Process completed!");
// });

// console.log("Reading data...");

//--------------------------------------------------------
// Callback HELL !!!
fs.readFile("./txt/start.txt", "utf-8", (err, data1) => {
  console.log(data1 + ".txt file will also be readed...");
  if (err) return console.log("ERROR !!!");

  fs.readFile(`./txt/${data1}.txt`, "utf-8", (err, data2) => {
    fs.readFile("./txt/append.txt", "utf-8", (err, data3) => {
      fs.writeFile(
        "./txt/final.txt",
        `${data2}\n\n${data3}`,
        "utf-8",
        (err) => {
          //there will be no "data" here. But we can add callback function
          if (err) throw err;
          console.log("Your file has been saved!");
        }
      );
    });
  });
});
// There codes above have been modified according to my directory structure (SŞ)
//--------------------------------------------------------
