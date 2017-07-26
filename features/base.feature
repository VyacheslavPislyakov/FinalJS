Feature: Basic test

	$Scenario: Check availability Dealers near me
		Given I am on "home" page
		Then I submit on Locate a Dealer
		When I submit my location
		Then I should see a list of 2 Dealers near me
		And I should see the name of the first Dealer would be "Town Ford Lincoln"

    Scenario: Base test 2
        Given I am on "home" page
        When I should on Shopping Planner
        When I should build the car
        Then I check "EcoBoost"
        Then I check "SUV & Crossover"
        Then I should choose "EXPLORER"
        When I should insert ZIP CODE "14092"
        Then I should see Platinum by 49,930
