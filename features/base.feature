Feature: Basic test

	Scenario: Check availability Dealers near me
		Given I am on "home" page
		Then I submit on Locate a Dealer
		When I submit my location
		Then I should see a list of "14 Dealers Near You"
		And I should see the name of the first Dealer would be "Basil Ford of Niagara Falls"

    Scenario: Check availability car and there cost it
        Given I am on "build" page
        #When I should click build
        Then I check EcoBoost
        Then I check SUV & Crossover
        Then I should choose EXPLORER
        When I should insert ZIP CODE 14304
        Then I should see car
        Then I should see "Platinum" by "$53,235"


	Scenario: Compare two modification of the car
        Given I am on "compare" page
        #When I should click Shop
		When I check EcoBoost for compare
		When I check SUV & Crossover for compare
		Then I should choose EXPLORER for compare
		When I should choose second car for compare
		When I should choose button for compare
		Then I should see results of compare
