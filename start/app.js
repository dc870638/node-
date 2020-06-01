//处理get请求
// const http = require('http')
// const querystring = require('querystring')

// const server = http.createServer( (req,res) => {
//     console.log('method:',req.method)
//     const url = req.url
//     console.log('url:',url)
//     req.query = querystring.parse(url.split('?')[1])
//     console.log('query:' ,req.query)
//     res.end(JSON.stringify(req.query))
// })

// server.listen(3000)
// console.log('ok')

//处理post请求
const http = require('http')
const server = http.createServer( (req,res) => {
    if(req.method = 'POST'){
        // console.log(req)
        console.log('content-type:', req.headers)
        //接收数据
        let postData = ''
        req.on('data', chunk => {
            postData += chunk.toString()
        })
        req.on('end', () => {
            console.log('postData:',postData)
            res.end('hello world')
        })
    }
})
server.listen(3000)
console.log('ok')