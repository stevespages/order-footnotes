/*
<This program, order-footnotes, puts footnotes in a document in order.>
Copyright (C) <2024>  <Stephen Greig>

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU Affero General Public License as
published by the Free Software Foundation, either version 3 of the
License, or (at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU Affero General Public License for more details.

You should have received a copy of the GNU Affero General Public License
along with this program.  If not, see <https://www.gnu.org/licenses/>.
*/

var fs =  require('fs');
var input = process.argv[2];
var output = input + ".ordered";

fs.readFile(input, 'utf-8', function (err, text) {
    if (err) throw err;

    console.log(text);

    var textLines = text.split("\n");
    endFts = {};
    textLines.forEach(line => {
        if (line.includes("]:")) {
            lineArr = line.split(/^\[\^([^\]]*)]:/g);
            if (lineArr.length === 3) {
                lineArr.splice(0,1);
            }
            endFts[lineArr[0]] = lineArr[1];
        }
    })

    let i = 1;
    const notes = [];
    while (text.match(/\[\^[0-9]+][^:]/g)) {

        const refNumb = /\[\^([0-9]+)][^:]/g.exec(text)[1];

        notes.push(endFts[refNumb]);

        text = text.replace(/\[\^[0-9]+]/, "[^" + i + "XX");
        
        i++
    }
    
    text = text.replaceAll(/^\[\^[0-9]+]:.*[\r\n$]/gm, "");

    text = text.replaceAll(/\[\^([0-9])XX/g, "[^$1]");


    notes.forEach((note, i) => {
        text = text + "\n[^" + (i + 1) + "]: " + note;
    })

    text = text.replace(/\n{2,}/g, '\n\n');

    console.log(text);

    fs.writeFile(output, text, function(err) {
        if(err) {
            return console.log(err);
        }
        console.log("The file was saved!");
    }); 
});
