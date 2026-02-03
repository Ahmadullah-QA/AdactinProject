export class SelectHotelPage {
  constructor(page) {
    this.page = page;
    this.selectHotelRadioButton = page.locator(
      '//input[@name="radiobutton_0"]',
    );
    this.continueButton = page.locator('//input[@id="continue"]');
  }
  async selectHotel() {
    await this.selectHotelRadioButton.check();
  }
  async clickContinue() {
    await this.continueButton.click();
  }
  async selectHotelAndContinue() {
    await this.selectHotel();
    await this.clickContinue();
  }
}
