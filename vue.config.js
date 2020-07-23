module.exports = {
    devServer: {
        port: 8080, // 端口号
        host: "0.0.0.0",
        https: false,
        proxy:"http://101.201.66.106:8089"
    }
}
