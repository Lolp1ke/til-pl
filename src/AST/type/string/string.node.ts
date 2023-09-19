import { Node } from "../../node";
import { type Token } from "../../../token";

export class StringNode extends Node {
	readonly token: Token;

	constructor(token: Token) {
		super();

		this.token = token;
	}
}
