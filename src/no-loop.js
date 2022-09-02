const PDFMerger = require('pdf-merger-js');

const merger = new PDFMerger();
const pdfsFolder = path.join(__dirname, 'files');
(async () => {
  await merger.add(pdfsFolder + '/file1.pdf');
  await merger.add(pdfsFolder + '/file2.pdf');
  await merger.save('merged-no-loop.pdf');
})();
