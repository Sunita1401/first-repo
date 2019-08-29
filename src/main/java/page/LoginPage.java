package page;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class LoginPage {
	// initialize WebDriver
	WebDriver driver;
	// create the constructor and parameterize
	public LoginPage(WebDriver driver) { 
		this.driver = driver;		
	}
	// instantiate the web element 
	@FindBy (how=How.ID,using="username")
	WebElement Email;
	@FindBy (how=How.ID,using="password")
	WebElement Password;
	@FindBy (how=How.NAME,using="login")
	WebElement SignInButton;
	@FindBy(how=How.XPATH,using="//*[@id=\"page-wrapper\"]/div[2]/div/h2")
	WebElement PageTitle;
	
	//Creating the another method for functioning the webelement
	
	public void Login(String email, String password) {
		
		Email.sendKeys(email);	
		Password.sendKeys(password);
		//SignInButton.click();
	}

	public String getDisplayedTitle() {
				return driver.getTitle();
	}

	public boolean isSubmitButtonEnabled() {
		return SignInButton.isEnabled();
	}

	public void ClickOnSubmitButton() {
		 SignInButton.click();
		
	}

	public boolean isTitleDiplayed() {
		return PageTitle.isDisplayed();
	}

	
	
}
