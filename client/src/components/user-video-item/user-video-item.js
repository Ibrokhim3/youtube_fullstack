import deleteIcon from "../../assets/img/delete.png";

export const UserVideoItem = ({
  item: { video_title, created_at, video_url, size },
}) => {
  console.log(video_url);
  return (
    <li className="video-item">
      <video height="100%" width="100" controls>
        <source src={video_url} type="video/mp4" />
      </video>
      <p
        className="content"
        data-id="2"
        contentEditable="true"
        suppressContentEditableWarning={true}
      >
        {video_title}
      </p>
      <img
        src={deleteIcon}
        width="25px"
        alt="upload"
        className="delete-icon"
        data-id="2"
      />
    </li>
  );
};
