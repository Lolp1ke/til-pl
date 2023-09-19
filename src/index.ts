import { Lexer } from "./lexer/lexer";
import { Parser } from "./parser/parser";

const code: string = `
    korset 123;
`;

const lexer = new Lexer(code);
lexer.analysis();

const parser = new Parser(lexer.tokens);
parser.run(parser.code());
