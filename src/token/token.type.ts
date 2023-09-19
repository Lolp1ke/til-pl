export class TokenType {
	readonly name: string;
	readonly regexp: RegExp;

	constructor(name: string, regexp: RegExp) {
		this.name = name;
		this.regexp = regexp;
	}
}
