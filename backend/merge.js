const PDFMerger = require('pdf-merger-js');

const path = require('path');

const mergePdfs = async (pdfobj) => {
  var merger = new PDFMerger();

  let d = new Date().getTime()
  await pdfobj.forEach(async (element) => {
    await merger.add(path.join(__dirname, element.path));

    await merger.save(`public/${d}.pdf`);
  });
  return d
}
module.exports = { mergePdfs }