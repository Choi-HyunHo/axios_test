import axios from "axios";
import { useState } from "react";

const AxiosApi = () => {
  const [photo, setPhoto] = useState("");
  console.log(photo);

  // 통신 메서드
  const searchApi = () => {
    const url = "https://jsonplaceholder.typicode.com/photos";
    axios
      .get(url)
      .then((response) => {
        setPhoto(response.data);
        console.log("성공");
      })
      .catch((error) => {
        console.log("실패");
      });
  };

  // 조회 데이터 존재할 경우
  if (photo.length > 0) {
    return photo.map((photo) =>
      photo.id < 10 ? (
        <div key={photo.id}>
          <img src={photo.thumbnailUrl} alt="img" />
          <h1>title : {photo.title}</h1>
        </div>
      ) : null
    );
  } else {
    // 조회 데이터 존재 하지 않는 경우
    return (
      <div>
        <button onClick={searchApi}>불러오기</button>
      </div>
    );
  }
};

export default AxiosApi;
