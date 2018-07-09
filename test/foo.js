/**
 * @fileoverview Tests for the no-send rule
 * @author Tristan Homsi <tristanhomsi@gmail.com>
 */

"use strict";

let Solium = require("solium");

let userConfig = {
    rules: {
        "baz/foo": "error"
    }
};

describe("[RULE] foo: Acceptances", function() {

    it("should accept some stuff and reject other stuff", function(done) {
        // Example from here:
        // http://solidity.readthedocs.io/en/develop/security-considerations.html#re-entrancy
        let code = " contract BlueBerry {\
			function foo () {\
			}\
		}",
            errors = Solium.lint(code, userConfig);

        errors.constructor.name.should.equal("Array");
        errors.length.should.equal(1);

        Solium.reset();
        done();
    });

});
