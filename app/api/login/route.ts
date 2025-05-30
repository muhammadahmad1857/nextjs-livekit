import { NextRequest } from "next/server";

export const POST = async (req:NextRequest)=>{
    

const { email, password } = await req.json();
if (email === process.env.USER_EMAIL && password === process.env.USER_PASSWORD) {
  return new Response('Login successful', { status: 200, headers: { 'Set-Cookie': `session=true` } });
} else {
  return new Response('Invalid email or password', { status: 401 });
}
}