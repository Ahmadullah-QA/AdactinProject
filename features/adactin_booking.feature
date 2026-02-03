Feature: Hotel Booking In Adactin Website

  Background:
    Given user Navigates To The Website "https://adactinhotelapp.com/HotelAppBuild2/"

  @AdactinBooking
  Scenario Outline: Successful End-to-End Hotel Booking
    # --- Login ---
    When the user enters username as "<Username>"
    And the user enters password as "<Password>"
    And the user clicks the Login button
    Then the login should be successful and the Search Hotel page should be displayed
    # --- Search ---
    When the user Select The Hotel Location As "<Location>"
    And the user Select The Hotel As "<Hotel>"
    And the user Select Room Type As "<RoomType>"
    And the user Select Number of Rooms "<RoomCount>"
    And the user Select The Check In Date On "<CheckIn>"
    And the user Select The Check Out Date As "<CheckOut>"
    And the user Select The Adults Per Room "<Adults>"
    And also the user Select The Children per Room "<Children>"
    And the user Click On Search Button
    Then navigates To Select Hotel Page
    # --- Select ---
    When the user Selecting The Hotel by Clicking On Radio Button
    And the user Clicks On Continue
    Then navigates To Book A Hotel Page
    # --- Booking ---
    When the user Enter First Name As "<FirstName>"
    And the user Enter Last Name As "<LastName>"
    And the user Enter Billing Address "<Address>"
    And the user Enter Credit Card Number "<CardNo>"
    And the user Enter Credit Card Type As "<CardType>"
    And the user Enter Expiry Month "<ExpMonth>" and Year "<ExpYear>"
    And the user Enter CVV Number "<CVV>"
    And the user Click On Book Now Button
    Then navigates to Booking Confirmation Page
    # --- Itinerary & Logout ---
    When the user Click On Booked Itinerary
    Then the user Click On Logout Button
    And webpage Redirects To Logged out Successfully

    Examples:
      | Username | Password | Location  | Hotel          | RoomType     | RoomCount | CheckIn    | CheckOut   | Adults | Children | FirstName  | LastName | Address       | CardNo           | CardType    | ExpMonth | ExpYear | CVV |
      | AsFaizan | O51L5B   | Melbourne | Hotel Sunshine | Super Deluxe |         1 | 14/03/2026 | 16/03/2026 |      2 |        1 | Ahmadullah | A        | Brooklyn, NY. | 1234567890123456 | Master Card | July     |    2026 | 172 |
