import { Token } from "../../token";
import { Node } from "../node";

export class TypeNode extends Node {
	token: Token;

	constructor(token: Token) {
		super();

		this.token = token;
	}
}
