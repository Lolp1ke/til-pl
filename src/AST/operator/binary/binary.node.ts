import { Node } from "../../node";
import { Token } from "../../../token";

export class BinaryNode extends Node {
	operator: Token;

	right: Node;
	left: Node;

	constructor(operator: Token, right: Node, left: Node) {
		super();

		this.operator = operator;

		this.right = right;
		this.left = left;
	}
}
