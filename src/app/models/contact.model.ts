export class Contact {

    constructor(public _id?: string,
        public name: string = '',
        public email: string = '',
        public phone: string = '') {
    }

    setId() {
        this._id = this._makeId();
    }
    
    _makeId(length = 5) {
        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        for (var i = 0; i < length; i++) {
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        }
        return text;
    }
}
