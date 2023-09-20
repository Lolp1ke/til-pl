import { Lexer } from "./lexer/lexer";
import { Parser } from "./parser/parser";

const code: string = `
    turaqty: jol ALMA = asd;

    turaqty: san ONE = 1;
    turaqty: san EKI_TORT = 2 + 4;

    korset ALMA + (ONE + EKI_TORT);
    korset ALMA + ONE + EKI_TORT;
    
    korset ALMA;
`;

const lexer = new Lexer(code);
lexer.analysis();
// console.log(lexer.tokens);


const parser = new Parser(lexer.tokens);
parser.run(parser.code());
