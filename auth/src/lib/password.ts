import argon2 from 'argon2';



export async function hashPassword(
  password: string
): Promise<string> {

  return argon2.hash(
    password
  );

}





export async function verifyPassword(
  password: string,
  passwordHash: string
): Promise<boolean> {

  if (!passwordHash) {
    throw new Error(
      'Password hash missing'
    );
  }


  return argon2.verify(
    passwordHash,
    password
  );

}





export async function hashToken(
  token: string
): Promise<string> {

  return argon2.hash(
    token
  );

}





export async function verifyTokenHash(
  token: string,
  tokenHash: string
): Promise<boolean> {

  return argon2.verify(
    tokenHash,
    token
  );

}