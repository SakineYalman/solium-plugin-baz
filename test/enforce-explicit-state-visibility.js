"use strict";

const Solium = require("solium"),
    { toContract } = require("./utils/wrappers");

const userConfig = {
    rules: {
        "baz/enforce-explicit-state-visibility": "error"
    }
};

describe("[RULE] enforce-explicit-state-visibility: Acceptances", function() {

    it("should accept some stuff and reject other stuff", function(done) {
        // Example from here:
        // http://solidity.readthedocs.io/en/develop/security-considerations.html#re-entrancy
        let code = " contract BlueBerry {\
			function foo () {\
			}\
		}",
            errors = Solium.lint(code, userConfig);

        errors.constructor.name.should.equal("Array");
        errors.length.should.equal(0);

        Solium.reset();
        done();
    });

});


/*

describe("[RULE] enforce-explicit-state-visibility: fixes", () => {

    it("should add default public visibility where none is specified", done => {
        let code = toContract(`
            uint a;
        `);
        let result = Solium.lintAndFix(code, userConfig);

        result.should.be.type("object");
        result.errorMessages.should.have.size(0);
        result.fixesApplied.should.have.size(0);
        result.fixedSourceCode.should.equal(toContract(`
            uint public a;
        `));


        code = toContract(`
            string a;
        `);
        result = Solium.lintAndFix(code, userConfig);

        result.should.be.type("object");
        result.errorMessages.should.have.size(0);
        result.fixesApplied.should.have.size(1);
        result.fixedSourceCode.should.equal(toContract(`
            string public a;
        `));


        code = toContract(`
            address a;
        `);
        result = Solium.lintAndFix(code, userConfig);

        result.should.be.type("object");
        result.errorMessages.should.have.size(0);
        result.fixesApplied.should.have.size(1);
        result.fixedSourceCode.should.equal(toContract(`
            address public a;
        `));


        code = toContract(`
            mapping(address => uint) shares;
        `);
        result = Solium.lintAndFix(code, userConfig);

        result.should.be.type("object");
        result.errorMessages.should.have.size(0);
        result.fixesApplied.should.have.size(1);
        result.fixedSourceCode.should.equal(toContract(`
            mapping(address => uint) public shares;
        `));        

        done();
    });

});*/

// TODO: Acceptance & Rejection tests
