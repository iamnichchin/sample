Feature: User logging in

Scenario: user will login with correct credentials
Given user is in main page
When user clicks login
And user types on the right username field
And user types on the right password field
Then user is back to the home page but with the account logged in

Scenario: user will login with wrong username
Given user is in main page
When user clicks login
And user types on the wrong username field
And user types on the right password field
Then user should see an error message


Scenario: user will login with wrong password
Given user is in main page
When user clicks login
And user types on the right username field
And user types on the wrong password field
Then user should see an error message