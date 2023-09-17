import { TokenType, Token } from "./";

export class TokenUtil {
	public match(_pos: number, _tokens: Token[], ...tokenTypes: TokenType[]): null | Token {
		if (_pos < _tokens.length) {
			const token = _tokens[_pos];

			if (tokenTypes.find((tokenType) => tokenType.name == token.type.name)) return token;
		}
		return null;
	}

	public require(_pos: number, _tokens: Token[], ...tokenTypes: TokenType[]): Token {
		const token = this.match(_pos, _tokens, ...tokenTypes);
		if (!token) throw new SyntaxError(`${_pos}-sózde qate bar, {${tokenTypes[0].name}} kerek`);
		return token;
	}
}
