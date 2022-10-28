import { YOUTUBE_API_KEY } from "../keys";

export const buildSearchURL = (keyWord: string) => {
  const fetchURL = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&type=channel,playlist,video&maxResults=25&q=${keyWord}&key=${YOUTUBE_API_KEY}`;
  return fetchURL;
};
export async function api<T>(url: string): Promise<T> {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data as T;
  } catch (err) {
    throw err;
  }
}
