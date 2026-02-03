import { setWorldConstructor, World } from "@cucumber/cucumber";

class CustomWorld extends World {
  constructor(options) {
    super(options);

    this.browser = null;
    this.context = null;
    this.page = null;
    this.loginPage = null;
    this.searchHotelPage = null;
    this.selectHotelPage = null;
    this.bookAHotelPage = null;
    this.bookedItineraryPage = null;
    this.logoutPage = null;
  }
}

setWorldConstructor(CustomWorld);
