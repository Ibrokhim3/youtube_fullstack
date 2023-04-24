import { useState } from "react";
import deleteIcon from "../../assets/img/delete.png";

export const UserVideoItem = ({
  item: { video_title, created_at, video_url, size, id },
}) => {
  const [dataId, setDataId] = useState();
  const [content, setContent] = useState();

  const token = localStorage.getItem("token");

  const handleOnFocus = (evt) => {
    evt.preventDefault();

    const id = evt.target.dataset.id;
    const video_title = document.querySelector(".content").textContent;

    const videoData = {
      id,
      video_title,
    };

    console.log(videoData);
    fetch("http://localhost:3005/admin/update-video", {
      method: "PUT",
      body: JSON.stringify(videoData),
      headers: {
        "Content-Type": "application/json",
        Authentication: `Bearer ${token}`,
      },
    })
      .then((res) => {
        if (res.status === 200) {
          return res.json();
        }
        return Promise.reject(res);
      })
      .then((data) => {
        alert(data.msg);
      })
      .catch((err) => {
        alert(err);
      });
  };

  return (
    <li className="video-item">
      <video height="100%" width="100" controls>
        <source src={video_url} type="video/mp4" />
      </video>
      <p
        onBlur={handleOnFocus}
        className="content"
        data-id={id}
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
