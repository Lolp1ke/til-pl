import { Node } from "../node";

export class RootNode extends Node {
	nodes: Node[] = [];

	public addNode(node: Node) {
		this.nodes.push(node);
	}
}
