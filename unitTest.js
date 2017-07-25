
var unitTest = {

  assertCount: 0,
  passCount: 0,
  failCount: 0,

  equal: function(val1, val2, failMsg) {
    unitTest.assertCount++;
    if (val1 == val2) {
      unitTest.pass();
    } else {
      var assertMsg = val1 +" != "+ val2;
      unitTest.fail(failMsg, assertMsg);
    }
  },

  notEqual: function(val1, val2, failMsg) {
    unitTest.assertCount++;
    if (val1 == val2) {
      var assertMsg = val1 +" == "+ val2;
      unitTest.fail(failMsg, assertMsg);
    } else {
      unitTest.pass();
    }
  },

  null: function(value, failMsg) {
    unitTest.assertCount++;
    if (value == null) {
      unitTest.pass();
    } else {
      var assertMsg = value +" is not null.";
      unitTest.fail(failMsg, assertMsg);
    }
  },

  notNull: function(value, failMsg) {
    unitTest.assertCount++;
    if (value == null) {
      var assertMsg = value +" is null.";
      unitTest.fail(failMsg, assertMsg);
    } else {
      unitTest.pass();
    }
  },

  idHasClass: function(id, className, failMsg) {
    unitTest.assertCount++;
    var e = document.getElementById(id);
    var classes = e.className.split(" ");
    for (var i=0; i<classes.length; i++) {
      if (classes[i] == className) {
        unitTest.pass();
        return;
      }
    }
    var assertMsg = "element with id '"+ id +"' does not have class "+ className;
    unitTest.fail(failMsg, assertMsg);
  },

  idNotHasClass: function(id, className, failMsg) {
    unitTest.assertCount++;
    var e = document.getElementById(id);
    var classes = e.className.split(" ");
    for (var i=0; i<classes.length; i++) {
      if (classes[i] == className) {
        var assertMsg = "element with id '"+ id +"' does have class "+ className;
        unitTest.fail(failMsg);
        return;
      }
    }
    unitTest.pass();
  },

  fail: function(failMsg, assertMsg) {
    unitTest.failCount++;
    console.log("  Failed: "+ failMsg);
    console.log("    "+ assertMsg)
  },

  pass: function() {
    unitTest.passCount++;
  },

  run: function(object) {
    var keys = Object.keys(object);
    for (var i=0; i<keys.length; i++) {
      var key = keys[i];
      if (key.substring(0,4) == "test") {
        console.log("");
        console.log(key +":");
        var origFailCount = unitTest.failCount;
        var origPassCount = unitTest.passCount;
        try {
          object[key]();
        } catch(err) {
          unitTest.fail("threw error:", err.message);
        }
        if (origFailCount == unitTest.failCount) {
          if (origPassCount == unitTest.passCount) {
            console.log(" No tests found!") ;
          } else {
            var passCount = unitTest.passCount - origPassCount;
            console.log("  Passed: "+ passCount +" test(s)");
          }
        }
      }
    }
    console.log("");
    console.log("-= Final Results =-")
    console.log("  total asserts: "+ unitTest.assertCount);
    console.log("  total passed:  "+ unitTest.passCount);
    console.log("  total failed:  "+ unitTest.failCount);
  }

};
