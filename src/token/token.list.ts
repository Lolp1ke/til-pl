import { TokenType } from "./token.type";

export class TokenList {
	// Operators
	ADD: TokenType = new TokenType("qosý", /^[+]/g);
	MINUS: TokenType = new TokenType("mınýs", /^-/g);
	MULTIPLICATION: TokenType = new TokenType("kóbeıtý", /^[*]/g);
	DIVISION: TokenType = new TokenType("bólý", /^\//g);
	ASSIGN: TokenType = new TokenType("teń", /^=/g);

	// built in commands
	LOG: TokenType = new TokenType("kórset", /^korset/g);

	// delimiters
	SEMICOLON: TokenType = new TokenType("núkteli útir", /^;/g);
	COLON: TokenType = new TokenType("qos núkte", /^:/);
	SPACE: TokenType = new TokenType("bos oryn", /^[ \t\n\r]/g);
	LEFT_BRACKET: TokenType = new TokenType("sol jaq jaqsha", /^[(] /g);
	RIGHT_BRACKET: TokenType = new TokenType("oń jaq jaqsha", /^[)] /g);

	// identifier
	CONST: TokenType = new TokenType("turaqty", /^turaqty*/);
	LET: TokenType = new TokenType("bolsyn", /^bolsyn*/);
	VARIABLE: TokenType = new TokenType("aınymaly", /^[_A-Z]*/g);
	TYPE: TokenType = new TokenType("túri", /^(jol|san|logika)*/);

	// values
	NUMBER: TokenType = new TokenType("san", /^[.\d]*/g);
	STRING: TokenType = new TokenType("jol", /^[a-z]*/g);
	BOOLEAN: TokenType = new TokenType("logika", /^(durys|burys)*/g);
}
