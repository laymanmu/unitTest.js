
## uniTest.js

A single javascript file for testing your actual DOM.

### Why?

I wanted something simple to ensure that my client code was getting wired as expected with the DOM (no nulls).
Also I wanted to test some results of how data is displayed, make sure elements have expected classes, etc...

### Usage:

1. create a javascript object with some tests (functions that begin with "test" will get called):
  ```javascript
  var ClientTest = {
    testUI: function() {
      unitTest.equal(1, 2, "nums should match");
    },
    testDownloadLink: function() {
      unitTest.equal(2, 2, "nums should match");
    }
  };
  ```

2. include unitTest.js along with your test objects in your html:
  ```html
  <script src="unitTest.js"></script>
  <script src="client_test.js"></script>
  ```

3. load your web page, then run the tests in the browser console (press CTRL-SHIFT-I, click console):
  ```javascript
  unitTest.run(ClientTest)
  ```

### Output example:
  ```
  testUI:
    Passed: 9 test(s)

  testJobDefinitionsUI:
    Passed: 18 test(s)

  testConditionsUI:
    Passed: 8 test(s)

  testMailsUI:
    Passed: 9 test(s)

  testResourcesUI:
    Passed: 7 test(s)

  testDetailsSectionUI:
    Passed: 1 test(s)

  testResultsSectionUI:
    Passed: 3 test(s)

  testOnJobDefinitionsNavItemClick:
    Failed: threw error:
      Cannot read property 'id' of undefined

  -= Final Results =-
    total asserts: 56
    total passed:  55
    total failed:  1
  ```

### Assertion functions:

  ```javascript
  unitTest.equal(value1, value2, failMessage);
  unitTest.notEqual(value1, value2, failMessage);
  unitTest.null(value, failMessage);
  unitTest.notNull(value, failMessage);
  unitTest.idExists(id, failMessage);
  unitTest.idHasClass(id, singleClassName, failMessage);
  unitTest.idNotHasClass(id, singleClassName, failMessage);
  unitTest.idDisplayIs(id, displayStyle, failMessage);    //<- for example, displayStyle = 'none' 
  unitTest.idDisplayIsNot(id, displayStyle, failMessage);
  ```
