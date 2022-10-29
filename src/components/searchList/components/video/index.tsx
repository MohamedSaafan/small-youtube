import { useAppSelector } from "../../../../app/hooks";
import { renderBigNumbers } from "../../../../helpers/numbers";
import { highlighKeyWord } from "../../../../helpers/text";
import {
  isNew,
  renderDurationPassed,
  renderVideoDuration,
} from "../../../../helpers/time";
import Styles from "./video.module.scss";

const Video: React.FC<YoutubeItem> = (props) => {
  const videos = useAppSelector((state) => state.videosDetails.data);
  const searchKeyWord = useAppSelector((state) => state.searchbar);
  const video = videos.find((item) => {
    if (props.id.kind === "youtube#video") return item.id === props.id.videoId;
  });

  let videoDuration = null;
  if (video)
    videoDuration = renderVideoDuration(video?.contentDetails.duration);
  const isLive = props.snippet.liveBroadcastContent === "live";
  const hasCaption = video?.contentDetails.caption;
  const isRecent = isNew(props.snippet.publishTime);
  const description = isLive
    ? `Live: <span class="description-live-dot"></span>${highlighKeyWord(
        props.snippet.description,
        searchKeyWord
      )}`
    : highlighKeyWord(props.snippet.description, searchKeyWord);

  return (
    <article className={Styles.video}>
      <div className={Styles.video__image}>
        <img
          src={props.snippet.thumbnails.high.url}
          alt={props.snippet.title}
        />
        <div className={Styles.video__image__duration}>{videoDuration}</div>
      </div>
      <div className={Styles.video__details}>
        <div className={Styles.video__header}>
          {isLive && <span className="heading-live-dot"></span>}
          <h2
            className={Styles.video__heading}
            dangerouslySetInnerHTML={{ __html: props.snippet.title }}
          ></h2>
        </div>
        <div className={Styles.video__statistics}>
          <span className={`${Styles.video__channel} withdot`}>
            {video?.snippet.channelTitle}
          </span>
          <span className={`${Styles.video__views} withdot`}>
            {renderBigNumbers(video?.statistics.viewCount || 0)} views
          </span>
          <span className={Styles.video__time}>
            {renderDurationPassed(props.snippet.publishedAt)}
          </span>
        </div>

        <p
          className={Styles.video__description}
          dangerouslySetInnerHTML={{
            __html: description,
          }}
        ></p>

        <div className={Styles.video__options}>
          {hasCaption === "true" ? (
            <span className={Styles.video__options__option}>CC</span>
          ) : (
            ""
          )}

          {isRecent && (
            <span className={Styles.video__options__option}>New</span>
          )}
        </div>
      </div>
    </article>
  );
};

export default Video;
