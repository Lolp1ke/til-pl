import { Token, TokenList, TokenType } from "../token";

import { Node } from "../AST/node";
import { RootNode } from "../AST/root/root.node";
import { StringNode } from "../AST/type/string/string.node";
import { NumberNode } from "../AST/type/number/number.node";
import { BooleanNode } from "../AST/type/boolean/boolean.node";
import { VariableNode } from "../AST/variable/variable.node";
import { UnaryNode } from "../AST/operator/unary/unary.node";
import { BinaryNode } from "../AST/operator/binary/binary.node";

export class Parser {
	private pos: number = 0;
	private readonly tokens: Token[];
	private scope: any = {};
	private readonly tokenList = new TokenList();

	constructor(tokens: Token[]) {
		this.tokens = tokens;
	}

	private match(...tokenTypes: TokenType[]): Token | null {
		if (this.pos < this.tokens.length) {
			const token = this.tokens[this.pos];
			if (tokenTypes.find((type) => type.name === token.type.name)) {
				this.pos += 1;
				return token;
			}
		}
		return null;
	}

	private require(...tokenTypes: TokenType[]): Token {
		const token = this.match(...tokenTypes);
		if (!token) throw new SyntaxError(`${this.pos}-sózde qate bar, {${tokenTypes[0].name}} kerek`);

		return token;
	}

	private value(): Node {
		const number = this.match(this.tokenList.NUMBER);
		if (number) return new NumberNode(number);

		const string = this.match(this.tokenList.STRING);
		if (string) return new StringNode(string);

		const boolean = this.match(this.tokenList.BOOLEAN);
		if (boolean) return new BooleanNode(boolean);

		const variable = this.match(this.tokenList.VARIABLE);
		if (variable) return new VariableNode(variable);

		throw new SyntaxError(`${this.pos}-sózde qate bar, {shama} nemese {aınymaly} kerek`);
	}

	private log(): Node {
		const log = this.match(this.tokenList.LOG);
		if (log) return new UnaryNode(log, this.expression());

		throw new SyntaxError(`${this.pos}-sózde qate bar, {kórset} kerek`);
	}

	private parentheses(): Node {
		if (this.match(this.tokenList.LEFT_BRACKET)) {
			const node = this.expression();
			this.require(this.tokenList.RIGHT_BRACKET);
			return node;
		} else return this.value();
	}

	private expression(): Node {
		const operators = [
			this.tokenList.ADD,
			this.tokenList.MINUS,
			this.tokenList.MULTIPLICATION,
			this.tokenList.DIVISION,
		];

		let leftNode = this.parentheses();
		let operator = this.match(...operators);

		while (operator) {
			const rightNode = this.parentheses();
			leftNode = new BinaryNode(operator, rightNode, leftNode);
			operator = this.match(...operators);
		}

		return leftNode;
	}

	private parse(): Node {
		if (!this.match(this.tokenList.CONST, this.tokenList.LET)) return this.log();
		this.require(this.tokenList.COLON);
		this.require(this.tokenList.TYPE);

		let variableNode = this.value();
		const assignOperator = this.match(this.tokenList.ASSIGN);
		if (assignOperator) {
			const rightNode = this.expression();
			return new BinaryNode(assignOperator, rightNode, variableNode);
		}
		throw new SyntaxError(`${this.pos}-sózde qate bar, {teń} kerek`);
	}

	public code(): Node {
		const root = new RootNode();

		while (this.pos < this.tokens.length) {
			const codeLine = this.parse();
			this.require(this.tokenList.SEMICOLON);
			root.addNode(codeLine);
		}
		return root;
	}

	public run(node: Node) {
		if (node instanceof NumberNode) return Number(node.token.text);
		if (node instanceof StringNode) return String(node.token.text);
		if (node instanceof BooleanNode) return Boolean(node.token.text);

		if (node instanceof UnaryNode) {
			switch (node.operator.type.name) {
				case this.tokenList.LOG.name:
					return console.log(this.run(node.operand));
			}
		}

		if (node instanceof BinaryNode) {
			switch (node.operator.type.name) {
				case this.tokenList.ADD.name:
					return this.run(node.left) + this.run(node.right);

				case this.tokenList.MINUS.name:
					return this.run(node.left) - this.run(node.right);

				case this.tokenList.MULTIPLICATION.name:
					return this.run(node.left) * this.run(node.right);

				case this.tokenList.DIVISION.name:
					return this.run(node.left) / this.run(node.right);

				case this.tokenList.ASSIGN.name:
					const result = this.run(node.right);
					const variableNode = node.left;
					this.scope[variableNode.token.text] = result;
					return result;
			}
		}

		if (node instanceof VariableNode) {
			if (this.scope[node.token.text]) {
				return this.scope[node.token.text];
			} else throw new Error(`{${node.token.text}} aınymaly tabylmady`);
		}

		if (node instanceof RootNode)
			return node.nodes.forEach((_node) => {
				this.run(_node);
			});

		throw new Error(`${this.pos}, qandaı da bir qate bar!`);
	}
}
