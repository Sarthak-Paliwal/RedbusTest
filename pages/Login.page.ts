import { Locator, Page, expect } from "@playwright/test";
export default class Login {
  page: Page;
  mobileIf: Locator;
  constructor(page: Page) {
    this.page = page;
    this.mobileIf = this.page.locator(
      '//input[@class="inputFieldMobile___4b195d   "]',
    );
  }
  async LoginUser() {
    await this.mobileIf.fill("9343441458");
    await this.page
      .frameLocator('iframe[title="reCAPTCHA"]')
      .locator(".recaptcha-checkbox-border")
      .click();
    //pause to verify captcha
    await this.page.pause();
    await this.page.locator('//button[@aria-label="Continue"]').click();
    //pause to validate fingerprint otp
    await this.page.pause();
    

    await this.page.context().storageState({
      path: "auth/redbusAuth.json",
    });
  }
}
