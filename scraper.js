const puppeteer = require('puppeteer');

async function fetchLatestResult() {
  const browser = await puppeteer.launch({ headless: "new" });
  const page = await browser.newPage();
  await page.goto('https://lottery7y.com/#/saasLottery/WinGo?gameCode=WinGo_60S&lottery=WinGo', { waitUntil: 'networkidle0' });

  await page.waitForSelector('.lottery-history-card .number-ball');

  const result = await page.evaluate(() => {
    const ball = document.querySelector('.lottery-history-card .number-ball');
    const period = document.querySelector('.lottery-history-card .draw-issue')?.textContent;
    const num = parseInt(ball.textContent);

    const colorClass = ball.className.toLowerCase();
    let color = "Unknown";
    if (colorClass.includes("red")) color = "Red";
    else if (colorClass.includes("green")) color = "Green";
    else if (colorClass.includes("violet")) color = "Violet";

    const bigSmall = num >= 5 ? "Big" : "Small";

    return {
      period,
      number: num,
      color,
      bigSmall
    };
  });

  await browser.close();
  return result;
}

module.exports = { fetchLatestResult };