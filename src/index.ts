import { Lexer } from "./lexer/lexer";
import { Parser } from "./parser/parser";

const code: string = `
	turaqty: san X = 123;

  korset X;
`;

const lexer = new Lexer(code);
lexer.tokens = lexer.analysis();

const parser = new Parser(lexer.tokens);
parser.run(parser.code());
