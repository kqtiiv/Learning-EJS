/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/

import fs from "fs";

import inquirer from "inquirer";
import qr from "qr-image";

inquirer
  .prompt([
    {message: "Input your url: ",
    name: "url"}
  ])
  .then((answers) => {
    var qr_png = qr.image(answers.url);
    qr_png.pipe(fs.createWriteStream("qr_code.png"));

    fs.writeFile("URL.txt", answers.url, (err) => {
        if (err) throw err;
        console.log("Updated file.");
    });
  })
  .catch((error) => {
    if (error.isTtyError) {
      throw err;
    } else {
      throw err;
    }
  });


