Feature: Playwright Home Page

    Scenario: Check title
        Given I am on Playwright home page
        Then I see in title "Playwright"

    Scenario Outline: Check get started
        Given I am on Playwright home page
        When I click link "<link>"
        And I click the link of "How to install Playwright"
        Then I see in title "<title>"

    Examples:
        | link          | title        |
        | Get started   | Installation |    
  