const path = require('path');

(async () => {
  const puppeteer = (await import('puppeteer')).default;
  const inputPath = process.argv[2];
  const outputPath = process.argv[3];

  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();
  await page.goto('file://' + path.resolve(inputPath), { waitUntil: 'networkidle0' });
  // let the trading chart's inline script finish drawing the SVG
  await new Promise(r => setTimeout(r, 500));

  await page.pdf({
    path: outputPath,
    format: 'A4',
    landscape: false,
    printBackground: true,
    margin: { top: '8mm', bottom: '8mm', left: '6mm', right: '6mm' }
  });

  await browser.close();
  console.log('Wrote ' + outputPath);
})();
