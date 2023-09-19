import { type Token } from "../token";

export class Node {
	readonly token: Token;
	readonly right?: Node;
	readonly left?: Node;
	readonly operand?: Node;
}
