import { Node } from "../../node";
import { type Token } from "../../../token";

export class UnaryNode extends Node {
	readonly operator: Token;
	readonly operand: Node;

	constructor(operator: Token, operand: Node) {
		super();

		this.operator = operator;
		this.operand = operand;
	}
}
