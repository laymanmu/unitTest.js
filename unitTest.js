
var unitTest = {

  assertCount: 0,
  passCount: 0,
  failCount: 0,

  equal: function(val1, val2, failMsg) {
    unitTest.assertCount++;
    if (val1 == val2) {
      unitTest.pass();
    } else {
      unitTest.fail(failMsg);
    }
  },

  notEqual: function(val1, val2, failMsg) {
    unitTest.assertCount++;
    if (val1 == val2) {
      unitTest.fail(failMsg);
    } else {
      unitTest.pass();
    }
  },

  null: function(value, failMsg) {
    unitTest.assertCount++;
    if (value == null) {
      unitTest.pass();
    } else {
      unitTest.fail(failMsg);
    }
  },

  notNull: function(value, failMsg) {
    unitTest.assertCount++;
    if (value == null) {
      unitTest.fail(failMsg);
    } else {
      unitTest.pass();
    }
  },

  fail: function(failMsg) {
    unitTest.failCount++;
    console.log("  Failed: "+ failMsg);
  },

  pass: function() {
    unitTest.passCount++;
  },

  run: function(object) {
    var keys = Object.keys(object);
    for (var i=0; i<keys.length; i++) {
      var key = keys[i];
      if (key.substring(0,4) == "test") {
        console.log(key +":");
        var origFailCount = unitTest.failCount;
        var origPassCount = unitTest.passCount;
        object[key]();
        if (origFailCount == unitTest.failCount) {
          if (origPassCount == unitTest.passCount) {
            console.log(" No tests found!") ;
          } else {
            var passCount = unitTest.passCount - origPassCount;
            console.log("  Passed: "+ passCount +" test(s)");
          }
        } else {
          var failCount = unitTest.failCount - origFailCount;
          console.log("  Failed: "+ failCount +" test(s)");
        }
      }
    }
    console.log("-= Final Results =-")
    console.log("  total asserts: "+ unitTest.assertCount);
    console.log("  total passed:  "+ unitTest.passCount);
    console.log("  total failed:  "+ unitTest.failCount);
  }

};
