import { Given, When, Then } from "@cucumber/cucumber";
import { expect } from "@playwright/test";

Given("user Navigates To The Website {string}", async function (url) {
  await this.loginPage.navigate(url);
});

// --- Login ---
When("the user enters username as {string}", async function (username) {
  await this.loginPage.enterUsername(username);
});

When("the user enters password as {string}", async function (password) {
  await this.loginPage.enterPassword(password);
});

When("the user clicks the Login button", async function () {
  await this.loginPage.clickLogin();
});

Then(
  "the login should be successful and the Search Hotel page should be displayed",
  async function () {
    await expect(this.page).toHaveURL(/.*SearchHotel.php/);
  },
);

// --- Search Hotel ---
When(
  "the user Select The Hotel Location As {string}",
  async function (location) {
    await this.searchHotelPage.selectLocation(location);
  },
);

When("the user Select The Hotel As {string}", async function (hotel) {
  await this.searchHotelPage.selectHotel(hotel);
});
When("the user Select Room Type As {string}", async function (roomType) {
  await this.searchHotelPage.selectRoomType(roomType);
});

When(
  "the user Select Number of Rooms {string}",
  async function (numberOfRooms) {
    await this.searchHotelPage.selectNumberOfRooms(numberOfRooms);
  },
);
When(
  "the user Select The Check In Date On {string}",
  async function (checkInDate) {
    await this.searchHotelPage.enterCheckInDate(checkInDate);
  },
);
When(
  "the user Select The Check Out Date As {string}",
  async function (checkOutDate) {
    await this.searchHotelPage.enterCheckOutDate(checkOutDate);
  },
);

When(
  "the user Select The Adults Per Room {string}",
  async function (adultsPerRoom) {
    await this.searchHotelPage.selectAdultsPerRoom(adultsPerRoom);
  },
);
When(
  "also the user Select The Children per Room {string}",
  async function (childrenPerRoom) {
    await this.searchHotelPage.selectChildrenPerRoom(childrenPerRoom);
  },
);
When("the user Click On Search Button", async function () {
  await this.searchHotelPage.clickSearch();
});
Then("navigates To Select Hotel Page", async function () {
  await expect(this.page).toHaveURL(/.*SelectHotel.php/);
});

// --- Select Hotel ---
When(
  "the user Selecting The Hotel by Clicking On Radio Button",
  async function () {
    await this.selectHotelPage.selectHotel();
  },
);
When("the user Clicks On Continue", async function () {
  await this.selectHotelPage.clickContinue();
});
Then("navigates To Book A Hotel Page", async function () {
  await expect(this.page).toHaveURL(/.*BookHotel.php/);
});

// --- Book A Hotel ---
When("the user Enter First Name As {string}", async function (firstName) {
  await this.bookAHotelPage.enterFirstName(firstName);
});
When("the user Enter Last Name As {string}", async function (lastName) {
  await this.bookAHotelPage.enterLastName(lastName);
});
When("the user Enter Billing Address {string}", async function (address) {
  await this.bookAHotelPage.enterAddress(address);
});
When("the user Enter Credit Card Number {string}", async function (cardNumber) {
  await this.bookAHotelPage.enterCreditCardNumber(cardNumber);
});
When("the user Enter Credit Card Type As {string}", async function (cardType) {
  await this.bookAHotelPage.selectCreditCardType(cardType);
});
When(
  "the user Enter Expiry Month {string} and Year {string}",
  async function (expMonth, expYear) {
    await this.bookAHotelPage.selectExpiryMonth(expMonth);
    await this.bookAHotelPage.selectExpiryYear(expYear);
  },
);
When("the user Enter CVV Number {string}", async function (cvv) {
  await this.bookAHotelPage.enterCVV(cvv);
});
When("the user Click On Book Now Button", async function () {
  await this.bookAHotelPage.clickBookNow();
});
Then("navigates to Booking Confirmation Page", async function () {
  await expect(this.page).toHaveURL(/.*BookingConfirm.php/, { timeout: 30000 });

  const orderID = await this.bookedItineraryPage.getOrderId();

  console.log(`\n Successfully booked! Order ID: ${orderID}`);
  this.attach(`Confirmed Order ID: ${orderID}`);
});

// --- My Itinerary & Logout ---
When("the user Click On Booked Itinerary", async function () {
  await this.bookedItineraryPage.navigateToBookedItinerary();
});
Then("the user Click On Logout Button", async function () {
  await this.logoutPage.clickLogout();
});
Then("webpage Redirects To Logged out Successfully", async function () {
  await expect(this.page).toHaveURL(/.*Logout.php/i, { timeout: 10000 });
});
