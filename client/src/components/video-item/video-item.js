import download from "../../assets/img/download.png";

export const VideoItem = ({
  item: { video_title, video_url, created_at, size, user_name, profile_img },
}) => {
  return (
    <li className="iframe">
      <video height="100%" width="100" controls>
        <source src={video_url} type="video/mp4" />
      </video>
      <div className="iframe-footer">
        <img
          src={"https://cdn-icons-png.flaticon.com/512/146/146031.png"}
          alt="channel-icon"
        />
        <div className="main_page__iframe-footer-text">
          <h2 className="main-page__channel-name">{user_name}</h2>
          <h3 className="iframe-title">{video_title}</h3>
          <time className="uploaded-time">{created_at}</time>
          <a className="download" href="#">
            <span>{size} MB</span>
            <img src={download} />
          </a>
        </div>
      </div>
    </li>
  );
};
