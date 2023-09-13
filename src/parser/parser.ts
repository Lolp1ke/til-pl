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

	private match(...tokenTypes: TokenType[]): Token | null {
		if (this.pos < this.tokens.length) {
			const token = this.tokens[this.pos];

			if (tokenTypes.find((tokenType) => tokenType.name === token.type.name)) {
				this.pos += 1;
				return token;
			}
		}
		return null;
	}

	private require(...tokenTypes: TokenType[]): Token {
		const token = this.match();
		if (!token) throw new Error(`Error at position ${this.pos} expecting ${tokenTypes[0]}`);

		return token;
	}

	private node() {}

	private print() {}

	public parse() {
		const root = new RootNode();

		while (this.pos < this.tokens.length) {
			this.require(new TokenList().SEMICOLON);
		}
	}
}
