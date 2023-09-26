import { Lexer } from "./lexer/lexer";
import { Parser } from "./parser/parser";

const code: string = `
	turaqty: jol _ALMA = zhasyl;

    korset _ALMA + 23;
`;

const lexer = new Lexer(code);
lexer.analysis();
// console.log(lexer.tokens);

const parser = new Parser(lexer.tokens);
parser.run(parser.code());
