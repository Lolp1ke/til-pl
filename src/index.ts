import { Lexer } from "./lexer/lexer";
import { Parser } from "./parser/parser";

const code: string = `
	turaqty: jol1 _ALMA = zhasyl;
`;

const lexer = new Lexer(code);
lexer.analysis();
// console.log(lexer.tokens);

const parser = new Parser(lexer.tokens);
parser.expression();
