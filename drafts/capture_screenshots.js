const path = require('path');

(async () => {
  const puppeteer = (await import('puppeteer')).default;
  const inputPath = path.resolve(process.argv[2]);
  const outDir = path.resolve(process.argv[3]);

  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();
  await page.setViewport({ width: 900, height: 1200, deviceScaleFactor: 2 });
  await page.goto('file://' + inputPath, { waitUntil: 'networkidle0' });
  await new Promise((r) => setTimeout(r, 500));

  const pages = await page.$$('.page');
  console.log(`Found ${pages.length} .page elements`);

  const names = ['tearsheet_header', 'tearsheet_capital', 'tearsheet_financials', 'tearsheet_bottom'];
  for (let i = 0; i < pages.length; i++) {
    const name = names[i] || `tearsheet_extra_${i + 1}`;
    const outPath = path.join(outDir, `${name}.png`);
    await pages[i].screenshot({ path: outPath });
    console.log(`Saved ${outPath}`);
  }

  await browser.close();
})();
