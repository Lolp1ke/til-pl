import { Token, TokenList, TokenType, TokenUtil } from "../token";
import { RootNode } from "../AST/root/root.node";
import { NumberNode } from "../AST/type/number/number.node";
import { StringNode } from "../AST/type/string/string.node";

export class Parser {
	tokens: Token[];
	pos: number = 0;
	scope: object = {};
	private tokenList = new TokenList();
	private tokenUtil = new TokenUtil();

	constructor(tokens: Token[]) {
		this.tokens = tokens;
	}

	// private match(...tokenTypes: TokenType[]): null | Token {
	// 	if (this.pos < this.tokens.length) {
	// 		const token = this.tokens[this.pos];
	//
	// 		if (tokenTypes.find((tokenType) => tokenType.name === token.type.name)) {
	// 			this.pos += 1;
	// 			console.log(token);
	// 			return token;
	// 		}
	// 	}
	// 	return null;
	// }
	//
	// private require(...tokenTypes: TokenType[]): Token {
	// 	const token = this.match(...tokenTypes);
	// 	if (!token) throw new SyntaxError(`Error at position ${this.pos} expecting ${tokenTypes[0].name}`);
	//
	// 	return token;
	// }

	private node() {}

	private print() {}

	private variable() {
		const token = this.tokenUtil.match(this.pos, this.tokens, ...[this.tokenList.CONST, this.tokenList.LET]);
		if (!token) return this.log();
		this.pos += 1;

		for (const tokenType of [this.tokenList.COLON, this.tokenList.TYPE, this.tokenList.VARIABLE]) {
			this.tokenUtil.require(this.pos, this.tokens, tokenType);
			this.pos += 1;
		}
	}

	private value() {
		const number = this.tokenUtil.match(this.pos, this.tokens, this.tokenList.NUMBER);
		if (number) return new NumberNode(number);

		const string = this.tokenUtil.match(this.pos, this.tokens, this.tokenList.STRING);
		if (string) return new StringNode(string);

		const variable = this.tokenUtil.match(this.pos, this.tokens, this.tokenList.VARIABLE);
		if (variable) return variable;
	}
	private log() {}

	expression() {
		this.variable();
		// const token = this.match(new TokenList().CONST, new TokenList().LET);
		// if (!token) {
		// 	// const;
		// }
		// this.pos -= 1;
		// const variable = this.match(new TokenList().VARIABLE);
		// if (!variable) {
		// 	throw new Error(`At postion ${this.pos} must be a variable`);
		// }
		// if (token.type.name === new TokenList().CONST.name) {
		// }
	}

	public code() {
		const root = new RootNode();

		while (this.pos < this.tokens.length) {
			// const nodeLine = this.expression();
			this.tokenUtil.require(this.pos, this.tokens, this.tokenList.SEMICOLON);
			this.pos += 1;
			// root.addNode(nodeLine);
		}
	}
}
