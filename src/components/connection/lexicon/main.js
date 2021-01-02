const LEXICON = {};

LEXICON.SubscribeRorOperationSpace = class extends Muffin.Lexeme {
	static name = "Subscribe ROR Operation-Space";

	static schema = {
    	"subscribe": "@drona/ror.agent|||ror-operation-update"
	}
}

LEXICON.SubscribeRorState = class extends Muffin.Lexeme {
	static name = "Subscribe ROR State";

	static schema = {
    	"subscribe": "@drona/ror.agent|||ror-state-update"
	}
}

LEXICON.GetEnvInfo = class extends Muffin.Lexeme {

	static schema = {
		operation: "GetInfo",
        token: ""
	}
}


export {
	LEXICON
}