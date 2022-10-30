import { YOUTUBE_API_KEY } from "../keys";
const baseUrl = "https://youtube.googleapis.com/youtube";

export const buildSearchURL = (keyWord: string) => {
  const fetchURL = `${baseUrl}/v3/search?part=snippet&type=channel,playlist,video&maxResults=25&q=${keyWord}&key=${YOUTUBE_API_KEY}`;
  return fetchURL;
};

export const buildGetVideosUrl = (videosId: string) => {
  return `${baseUrl}/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videosId}&key=${YOUTUBE_API_KEY}`;
};
