import { NextRequest } from "next/server";

export const POST = async (req: NextRequest) => {
  const { email, password } = await req.json();

  if (
    email === process.env.USER_EMAIL &&
    password === process.env.USER_PASSWORD
  ) {
    const expires = new Date(Date.now() + 60 * 60 * 1000).toUTCString(); // 1 hour

    return new Response("Login successful", {
      status: 200,
      headers: {
        'Set-Cookie': `session=true; Path=/; HttpOnly; SameSite=Lax; Expires=${expires}`,
      },
    });
  } else {
    return new Response("Invalid email or password", { status: 401 });
  }
};
