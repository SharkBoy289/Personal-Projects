const puppeteer = require('puppeteer');
async function scrapeChannel(url) {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);

    const [el] = await page.$$('xpath/.//*[@id="page-header"]/yt-page-header-renderer/yt-page-header-view-model/div/div[1]/div/yt-dynamic-text-view-model/h1/span/text()');
    const text = await el.getProperty('textContent');
    const name = await text.jsonValue();

    const [el2] = await page.$$('xpath/.//*[@id="page-header"]/yt-page-header-renderer/yt-page-header-view-model/div/div[1]/yt-decorated-avatar-view-model/yt-avatar-shape/div/div/div/img');
    const src = await el2.getProperty('src');
    const avatarURL = await src.jsonValue();

    browser.close();

    return {name, avatarURL}

}

module.exports = {
    scrapeChannel
}
