import { Node } from "../../node";

export class UnaryNode extends Node {
	operand: Node;
	constructor(operand: Node) {
		super();

		this.operand = operand;
	}
}
