const http = require('http')

const pageStr = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Fridolph的个人网站 - Fridolph's Personal Website</title>
  <style type="text/css">
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  ul,
  li,
  ol {
    list-style: none;
  }
  a {
    text-decoration: none;
  }
  html,
  body {
    width: 100%;
    height: 100%;
  }
  body {
    background: url('http://fridolph.top/op.jpg') 50% 50% no-repeat;
    background-attachment: fixed;
  }
  @media screen and (max-width: 480px) {
    body {
      background-position: 40% 50%;
      background-size: cover;
      background-attachment: fixed;
    }
  }
  .bg-layer {
    width: 100%;
    height: 100%;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background-color: rgba(0,0,0,0.3);
  }
  .box-container {
    background-color: rgba(0, 0, 0, 0.4);
    border-radius: 8px;
    color: #fefefe;
    overflow: hidden;
    position: absolute;
    left: 50%;
    top: 50%;
    height: 300px;
    width: 90vw;
    max-width: 600px;
    transform: translate(-50%, -50%);
    padding: 20px;
    display: flex;
    justify-content: center;
  }
  .box-container .container-inner {
    width: 100%;
  }
  .box-container .inner-header {
    text-align: center;
    text-shadow: 3px 3px 4px rgba(0, 0, 0, 0.2);
    cursor: pointer;
  }
  .box-container .inner-header:hover {
    text-decoration: underline;
  }
  .box-container h1 {
    font-size: 24px;
  }
  .box-container .inner-content {
    margin: 20px 0 10px 0;
    padding: 10px;
  }
  .box-container .inner-content .list {
    position: relative;
  }
  .box-container .inner-content .list::before,
  .box-container .inner-content .list::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 2px;
    border-radius: 4px;
    background: rgba(255, 255, 255, 0.6);
  }
  .box-container .inner-content .list::before {
    left: 0;
    top: -20px;
  }
  .box-container .inner-content .list:after {
    left: 0;
    bottom: -20px;
  }
  .box-container .inner-content .list-item {
    text-indent: 1em;
    border-radius: 4px;
    margin: 10px 0;
    background: rgba(0, 0, 0, 0.6);
    transition: all ease-in-out 0.4s;
  }
  .box-container .inner-content .list-item a {
    color: #eee;
    display: block;
    line-height: 2;
    transition: all ease-in-out 0.4s;
  }
  .box-container .inner-content .item-1:hover {
    background: linear-gradient(90deg, #b9deed, rgba(255, 255, 255, 0.7));
  }
  .box-container .inner-content .item-1:hover a {
    color: #333;
  }
  .box-container .inner-content .item-2 {
    position: relative;
    z-index: 2;
  }
  .box-container .inner-content .item-2::before {
    content: '';
    background: linear-gradient(90deg, #71bbe9, #f0f0f0);
    position: absolute;
    z-index: -1;
    width: 0;
    height: 100%;
    left: 0;
    border-radius: 4px;
    transition: all 0.7s ease;
  }
  .box-container .inner-content .item-2:hover a {
    color: #333;
  }
  .box-container .inner-content .item-2:hover::before {
    width: 100%;
  }
  .box-container .inner-content .item-3 {
    position: relative;
    perspective: 500px;
    width: 100%;
    height: 32px;
  }
  .box-container .inner-content .item-3 .box {
    height: 100%;
    position: relative;
    transform-style: preserve-3d;
  }
  .box-container .inner-content .item-3 .box .over-layer {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    background: linear-gradient(90deg, #c4b9ed, rgba(255, 255, 255, 0.7));
    transform: translateY(100%);
    color: #fff;
    transition: all 0.6s ease;
    border-radius: 4px;
  }
  .box-container .inner-content .item-3 .box:hover .layer {
    transform: translateY(-100%) rotateX(90deg);
    transform-origin: bottom center;
    opacity: 0;
  }
  .box-container .inner-content .item-3 .box:hover .over-layer {
    opacity: 1;
    transform: translateY(0);
  }
  .box-container .inner-footer {
    text-align: right;
    font-size: 14px;
  }  
  </style>
</head>

<body>
  <div class="bg-layer"></div>
  <div id="container" class="box-container">
    <div class="container-inner">
      <div class="inner-header">
        <div class="title">
          <h1>Fridolph的个人网站</h1>
          <sub>Fridolph's Personal Website</sub>
        </div>
      </div>
      <div class="inner-content">
        <ul class="list">
          <li class="list-item item-1">
            <a href="https://github.com/fridolph">» github</a>
          </li>
          <li class="list-item item-2">
            <a href="https://fridolph.github.io">» Blog</a>
          </li>
          <li class="list-item item-3">
            <div class="box">
              <a href="https://github.com/Fridolph/my-demo" class="layer">» Program</a>
              <div class="over-layer">
                <a href="https://github.com/Fridolph/my-demo">» Program</a>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div class="inner-footer">
        Contact | fridolph.top
      </div>
    </div>
  </div>
</body>

</html>
`

http
  .createServer((req, res) => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/html')
    res.end(homePage)
  })
  .listen(8081, () => {
    console.log('server is running at localhost:8081')
  })
