export interface User {
  id: number;
  name: string;
}

export interface JwtPayload extends User {
  signedAt: string;
}

export interface RefreshTokenPayload extends JwtPayload {
  refreshToken: string;
}
