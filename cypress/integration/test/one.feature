Feature: Access to Web Staging

Scenario: user is in safer gaming
Given user is in main page
When user clicks accept
And user clicks on the safer gaming
Then user is in safer gaming page

Scenario: user going to sportsbook page
Given user is in safer gaming
When user clicks sportsbook
Then user is in sportsbook page

Scenario: user going to casino page
Given user is in safer gaming
When user clicks casino
Then user is in casino page

Scenario: user going to pragmatic play
Given user is in casino page
When user clicks pragmatic play
Then user is in pragmatic play