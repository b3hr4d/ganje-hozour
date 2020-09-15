import React from 'react'
import videoExample from "assets/img/videoPlayer.mp4";
import ReactPlayer from "react-player";
import { Card } from '@material-ui/core';

export default function VideoPlayer({ classList, isAudio, URL }) {
    return (
        <Card>
            {URL ?
                isAudio ?
                    <ReactPlayer
                        className={classList}
                        playing
                        controls
                        width="100%"
                        height="100%"
                        url={[{ src: `http://topfi.http.internapcdn.net/topfi/AAC%20Audio/${URL}_Webaudio-low.m4a`, type: "audio/x-m4a" }]}
                        config={{
                            attributes: {
                                style: {
                                    width: '100%',
                                },
                                height: 'auto'
                            },
                            file: {
                                forceAudio: true
                            }
                        }}
                    /> :
                    <ReactPlayer
                        className={classList}
                        controls
                        playing
                        width="100%"
                        height="100%"
                        url={[{ src: `http://topfi.http.internapcdn.net/topfi/${URL}_Website-DV-low.mp4`, type: 'video/mp4' }]}
                    /> :
                <ReactPlayer
                    className={classList}
                    playing
                    loop
                    muted
                    width="100%"
                    height="100%"
                    url={[videoExample]}
                />}
        </Card>
    )
}
