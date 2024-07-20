import React from 'react'
import { Outlet } from 'react-router-dom';
import YoutubeApi from '../API/YoutubeApi';

function SharedVideo() {
  return (
    <>
    <Outlet/>
    <YoutubeApi/>
      
    </>
  )
}

export default SharedVideo
