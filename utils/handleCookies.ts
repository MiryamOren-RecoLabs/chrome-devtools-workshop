export function setCookie(_name: string, _value: string) {
    if (typeof window === 'object') {
        document.cookie = _name + "=" + _value + ";" +";path=/";
    }
  }
  
export function getCookie(_name: string) {
    if (typeof window === 'object') {
        let name = _name + "=";
        let ca = document.cookie.split(';');
        for(let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
        }
        return "";
    }
};

// export function deleteCookie(name: string) {
//     if (typeof window === 'object') {
//         const allCookies = document.cookie.split(';');
//         const res = allCookies.filter((currentCookie: string) => currentCookie.split('=')[0] !== name)
//         document.cookie = res.join(';')
//     };
// };

export function deleteCookie(name: string) {
    document.cookie = name +'=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
  }