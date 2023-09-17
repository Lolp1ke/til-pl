import { Lexer } from "./lexer/lexer";
import { Parser } from "./parser/parser";

const code: string = `turaqty: jol _ALMA = zhasyl;`;

const lexer = new Lexer(code);
lexer.analysis();

const parser = new Parser(lexer.tokens);
parser.expression();
