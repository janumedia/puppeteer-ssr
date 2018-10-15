const puppeteer = require('puppeteer');

module.exports = async function (params) {
    const start = Date.now();
    const browser = await puppeteer.launch({
        headless: true,
        //args: ['--no-sandbox', '--disable-setuid-sandbox']
    });
    
    const page = await browser.newPage();
    await page.goto('http://vue-web-components.netlify.com', {waitUntil: 'networkidle0'});
    let html = await page.content();
    
    await browser.close();

    const renderTime = Date.now() - start;

    console.log(`Headless render page in: ${renderTime}ms`);

    return { html, renderTime };
}