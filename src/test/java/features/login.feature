Feature: Login
	As a user I want a login page so that only authentic users can login

  Scenario: Authentic users will be able to login
Given a user with valid crendentials
When user goes to TechFios Login Page
Then TechFios Login page should display
When user enter login information
Then Submit button should be enabled 
When user selects the Submit Button 
Then Dashboard Page should display
