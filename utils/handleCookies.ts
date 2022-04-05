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