import { TokenType } from "./";

export class Token {
	readonly type: TokenType;
	readonly text: string | boolean;
	private readonly pos: number;

	constructor(type: TokenType, text: string | boolean, pos: number) {
		this.type = type;
		this.text = text;
		this.pos = pos;
	}
}
