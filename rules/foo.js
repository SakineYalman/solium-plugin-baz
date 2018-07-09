module.exports = {
	meta: {
        docs: {
            recommended: true,
            type: 'warning',
            description: 'Rule description'
        },
		
        schema: []
        
		},
        
		create: function (context) {
                                
			function inspectProgram (emitted) {
				if (emitted.exit) { return; }
                    
				context.report ({
					node: emitted.node,
					message: 'The rule baz/foo reported an error successfully. X'
					
				});
				
			}
			
			return {
                Program: inspectProgram
            };
		}
    

};
