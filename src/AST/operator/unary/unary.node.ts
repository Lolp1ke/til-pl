import { Node } from "../../node";
import { Token } from "../../../token";

export class UnaryNode extends Node {
	operator: Token;
	operand: Node;

	constructor(operator: Token, operand: Node) {
		super();

		this.operator = operator;
		this.operand = operand;
	}
}
