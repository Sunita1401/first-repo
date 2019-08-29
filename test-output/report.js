$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/java/features/login.feature");
formatter.feature({
  "name": "Login",
  "description": "\tAs a user I want a login page so that only authentic users can login",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Authentic users will be able to login",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "a user with valid crendentials",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginSteps.a_user_with_valid_crendentials()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user goes to TechFios Login Page",
  "keyword": "When "
});
formatter.match({
  "location": "LoginSteps.user_goes_to_TechFios_Login_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "TechFios Login page should display",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.techfios_Login_page_should_display()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter login information",
  "keyword": "When "
});
formatter.match({
  "location": "LoginSteps.user_enter_login_information()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Submit button should be enabled",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.submit_button_should_be_enabled()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user selects the Submit Button",
  "keyword": "When "
});
formatter.match({
  "location": "LoginSteps.user_selects_the_Submit_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Dashboard Page should display",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.dashboard_Page_should_display()"
});
formatter.result({
  "status": "passed"
});
});