import { Token } from "../token";

export class Node {
	token?: Token;
	right?: Node;
	left?: Node;
	operand?: Node;
}
