import { TokenType } from "./";

export class TokenList {
	// Operators
	readonly ADD: TokenType = new TokenType("qosý", /^[+]/g);
	readonly MINUS: TokenType = new TokenType("mınýs", /^-/g);

    readonly POWER: TokenType = new TokenType("dáreje", /^[*][*]/g);
    readonly REMAINLESS_DIVISION: TokenType = new TokenType("qaldyqsyz bólý", /^\/\//g);

    readonly MULTIPLICATION: TokenType = new TokenType("kóbeıtý", /^[*]/g);
	readonly DIVISION: TokenType = new TokenType("bólý", /^\//g);
    
    readonly ASSIGN: TokenType = new TokenType("teń", /^=/g);

	// built in commands
	readonly LOG: TokenType = new TokenType("kórset", /^korset/g);

	// delimiters
	readonly SEMICOLON: TokenType = new TokenType("núkteli útir", /^;/g);
	readonly COLON: TokenType = new TokenType("qos núkte", /^:/g);
	readonly SPACE: TokenType = new TokenType("bos oryn", /^[ \t\n\r]/g);
	readonly LEFT_BRACKET: TokenType = new TokenType("sol jaq jaqsha", /^[\\(]/g);
	readonly RIGHT_BRACKET: TokenType = new TokenType("oń jaq jaqsha", /^[\\)]/g);

	// identifier
	readonly CONST: TokenType = new TokenType("turaqty", /^turaqty*/g);
	readonly LET: TokenType = new TokenType("bolsyn", /^bolsyn*/g);
	readonly TYPE: TokenType = new TokenType("túri", /^(\bjol\b|\bsan\b|\blogika\b)*/g);
	readonly VARIABLE: TokenType = new TokenType("aınymaly", /^[_A-Z]*/g);

	// values
	readonly BOOLEAN: TokenType = new TokenType("logika", /^(\bdurys|\bburys)*/g);
	readonly NUMBER: TokenType = new TokenType("san", /^[.\d]*/g);
	readonly STRING: TokenType = new TokenType("jol", /^[a-z]*/g);
}
