'use strict';

// takes care of getUserMedia and its different prefixes in different browsers
navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia;

const contraints = {
  audio: true,
  video: true,
};

const remoteVideElement = document.querySelector('#remoteVideo');

const successCb = stream => {
  //makes the stram global so that you can play with it in the console
  window.stream = stream;
  if (window.URL) {
    remoteVideElement.src = window.URL.createObjectURL(stream);
  } else {
    remoteVideElement.src = stream;
  }
};

const errorCb = err => {
  console.log('navigator.getUserMedia error: ', err);
};

navigator.getUserMedia(contraints, successCb, errorCb);
