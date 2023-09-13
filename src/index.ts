import { Lexer } from "./lexer/lexer";

const code: string = `
	turaqty: jol _ALMA = zhasyl;
`;

const lexer = new Lexer(code);
lexer.analysis();
console.log(lexer.tokens);
