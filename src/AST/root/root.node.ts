import { Node } from "../node";

export class RootNode {
	nodes: Node[] = [];

	public addNode(node: Node) {
		this.nodes.push(node);
	}
}
