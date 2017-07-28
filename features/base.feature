Feature: Basic test

	#Scenario: Check availability Dealers near me
		#Given I am on "home" page
		#Then I submit on Locate a Dealer
		#When I submit my location
		#Then I should see a list "of 96 results" of the Dealers near me
		#And I should see the name of the first Dealer would be "Basil Ford of Niagara Falls"

    #Scenario: Check availability car and there cost it
        #Given I am on "home" page
        #When I should click build
        #Then I check EcoBoost
        #Then I check SUV & Crossover
        #Then I should choose EXPLORER
        #When I should insert ZIP CODE 14304
        #Then I should see car
        #Then I should see "Platinum" by "$53,235"


	Scenario: Base test 3
        Given I am on "home" page
        When I should click Shop
		When I check EcoBoost for compare
		When I check SUV & Crossover for compare
		Then I should choose EXPLORER for compare
		When I should choose second car for compare
		When I should choose button for compare
		Then I should see results of compare







#Shop -> Compare Vehiles -> Escape 2017 -> 1 and 2 -> Compare -> Cost cars
