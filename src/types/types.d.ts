interface YoutubeVideoId {
  kind: "youtube#video";
  videoId: string;
}
interface YoutubePlayListId {
  kind: "youtube#playlist";
  playlistId: string;
}

interface YoutubeChannelId {
  kind: "youtube#channel";
  channelId: string;
}

interface YoutubeItem {
  etag: string;
  id: YoutubeChannelId | YoutubePlayListId | YoutubeVideoId;
  kind: string;
  snippet: {
    channelId: string;
    channelTitle: string;
    description: string;
    liveBroadcastContent: string;
    publishTime: string;
    publishedAt: string;
    thumbnails: {
      default: {
        url: string;
      };
      high: { url: string };
      medium: { url: string };
    };
    title: string;
  };
}

interface YoutubeSearchResult {
  etag: string;
  items: YoutubeItem[];
  kind: "youtube#searchListResponse";
  nextPageToken: string;
  pageInfo: { resultsPerPage: number; totalResults: number };
}
