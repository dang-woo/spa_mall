const express = require('express');
const app = express();
const port = 3000;
const goodsRouter = require('./routes/goods.js')


/*
  - Request란 클라이언트가 서버에게 전달하려는 정보나 메시지를 담는 객체를 의미합니다.
  - Response란 서버에서 클라이언트로 응답 메시지를 전송시켜주는 객체입니다.
 */

app.use(express.json());

app.get("/",(req, res)=> {
    console.log(req.query);

    res.send('정상적으로 반환되었습니다.')
})


// app.get('/', (req, res) => {
//     res.send('Hello World!');
// });


// localhost:3000/api -> goodsRouter
// app.use("/api", [goodsRouter]);

app.listen(port, () => {
    console.log(port, '포트로 서버가 열렸어요!');
});


