import crypto from "crypto";

const generateHash = (ts, publicKey, privateKey) => {
  const hash = crypto.createHash("md5");
  const combinedString = `${ts}${privateKey}${publicKey}`;
  hash.update(combinedString);
  return hash.digest("hex");
};

export async function GET() {
  const PUBLIC_KEY = process.env.MARVEL_PUBLIC_KEY;
  const PRIVATE_KEY = process.env.MARVEL_PRIVATE_KEY;
  const ts = Date.now().toString(); // Generate a new timestamp
  const HASH = generateHash(ts, PUBLIC_KEY, PRIVATE_KEY);
  const URL = `https://gateway.marvel.com/v1/public/series?ts=${ts}&apikey=${PUBLIC_KEY}&hash=${HASH}`;

  const response = await fetch(URL);
  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }

  const data = await response.json();
  return new Response(JSON.stringify(data), {
    headers: { "Content-Type": "application/json" },
  });
}
