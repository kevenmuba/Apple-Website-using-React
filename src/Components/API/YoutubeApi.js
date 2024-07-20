import React,{useState,useEffect} from 'react'
import './youtubeApi.css'

function YoutubeApi() {
  const [YouTubeVideos,setVideos]= useState([]);
  useEffect(()=>{
    fetch(
      "https://youtube.googleapis.com/youtube/v3/search?part=snippet%2Cid&channelId=UCE_M8A5yxnLfW0KghEeajjw&maxResults=9&order=date&key=AIzaSyCH41gFZsxYQnqDG3sXkv6HFMKajfxM_9c"
    )
    .then((response)=> response.json())
    .then((data)=>{
      const youTubeVideosData = data.items;
      setVideos(youTubeVideosData)
    })

  },[]);
  //console.log(YouTubeVideos);
  
  return (
    <div>
      <div className="allVideoWrapper">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-12">
              <div className="title-wrapper">
               <h3> Latest Videos</h3> <br/>
              </div>
              </div>
              {YouTubeVideos.map((singleVideo)=>{
                let vidId = singleVideo.id.videoId;
                let vividLink = `https://www.youtube.com/watch?v=${vidId}`;
                let videoWrapper = (
                  <div key = {vidId} className="col-sm-12 col-md-6 col-lg-4">
                  <div className="singleVideoWrapper">
                    <div className="videoThumbnail">
                      <a href={vividLink}target='_blank'>
                        <img src={singleVideo.snippet.thumbnails.high.url} alt="" />
                      </a>
                    </div>
                    <div className="videoInfoWrapper">
                      <div className="videoTitle">
                      <a href={vividLink} target='_blank'>
                        {singleVideo.snippet.title}
                        </a></div>
                      <div className="videoDesc">
                      {singleVideo.snippet.description}
                        </div></div>
                  </div>
               
              </div>

              

                )
                return videoWrapper;

              })
              
              }
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default YoutubeApi
