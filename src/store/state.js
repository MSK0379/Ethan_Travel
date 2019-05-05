// 防止部分浏览器不能使用localStorage而报错
let defaultCity = '上海';
try {
    if (localStorage.city) {
        defaultCity = localStorage.city;
    }
} catch (e) {}

export default {
    city : defaultCity
}
