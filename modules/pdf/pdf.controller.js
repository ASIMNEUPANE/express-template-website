const pdfkit = require('pdfkit');
const pdfDocument = new pdfkit;
const fs = require('fs');

const result = async (text)=>{
   
    
  const creatPdf = pdfDocument.pipe(fs.createReadStream('output.pdf'))
const writePdf = pdfDocument.text(text)
   .fontSize(25)
return result
}

module.exports = {result};


