export async function api<T>(url: string): Promise<T> {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data as T;
  } catch (err) {
    throw err;
  }
}
