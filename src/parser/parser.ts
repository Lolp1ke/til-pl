import { Token, TokenList, TokenType } from "../token";
import { Node } from "../AST/node";
import { RootNode } from "../AST/root/root.node";

export class Parser {
	tokens: Token[];
	pos: number = 0;
	scope: object = {};

	constructor(tokens: Token[]) {
		this.tokens = tokens;
	}

	private match(...tokenTypes: TokenType[]): null | Token {
		if (this.pos < this.tokens.length) {
			const token = this.tokens[this.pos];

			if (tokenTypes.find((tokenType) => tokenType.name === token.type.name)) {
				this.pos += 1;
				console.log(token);
				return token;
			}
		}
		return null;
	}

	private require(...tokenTypes: TokenType[]): Token {
		const token = this.match(...tokenTypes);
		if (!token) throw new SyntaxError(`Error at position ${this.pos} expecting ${tokenTypes[0].name}`);

		return token;
	}

	private node() {}

	private print() {}

	private variable() {
		const token = this.match(new TokenList().CONST, new TokenList().LET);
		if (!token) {
		}
		// this.pos -= 1;

		this.require(new TokenList().COLON);
		this.require(new TokenList().TYPE);
		this.require(new TokenList().VARIABLE);

		// if (!this.match(new TokenList().COLON)) throw new Error(`There should be type identifier`);

		// const variable = this.match(new TokenList().VARIABLE);
		// if (!variable) {
		// 	throw new Error(`At position ${this.pos} must be a variable`);
		// }
	}

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

	public parse() {
		const root = new RootNode();

		while (this.pos < this.tokens.length) {
			// const nodeLine = this.expression();
			this.require(new TokenList().SEMICOLON);
			// root.addNode(nodeLine);
		}
	}
}
