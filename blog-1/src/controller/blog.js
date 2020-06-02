const getList = (author,keyword) => {
    //先返回假数据，（格式是正确的）
    return [
        {
            id:1,
            title:'标题A',
            content:'内容A',
            createTime:1546610491112,
            author:'张三'
        },
        {
            id:2,
            title:'标题b',
            content:'内容b',
            createTime:1546610491113,
            author:'张四'
        },
    ]
}

module.exports = {
    getList
}