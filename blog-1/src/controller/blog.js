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

const getDetail = (id) => {
    //先返回假数据
    return {
        id:1,
        title:'详情a',
        content:'内容详情a',
        createTime:1546610491112,
        author:'张三'
    }
}

const newBlog = (blogData = {} ) => {
    //blogData是一个博客对象，包含title content  属性
    console.log('newBlog blogData...',blogData)
    return {
        id:3  //新建博客插入到数据表里的id
    }
}

module.exports = {
    getList,
    getDetail,
    newBlog
}