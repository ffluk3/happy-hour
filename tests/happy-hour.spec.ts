import { test } from "@playwright/test";

test("test", async ({ browserName, browser  }) => {
  const context = await browser.newContext({ recordVideo: { dir: 'videos/' } });

  const page = await context.newPage();

  // Go to https://wheelofnames.com/95m-aky
  await page.goto("https://wheelofnames.com/95m-aky");

  // Click #bottomInstruction
  await page.locator("#bottomInstruction").click();

  const choice1 = await page.innerText("div.text-h3")
  console.log(`Option ${browserName}: ${choice1}`)
  
  await page.locator('button:has-text("Close")').click();

  await context.close();
});
