import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class StorageService {
    private STORAGE_KEY = 'mister-bitcoin-'

    constructor() { }

    public loadFromStorage(key) {
        var val = localStorage.getItem(this.STORAGE_KEY + key)
        return (val) ? JSON.parse(val) : null;
    }

    public saveToStorage(key, val) {
        localStorage[this.STORAGE_KEY + key] = JSON.stringify(val);
    }

}