import Axios from "axios";
import Qs from 'qs'

let baseUrl = "http://localhost"; //开发环境
let pathUrl = "/consumer";
let httpContentType = 'application/x-www-form-urlencoded;charset=UTF-8'

Axios.create({
    withCredentials: true,
    crossDomain: true
})

//发送请求拦截器
Axios.interceptors.request.use(config => {
    return config;
});

//返回数据拦截器
Axios.interceptors.response.use(res => {
    return res;
});

//封装请求方法
function formatReq(type, url, data) {
    return new Promise((success, fail) => {
        Axios({
            method: type,
            url: `${baseUrl}${pathUrl}${url}`,
            headers: {
                "content-Type": 'application/json;charset=UTF-8'
            },
            data: data
        }).then(r => {
            success(r.data);
        }).catch(e => {
            fail(e);
        });
    });
}

const http = {
    get: (url, query) => {
        url = url + "?" + Qs.stringify(query)
        return Axios.get(`${baseUrl}${pathUrl}${url}`).then(r => r.data).catch(e => e);
    },
    post: (url, data) => formatReq("post", url, data),
    put: (url, data) => formatReq("put", url, data),
    patch: (url, data) => formatReq("patch", url, data),
    delete: (url, data) => formatReq("delete", url, data)
};

export default http;