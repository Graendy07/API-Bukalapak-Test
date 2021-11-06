package steps;

import io.cucumber.datatable.DataTable;
import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.restassured.http.ContentType;
import io.restassured.path.json.JsonPath;
import io.restassured.response.Response;
import org.json.simple.JSONObject;
import org.testng.Assert;
import java.util.HashMap;
import java.util.Map;
import static io.restassured.RestAssured.given;
import static io.restassured.module.jsv.JsonSchemaValidator.matchesJsonSchemaInClasspath;


public class ApiRequestSteps {

    public Response response;
    public JsonPath jsonPath;
    private String key = "";


    @Given("user send GET request to without authentication and param")
    public void user_send_GET_request_to_without_authentication_and_param() {
                response =
                        given()
                        .when()
                        .get("https://jsonplaceholder.cypress.io/posts")
                        .then()
                        .statusCode(200)
                        .extract().response();
        }

    @Then("user analyze the response")
    public void user_analyze_the_response() {
        String json = response.asString();
        jsonPath = new JsonPath(json);
        System.out.println("===== ANALYSE RESPONSE BEGIN =====" + "\n" + json + "\n" + "===== ANALYSE RESPONSE END =====");
    }

    @Then("user see status code is {int} {string}")
    public void user_see_status_code_is(Integer code, String msg) {
        Assert.assertEquals(response.getStatusCode(), code.intValue(), "Status code didn't match");
        Assert.assertEquals(response.getStatusLine().substring(13), msg, "Severity doesn't match");
    }

    @And("user see below data is correct as number/integer/Integer :")
    public void user_see_below_data_is_correct_as_number(DataTable dataTable) {
        Integer value;
        String json = response.asString();
        JsonPath jsonData = new JsonPath(json);
        Map<String, String> signForms = dataTable.asMap(String.class, String.class);
        for (Map.Entry<String, String> field : signForms.entrySet()) {
            key = field.getKey();
                value = Integer.valueOf(field.getValue());
                Assert.assertEquals(jsonData.get(key), value, key + " is not " + value);
            }
    }

    @And("user see below data is correct as string/text :")
    public void user_see_below_data_is_correct_as_string(DataTable dataTable) {
        String value;
        String json = response.asString();
        JsonPath jsonData = new JsonPath(json);
        Map<String, String> signForms = dataTable.asMap(String.class, String.class);
        for (Map.Entry<String, String> field : signForms.entrySet()) {
            key = field.getKey();
            value = String.valueOf(field.getValue());
            Assert.assertEquals(jsonData.get(key), value, key + " is not " + value);
        }
    }

    @Then("user validate response is same with json schema in {string}")
    public void user_validate_response_is_same_with_json_schema_in(String path) {
        response.then().assertThat().body(matchesJsonSchemaInClasspath(path));
    }

    @And("user send POST request to without authentication and param")
    public void user_send_POST_request_to_without_authentication_and_param(){
        Map<String, Object> body = new HashMap<>();
        body.put("title", "recommendation");
        body.put("body", "motorcycle");
        body.put("userId", 12);

        JSONObject request = new JSONObject(body);
        System.out.println("JSON request is "+request);

        request.put("title", "recommendation");
        request.put("body", "motorcycle");
        request.put("userId", 12);

        response =
            given()
                    .contentType(ContentType.JSON)
                    .accept(ContentType.JSON)
                    .body(request.toJSONString())
                .when()
                .post("https://jsonplaceholder.cypress.io/posts")
                .then()
                .statusCode(201)
                .extract().response();

    }

    @And("user validate the body is match")
    public void user_validate_the_body_is_match(){
        Assert.assertEquals(response.getBody().jsonPath().get("title"), "recommendation");
        Assert.assertEquals(response.getBody().jsonPath().get("body"), "motorcycle");
        Assert.assertEquals(response.getBody().jsonPath().getInt("userId"), 12);
     }

}