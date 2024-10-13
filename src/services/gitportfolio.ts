const VITE_GITPORTFOLIO_API_URL = import.meta.env.VITE_GITPORTFOLIO_API_URL || "http://localhost:4567"

export async function fetchDevType(file_tree: string[]) {
  const response = await fetch(
    `${VITE_GITPORTFOLIO_API_URL}/api/v1/type`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ file_tree }),
    },
  );

  const json = await response.json();

  return json;
}
