interface VideoDetails {
  id: string;
  snippet: {
    channelTitle: string;
    liveBroadcastContent: "live" | "none" | "upcoming";
    localized: {
      title: string;
      description: string;
    };
  };
  statistics: {
    viewCount: number;
    likeCount: number;
  };
  contentDetails: {
    duration: string;
    caption: string;
  };
}

interface VideoDetailsResponse {
  items: VideoDetails[];
}
