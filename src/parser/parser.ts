import { Token, TokenList, TokenUtil } from "../token";
import { RootNode } from "../AST/root/root.node";
import { NumberNode } from "../AST/type/number/number.node";
import { StringNode } from "../AST/type/string/string.node";
import { BooleanNode } from "../AST/type/boolean/boolean.node";
import { VariableNode } from "../AST/variable/variable.node";

export class Parser {
	tokens: Token[];
	pos: number = 0;
	scope: object = {};
	private tokenList = new TokenList();
	private tokenUtil = new TokenUtil();

	constructor(tokens: Token[]) {
		this.tokens = tokens;
	}

	private node() {}

	private variable() {
		const token = this.tokenUtil.match(this.pos, this.tokens, ...[this.tokenList.CONST, this.tokenList.LET]);
		if (!token) return this.log();
		this.pos += 1;

		for (const tokenType of [this.tokenList.COLON, this.tokenList.TYPE, this.tokenList.VARIABLE]) {
			this.tokenUtil.require(this.pos, this.tokens, tokenType);
			this.pos += 1;
		}

		return this.value();
	}
	private log() {
		const log = this.tokenUtil.require(this.pos, this.tokens, this.tokenList.LOG);
		if (!log) throw new SyntaxError(`${this.pos}-sózde qate bar, bul {aınymaly} nemese {korset} bolýy kerek`);
	}

	private value() {
		const number = this.tokenUtil.match(this.pos, this.tokens, this.tokenList.NUMBER);
		if (number) return new NumberNode(number);

		const string = this.tokenUtil.match(this.pos, this.tokens, this.tokenList.STRING);
		if (string) return new StringNode(string);

		const boolean = this.tokenUtil.match(this.pos, this.tokens, this.tokenList.BOOLEAN);
		if (boolean) return new BooleanNode(boolean);

		const variable = this.tokenUtil.match(this.pos, this.tokens, this.tokenList.VARIABLE);
		if (variable) return new VariableNode(variable);
	}

	expression() {
		const variableNode = this.variable();
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
