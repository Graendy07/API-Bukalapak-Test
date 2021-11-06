$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/jsonPlaceholder.feature");
formatter.feature({
  "name": "Check data-type and the response with input data",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@AllTesting"
    }
  ]
});
formatter.scenario({
  "name": "User validate data is correct",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@AllTesting"
    },
    {
      "name": "@Testing1"
    }
  ]
});
formatter.step({
  "name": "user send GET request to without authentication and param",
  "keyword": "Given "
});
formatter.match({
  "location": "steps.ApiRequestSteps.user_send_GET_request_to_without_authentication_and_param()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user analyze the response",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.ApiRequestSteps.user_analyze_the_response()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user see status code is 200 \"OK\"",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.ApiRequestSteps.user_see_status_code_is(java.lang.Integer,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validate response is same with json schema in \"testData/response.json\"",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.ApiRequestSteps.user_validate_response_is_same_with_json_schema_in(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user see below data is correct as Integer :",
  "rows": [
    {},
    {}
  ],
  "keyword": "And "
});
formatter.match({
  "location": "steps.ApiRequestSteps.user_see_below_data_is_correct_as_number(io.cucumber.datatable.DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user see below data is correct as string :",
  "rows": [
    {},
    {}
  ],
  "keyword": "And "
});
formatter.match({
  "location": "steps.ApiRequestSteps.user_see_below_data_is_correct_as_string(io.cucumber.datatable.DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Post and check the response",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@AllTesting"
    },
    {
      "name": "@Testing2"
    }
  ]
});
formatter.step({
  "name": "user send POST request to without authentication and param",
  "keyword": "Given "
});
formatter.match({
  "location": "steps.ApiRequestSteps.user_send_POST_request_to_without_authentication_and_param()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user analyze the response",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.ApiRequestSteps.user_analyze_the_response()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user see status code is 201 \"Created\"",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.ApiRequestSteps.user_see_status_code_is(java.lang.Integer,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validate response is same with json schema in \"testData/response2.json\"",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.ApiRequestSteps.user_validate_response_is_same_with_json_schema_in(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validate the body is match",
  "keyword": "And "
});
formatter.match({
  "location": "steps.ApiRequestSteps.user_validate_the_body_is_match()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user see below data is correct as Integer :",
  "rows": [
    {}
  ],
  "keyword": "And "
});
formatter.match({
  "location": "steps.ApiRequestSteps.user_see_below_data_is_correct_as_number(io.cucumber.datatable.DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user see below data is correct as string :",
  "rows": [
    {},
    {}
  ],
  "keyword": "And "
});
formatter.match({
  "location": "steps.ApiRequestSteps.user_see_below_data_is_correct_as_string(io.cucumber.datatable.DataTable)"
});
formatter.result({
  "status": "passed"
});
});