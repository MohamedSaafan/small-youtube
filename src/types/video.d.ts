interface VideoDetails {
  snippet: {
    channelTitle: string;
    liveBroadcastContent: "live" | "none" | "upcoming";
    localized: {
      title: string;
      description: string;
    };
  };
  statistics: {
    viewCount: string;
    likeCount: string;
  };
  contentDetails: {
    duration: string;
    caption: string;
  };
}
