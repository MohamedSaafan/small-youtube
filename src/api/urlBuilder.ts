import { type } from "os";
import { isArray } from "util";
import { YOUTUBE_API_KEY } from "../keys";
const baseUrl = "https://youtube.googleapis.com/youtube";

export const buildSearchURL = (keyWord: string) => {
  const fetchURL = `${baseUrl}/v3/search?part=snippet&type=channel,playlist,video&maxResults=25&q=${keyWord}&key=${YOUTUBE_API_KEY}`;
  return fetchURL;
};

export const buildGetVideosUrl = (videoId: string | string[]) => {
  if (typeof videoId === "string")
    return `${baseUrl}/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${YOUTUBE_API_KEY}`;
  return `${baseUrl}/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId.toString()}&key=${YOUTUBE_API_KEY}`;
};
