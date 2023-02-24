import React from "react";
import { FaceMesh } from "@mediapipe/face_mesh"
import * as Facemesh from '@mediapipe/face_mesh'
import * as cam from '@mediapipe/camera_utils'
import Webcam from "react-webcam";
import { DivCam } from "../../style/styled";
import MenuLateral from "../ComponentesEstaticos/MenuLateral";
import { useRef } from "react";
import { useEffect } from "react";




export default function Software() {
  const usuario = JSON.parse(sessionStorage.getItem("usuario-validado")) 
    
    

  useEffect(()=> {
      if (usuario == null) {
          alert("Você precisa estar logado para acessar!")
          window.location = "/usuario/login"
      }

  }, [])




    const webcamRef = useRef(null);
  const canvasRef = useRef(null);
  const connect = window.drawConnectors;
  var camera = null;
  function onResults(results) {
    // const video = webcamRef.current.video;
    const videoWidth = webcamRef.current.video.videoWidth;
    const videoHeight = webcamRef.current.video.videoHeight;

    // Set canvas width
    canvasRef.current.width = videoWidth;
    canvasRef.current.height = videoHeight;

    const canvasElement = canvasRef.current;
    const canvasCtx = canvasElement.getContext("2d");
    canvasCtx.save();
    canvasCtx.clearRect(0, 0, canvasElement.width, canvasElement.height);
    canvasCtx.drawImage(
      results.image,
      0,
      0,
      canvasElement.width,
      canvasElement.height
    );
    if (results.multiFaceLandmarks) {
      for (const landmarks of results.multiFaceLandmarks) {
        connect(canvasCtx, landmarks, Facemesh.FACEMESH_TESSELATION, {
          color: "#C0C0C070",
          lineWidth: 1,
        });
        connect(canvasCtx, landmarks, Facemesh.FACEMESH_RIGHT_EYE, {
          color: "#FF3030",
        });
        connect(canvasCtx, landmarks, Facemesh.FACEMESH_RIGHT_EYEBROW, {
          color: "#FF3030",
        });
        connect(canvasCtx, landmarks, Facemesh.FACEMESH_LEFT_EYE, {
          color: "#30FF30",
        });
        connect(canvasCtx, landmarks, Facemesh.FACEMESH_LEFT_EYEBROW, {
          color: "#30FF30",
        });
        connect(canvasCtx, landmarks, Facemesh.FACEMESH_FACE_OVAL, {
          color: "#E0E0E0",
        });
        connect(canvasCtx, landmarks, Facemesh.FACEMESH_LIPS, {
          color: "#E0E0E0",
        });
      }
    }
    canvasCtx.restore();
  }
  // }

  // setInterval(())
  useEffect(() => {
    const faceMesh = new FaceMesh({
      locateFile: (file) => {
        return `https://cdn.jsdelivr.net/npm/@mediapipe/face_mesh/${file}`;
      },
    });

    faceMesh.setOptions({
      maxNumFaces: 1,
      minDetectionConfidence: 0.5,
      minTrackingConfidence: 0.5,
    });

    faceMesh.onResults(onResults);

    if (
      typeof webcamRef.current !== "undefined" &&
      webcamRef.current !== null
    ) {
      camera = new cam.Camera(webcamRef.current.video, {
        onFrame: async () => {
          await faceMesh.send({ image: webcamRef.current.video });
        },
        width: 640,
        height: 480,
      });
      camera.start();
    }
  }, []);


    return (
        <div>

            <div className="subMenu">
                <MenuLateral />
            </div>
            <DivCam>
                <div className="title">

                    <h1>Software de mapeamento de face</h1>
                    <p>Será responsavel por mapear a face do piloto identificando se o mesmo estará dormindo acionando alarmes</p>
                </div>
                <div className="webcam">
                    <Webcam ref={webcamRef}
                        style={{
                            position: "absolute",
                            marginRight: "auto",
                            marginLeft: "auto",
                            borderRadius: '20px',
                            right: "50vh",
                            boxShadow: '3px 3px 10px black',
                            width: '80vh',
                            height: '60vh'


                        }}></Webcam>
                    <canvas ref={canvasRef} style={{
                        position: "absolute",
                        marginRight: "auto",
                        marginLeft: "auto",
                        borderRadius: '20px',
                        right: "50vh",
                        boxShadow: '3px 3px 10px black',
                        width: '80vh',
                        height: '60vh'

                    }}>

                    </canvas>

                </div>
            </DivCam>
        </div>







    )


}
