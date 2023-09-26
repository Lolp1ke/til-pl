import { Lexer } from "./lexer/lexer";
import { Parser } from "./parser/parser";

const code: string = `
<<<<<<< HEAD
    turaqty: jol ALMA = asd;

    turaqty: san ONE = 1;
    turaqty: san EKI_TORT = 2 + 4;

    korset ALMA + (ONE + EKI_TORT);
    korset ALMA + ONE + EKI_TORT;
    
    korset ALMA;
=======
	turaqty: jol _ALMA = zhasyl;
>>>>>>> 05cf777 (useless)
`;

const lexer = new Lexer(code);
lexer.analysis();

const parser = new Parser(lexer.tokens);
parser.run(parser.code());
