Feature: User logging in

Scenario: user will login with correct credentials
Given user is in main page
When user clicks login
And user clicks on the username 
And user types on the right username field
And user clicks on the password
And user types on the right passsword field
And user press enters
Then user is back to the home page but with the account logged in