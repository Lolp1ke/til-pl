import { TokenType } from "./";

export class Token {
	readonly type: TokenType;
	readonly value: string | number | boolean;
	private readonly pos: number;

	constructor(type: TokenType, value: string | boolean, pos: number) {
		this.type = type;
		this.value = value;
		this.pos = pos;
	}
}
