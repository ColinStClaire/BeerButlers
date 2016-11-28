function testAssert() {
    //Test 1

    QUnit.assert( "Hello test", function(assert){
        assert.ok(1 == "1", "Passed!");
    });
}

testAssert();