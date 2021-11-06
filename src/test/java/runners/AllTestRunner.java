package runners;

import io.cucumber.testng.AbstractTestNGCucumberTests;
import io.cucumber.testng.CucumberOptions;

@CucumberOptions(
        plugin = {"pretty","json:target/results/all/cucumber-report.json",  "html:target/results/all"},
        features = "src/test/resources/features",
        monochrome = true,
        glue = "steps",
        tags = {"@AllTesting"}
)
public class AllTestRunner extends AbstractTestNGCucumberTests
{

}
