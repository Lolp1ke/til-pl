import { Node } from "../../node";

export class BinaryNode extends Node {
	right: Node;
	left: Node;

	constructor(right: Node, left: Node) {
		super();

		this.right = right;
		this.left = left;
	}
}
