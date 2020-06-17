const puppeteer = require('puppeteer');

module.exports = async function (params) {
    const start = Date.now();
    const browser = await puppeteer.launch({
        headless: true,
        args: ['--no-sandbox', '--disable-setuid-sandbox']
    });in39406383
    
    const page = await browser.newPage();
    await page.goto('https://vue-web-components.netlify.app', {waitUntil: 'networkidle0'});
    let html = await page.content();
    
    await browser.close();

    const renderTime = Date.now() - start;

    console.log(`Headless render page in: ${renderTime}ms`);

    return { html, renderTime };
}