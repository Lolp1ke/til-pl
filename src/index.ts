import { Lexer } from "./lexer/lexer";
import { Parser } from "./parser/parser";

const code: string = `
    turaqty: san SAN = (1 + 1.23) / (2 * 54);
    korset SAN;
`;

const lexer = new Lexer(code);
lexer.analysis();

const parser = new Parser(lexer.tokens);
parser.run(parser.code());
