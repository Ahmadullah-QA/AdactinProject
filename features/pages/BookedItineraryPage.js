import { expect } from "@playwright/test";

export class BookedItineraryPage {
  constructor(page) {
    this.page = page;
    this.orderIdField = page.locator("#order_no");
    this.myItineraryButton = page.locator('//input[@id="my_itinerary"]');
  }

  async getOrderId() {
    await expect(this.orderIdField).not.toHaveValue("", { timeout: 30000 });
    const orderId = await this.orderIdField.getAttribute("value");
    return orderId;
  }

  async navigateToBookedItinerary() {
    await this.myItineraryButton.waitFor({ state: "visible" });
    await this.myItineraryButton.click();
  }
}
