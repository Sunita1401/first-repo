package testRunner;

import org.junit.runner.RunWith;
import cucumber.api.junit.Cucumber;
import cucumber.api.CucumberOptions;



@RunWith(Cucumber.class)
@CucumberOptions(features="\\Users\\kdkas\\Desktop\\practice selenium\\BddFrameWork\\src\\test\\java\\features\\login.feature",
glue = {"steps" }//Name of package should be exact , feature file is run with the help of step definitions
 
)

public class LoginRunner {

}
