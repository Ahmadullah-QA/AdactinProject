export class BookAHotelPage {
  constructor(page) {
    this.page = page;
    this.firstNameInput = page.locator('//input[@id="first_name"]');
    this.lastNameInput = page.locator('//input[@id="last_name"]');
    this.addressInput = page.locator('//textarea[@id="address"]');
    this.creditCardInput = page.locator('//input[@id="cc_num"]');
    this.creditCardTypeSelect = page.locator('//select[@id="cc_type"]');
    this.expiryMonthSelect = page.locator('//select[@id="cc_exp_month"]');
    this.expiryYearSelect = page.locator('//select[@id="cc_exp_year"]');
    this.cvvInput = page.locator('//input[@id="cc_cvv"]');
    this.bookNowButton = page.locator('//input[@id="book_now"]');
  }
  async enterFirstName(firstName) {
    await this.firstNameInput.fill(firstName);
  }
  async enterLastName(lastName) {
    await this.lastNameInput.fill(lastName);
  }
  async enterAddress(address) {
    await this.addressInput.fill(address);
  }
  async enterCreditCardNumber(creditCardNumber) {
    await this.creditCardInput.fill(creditCardNumber);
  }
  async selectCreditCardType(creditCardType) {
    await this.creditCardTypeSelect.selectOption(creditCardType);
  }
  async selectExpiryMonth(expiryMonth) {
    await this.expiryMonthSelect.selectOption(expiryMonth);
  }
  async selectExpiryYear(expiryYear) {
    await this.expiryYearSelect.selectOption(expiryYear);
  }
  async enterCVV(cvv) {
    await this.cvvInput.fill(cvv);
  }
  async clickBookNow() {
    await this.bookNowButton.click();
  }
  async fillBookingFormAndSubmit({
    firstName,
    lastName,
    address,
    creditCardNumber,
    creditCardType,
    expiryMonth,
    expiryYear,
    cvv,
  }) {
    await this.enterFirstName(firstName);
    await this.enterLastName(lastName);
    await this.enterAddress(address);
    await this.enterCreditCardNumber(creditCardNumber);
    await this.selectCreditCardType(creditCardType);
    await this.selectExpiryMonth(expiryMonth);
    await this.selectExpiryYear(expiryYear);
    await this.enterCVV(cvv);
  }
}
