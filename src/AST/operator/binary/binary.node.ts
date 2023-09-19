import { Node } from "../../node";
import { type Token } from "../../../token";

export class BinaryNode extends Node {
	readonly operator: Token;

	readonly right: Node;
	readonly left: Node;

	constructor(operator: Token, right: Node, left: Node) {
		super();

		this.operator = operator;

		this.right = right;
		this.left = left;
	}
}
