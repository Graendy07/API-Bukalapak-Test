@AllTesting

Feature: Check data-type and the response with input data

  @Testing1
  Scenario: User validate data is correct
    Given user send GET request to without authentication and param
    Then user analyze the response
    Then user see status code is 200 "OK"
    Then user validate response is same with json schema in "testData/response.json"
    And user see below data is correct as Integer :
        | userId[99] |  10  |
        | id[99]     |  100 |
    And user see below data is correct as string :
        | title[0]   |  sunt aut facere repellat provident occaecati excepturi optio reprehenderit  |
        | body[0]    |  quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto |

  @Testing2
  Scenario: Post and check the response
    Given user send POST request to without authentication and param
    Then user analyze the response
    Then user see status code is 201 "Created"
    Then user validate response is same with json schema in "testData/response2.json"
    And user validate the body is match
    And user see below data is correct as Integer :
      | userId  |  12  |
    And user see below data is correct as string :
      | title   | recommendation  |
      | body    | motorcycle      |