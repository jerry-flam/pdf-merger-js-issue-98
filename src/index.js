const path = require('path');
const glob = require('glob');
const PDFMerger = require('pdf-merger-js');

const merger = new PDFMerger();
const pdfsFolder = path.join(__dirname, 'files');

glob(pdfsFolder + '/*.pdf', {}, (_err, files) => {
  files.forEach((file) => {
    merger.add(file);
  });
  merger.save('merged.pdf');
});
