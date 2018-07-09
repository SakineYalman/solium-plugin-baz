module.exports = {
    meta: {
        description: "Official Security-focused lint rules for Solium"
    },

    rules: {
		"enforce-explicit-state-visibility": require("./rules/enforce-explicit-state-visibility"),
        "no-send": require("./rules/no-send"),
		"foo": require("./rules/foo")
		
	}
};