export async function fetchDevType(file_tree: string[]) {
  const response = await fetch(
    "https://gitportfolio-api.onrender.com/api/v1/type",
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
