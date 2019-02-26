// var URL = 'http://10.19.248.200:31750/app/mock/19/' // feiqp
// var URL = 'http://marker-dev.native.enndata.cn/' // dev
// var URL = 'http://lk-marker-server-pro.op.laikang.com/' // pro
// var URL = 'http://marker-qa.native.enndata.cn/' // qa
var URL = 'http://marker-qa.native.enndata.cn/' // ceshiu

if (window.location.origin === 'http://anno.cloud.enndata.cn') {
    URL = 'http://marker-qa.native.enndata.cn/'
} else if (window.location.origin === 'https://marker.op.laikang.com') {
    URL = 'https://lk-marker-server-pro.op.laikang.com/'
}
export const vcode = URL + 'vcode'
    // 登录
export const login = URL + 'login'

