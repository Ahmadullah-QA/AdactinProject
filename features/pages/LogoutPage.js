export class LogoutPage {
  constructor(page) {
    this.page = page;
    this.logoutButton = page.locator('//a[@href="Logout.php"]');
  }
  async clickLogout() {
    await this.logoutButton.click();
  }
}
