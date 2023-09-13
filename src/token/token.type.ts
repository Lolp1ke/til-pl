export class TokenType {
	name: string;
	regexp: RegExp;

	constructor(name: string, regexp: RegExp) {
		this.name = name;
		this.regexp = regexp;
	}
}
