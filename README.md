
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

4. output looks like this:
  ```
  testUI:
     Failed: nums should match
     Failed: 1 test(s)
   testDownloadLink:
     Passed: 1 test(s)
   -= Final Results =-
     total asserts: 2
     total passed:  1
     total failed:  1
  ```

### Assertion functions:

  ```javascript
  unitTest.equal(value1, value2, failMessage);
  unitTest.notEqual(value1, value2, failMessage);
  unitTest.null(value, failMessage);
  unitTest.notNull(value, failMessage);
  ```
