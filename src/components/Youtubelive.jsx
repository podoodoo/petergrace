import { useState, useEffect } from "react";
import styled from "styled-components";

const StyledIframeWrapper = styled.div`
  position: relative;
  &:before {
    content: "";
    display: block;
    padding-bottom: calc(100% / (16 / 9));
  }
`;

const StyledIframe = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

function Youtubelive() {
  const [isLive, setIsLive] = useState(false);
  const [youtubeVideoId, setYoutubeVideoId] = useState(null);

  const youtubeChannelId = null;
  const youtubeApiKey = null;

  function fetchYoutubeData() {
    fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${youtubeChannelId}&eventType=live&type=video&key=${youtubeApiKey}`,
      {
        headers: {
          Accept: "application/json",
        },
      }
    )
      .then(async (res) => {
        const response = await res.json();

        if (response.items && response.items.length > 1) {
          const streamInfo = response.items[0];
          setIsLive(true);
          setYoutubeVideoId(streamInfo.id.videoId);
        }
      })
      .catch((err) => {
        console.log("Error fetching data from YouTube API: ", err);
      });
  }

  function processYoutubeStream() {
    if (youtubeChannelId && youtubeApiKey) {
      fetchYoutubeData();
    } else {
      console.error(
        "[react-livestream] YouTube support requires a youtubeApiKey and youtubeChannelId prop"
      );
    }
  }

  useEffect(() => {
    processYoutubeStream();
  });

  return isLive ? (
    <StyledIframeWrapper>
      <StyledIframe
        src={`https://www.youtube.com/embed/${youtubeVideoId}?autoplay=1&mute=1`}
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></StyledIframe>
    </StyledIframeWrapper>
  ) : (
    <div className="m-auto h-full w-full">
      <image src="../assets/background.png" className="w-full h-full" />
    </div>
  );
}

export default Youtubelive;
