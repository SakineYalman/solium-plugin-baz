"use strict";

const STATE_VISIBILITY_MODIFIERS = new Set(["public", "internal", "private"]);

module.exports = {

    meta: {
        docs: {
            recommended: true,
            type: "warning",
			description: "Encourage user to explicitly specify visibility of state"
        },

        schema: [],
        //fixable: "code"
    },

    create(context) {
        function reportStateIfNoVisibilitySpecified(emitted) {
            if (emitted.exit) { return; }
/*
            function hasAVisibilityModifier(modifierList) {
                for (let modif of modifierList) {
                    if (STATE_VISIBILITY_MODIFIERS.has(modif.name)) {
                        return true;
                    }
                }

                return false;
            }

            const {node} = emitted;
*/
            /**
             * If returnParams attr exists, insert visibility right before its node.
             * If doesn't exist (is null), then:
             *   If function body is null (ie func is abstract), insert vis right before the ending semicolon
             *   Else insert it right before body (BlockStatement node)
             */
  /*          function fix(fixer) {
                const DEFAULT_VIS = "public";

                if (node.returnParams !== null) {
                    return fixer.insertTextAt(node.returnParams.end, ` ${DEFAULT_VIS}`);
                }

                if (node.is_abstract) {
                    // No BlockStatement node ahead
                    return fixer.insertTextAt(node.end-1, ` ${DEFAULT_VIS}`);
                }

                // TODO: check whether we actually require the spaces on both of public's sides below.
                // Give space only if needed, otherwise it just creates extra (ugly) whitespace.
                return fixer.insertTextBefore(node.body, ` ${DEFAULT_VIS} `);
            }
			// (node.modifiers === null || !hasAVisibilityModifier(node.modifiers)) && context.report({
  */          context.report({
                node: emitted.node,
               // fix,${node.name} 
                message: `No visibility specified explicitly for state.`
            });
        }

        return {
            StateDeclaration: reportStateIfNoVisibilitySpecified
        };
    }

};
