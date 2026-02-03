export class LoginPage {
  constructor(page) {
    this.page = page;
    this.url = "https://adactinhotelapp.com/HotelAppBuild2/";
    this.usernameField = page.locator('//input[@id="username"]');
    this.passwordField = page.locator('//input[@id="password"]');
    this.loginButton = page.locator('//input[@id="login"]');
  }
  async navigate() {
    await this.page.goto(this.url);
  }
  async enterUsername(username) {
    await this.usernameField.fill(username);
  }
  async enterPassword(password) {
    await this.passwordField.fill(password);
  }
  async clickLogin() {
    await this.loginButton.click();
  }
  async login(username, password) {
    await this.enterUsername(username);
    await this.enterPassword(password);
    await this.clickLogin();
  }
}
