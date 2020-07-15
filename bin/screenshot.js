'use strict'

const puppeteer = require('puppeteer')

;(async () => {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()
  await page.setViewport({ width: 1200, height: 627, deviceScaleFactor: 1 })
  await page.goto('http://localhost:8080')
  await page.screenshot({ path: 'assets/screenshot.png' })
  await browser.close()
})()
