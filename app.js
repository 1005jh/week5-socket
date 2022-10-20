const express = require('express');
const { createServer } = require('http');

const app = express();
const http = createServer(app);
const io = require('socket.io')(http, {
  cors: {
    origin: '*',
    methods: ['GET', 'POST'],
  },
});

http.listen(3000, () => {
  console.log('서버가 요청을 받을 준비가 됐어요');
});
// //*포트 열어줌
// const io = require('socket.io')(3000, {
//   cors: {
//     origin: '*', //별표는 모든 사람들에게 열어주겠다.
//     methods: ['GET', 'POST'],
//   },
// });
// //*열어주면 해줄거
// io.on('connection', (socket) => {
//   console.log('새로운 소켓이 연결됐어요!');

//   socket.emit('customEventName', 'this is custom event data');

//   socket.on('message', (data) => {
//     // message라는 소켓에 데이터가 들어왔었을 때
//     console.log(data); //전달된 데이터를 data에 넣어줌
//   });
// });
