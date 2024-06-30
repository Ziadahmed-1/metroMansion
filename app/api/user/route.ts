import { get, create } from "@/prisma";

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const email = searchParams.get("email");

  try {
    const userData = await get(email);
    return new Response(JSON.stringify(userData), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error fetching user data:", error);
    return new Response(
      JSON.stringify({ error: "Failed to fetch user data" }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}

export async function POST(req) {
  const body = await req.json();
  const email = body.email;

  try {
    const userData = await create(email);
    return new Response(JSON.stringify(userData), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error creating user:", error);
    return new Response(JSON.stringify({ error: "Failed to create user" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
