import type { Locator, Page } from "@playwright/test";
import placesConfig from "../../tools/places.json" with { type: "json" };

export class WheelOfNamesPage {
  readonly resultContainer: Locator;
  readonly instructionLayer: Locator;
  readonly closeModalButton: Locator;
  readonly closeAdsButton: Locator;

  constructor(public readonly page: Page) {
    this.resultContainer = page.locator("span.winner-text");
    this.instructionLayer = page.locator("#instructionLayer");

    this.closeModalButton = page.locator("button", {
      hasText: "Close",
    });

    this.closeAdsButton = page
      .locator(".ad-declaration")
      .getByRole("button")
      .nth(1);
  }

  async goto() {
    const happyHourLocations = Object.keys(placesConfig);

    await this.page.goto("https://wheelofnames.com");
    await this.page
      .locator("div.basic-editor")
      .fill(happyHourLocations.join("\n"));
    await this.closeAdsButton.click();
  }

  async spinWheel() {
    // Await this.instructionLayer.isVisible();
    await this.page.press("html", "Control+Enter");
  }

  async getResult(): Promise<string> {
    const result = await this.resultContainer.innerText({ timeout: 30 * 1000 });
    return result;
  }
}
