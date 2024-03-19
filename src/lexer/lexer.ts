import { Token, TokenList, TokenType } from "../token";

export class Lexer {
	private readonly code: string;
	private pos: number = 0;
	tokens: Token[] = [];

	constructor(code: string) {
		this.code = code;
	}

	private next(): boolean {
		if (this.pos >= this.code.length) return false;

		const tokenTypes: TokenType[] = Object.values(new TokenList());

		for (let i: number = 0; i <= tokenTypes.length; i++) {
			const tokenType = tokenTypes[i];
			const token = this.code.substring(this.pos).match(tokenType.regexp);

			if (token && token[0]) {
				this.tokens.push(new Token(tokenType, token[0], this.pos));
				this.pos += token[0].length;
				return true;
			}
		}
	}

	public analysis(): Token[] {
		while (this.next()) { }

		this.tokens = this.tokens.filter((token) => token.type.name !== new TokenList().SPACE.name);
		return this.tokens;
	}
}
