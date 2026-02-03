export class SearchHotelPage {
  constructor(page) {
    this.page = page;
    this.locationDropdown = page.locator('//select[@id="location"]');
    this.hotelsDropdown = page.locator('//select[@id="hotels"]');
    this.roomTypeDropdown = page.locator('//select[@id="room_type"]');
    this.numberOfRoomsDropdown = page.locator('//select[@id="room_nos"]');
    this.checkInDateField = page.locator('//input[@id="datepick_in"]');
    this.checkOutDateField = page.locator('//input[@id="datepick_out"]');
    this.adultsPerRoomDropdown = page.locator('//select[@id="adult_room"]');
    this.childrenPerRoomDropdown = page.locator('//select[@id="child_room"]');
    this.searchButton = page.locator('//input[@id="Submit"]');
  }
  async selectLocation(location) {
    await this.locationDropdown.selectOption(location);
  }
  async selectHotel(hotel) {
    await this.hotelsDropdown.selectOption(hotel);
  }
  async selectRoomType(roomType) {
    await this.roomTypeDropdown.selectOption(roomType);
  }
  async selectNumberOfRooms(numberOfRooms) {
    await this.numberOfRoomsDropdown.selectOption(numberOfRooms);
  }
  async enterCheckInDate(date) {
    await this.checkInDateField.clear();
    await this.checkInDateField.fill(date);
  }
  async enterCheckOutDate(date) {
    await this.checkOutDateField.clear();
    await this.checkOutDateField.fill(date);
  }
  async selectAdultsPerRoom(adults) {
    await this.adultsPerRoomDropdown.selectOption(adults);
  }
  async selectChildrenPerRoom(children) {
    await this.childrenPerRoomDropdown.selectOption(children);
  }
  async clickSearch() {
    await this.searchButton.click();
  }
  async searchHotel(details) {
    await this.selectLocation(details.location);
    await this.selectHotel(details.hotel);
    await this.selectRoomType(details.roomType);
    await this.selectNumberOfRooms(details.numberOfRooms);
    await this.enterCheckInDate(details.checkInDate);
    await this.enterCheckOutDate(details.checkOutDate);
    await this.selectAdultsPerRoom(details.adultsPerRoom);
    await this.selectChildrenPerRoom(details.childrenPerRoom);
    await this.clickSearch();
  }
}
