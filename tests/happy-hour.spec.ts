import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
  // Go to https://wheelofnames.com/95m-aky
  await page.goto("https://wheelofnames.com/95m-aky");

  // Click #bottomInstruction
  await page.locator("#bottomInstruction").click();

  // Click text=Home & Away
  const choice1 = await page.innerText("h1.title > span")
  console.log(`Option 1: ${choice1}`)
  
  // Click button:has-text("Close")
  await page.locator('button:has-text("Close")').click();

  // Click #wheelCanvas
  await page.locator("#wheelCanvas").click({
    position: {
      x: 302,
      y: 395,
    },
  });

  const choice2 = await page.innerText("h1.title > span")
  console.log(`Option 2: ${choice2}`)

});
