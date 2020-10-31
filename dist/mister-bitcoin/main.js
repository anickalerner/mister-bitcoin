(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\anna\Coding Academy\Day113-Angular2\mister-bitcoin\src\main.ts */"zUnb");


/***/ }),

/***/ "0NuV":
/*!*********************************************!*\
  !*** ./src/app/services/bitcoin.service.ts ***!
  \*********************************************/
/*! exports provided: BitcoinService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BitcoinService", function() { return BitcoinService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");





class BitcoinService {
    constructor(http) {
        this.http = http;
        this.BASE_URL = 'https://blockchain.info/tobtc?currency=USD&value=';
        this._btc$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](1);
        this.btc$ = this._btc$.asObservable();
    }
    getRate(coins) {
        var url = this.BASE_URL + coins.toString();
        console.log(url);
        this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(() => Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])('rate not found!'))).subscribe(rate => {
            this._btc$.next(rate);
        });
    }
    getMarketPrice() {
    }
    getConfirmedTransactions() {
    }
}
BitcoinService.ɵfac = function BitcoinService_Factory(t) { return new (t || BitcoinService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
BitcoinService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: BitcoinService, factory: BitcoinService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BitcoinService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "2uUW":
/*!*******************************************************************!*\
  !*** ./src/app/cmps/contact-preview/contact-preview.component.ts ***!
  \*******************************************************************/
/*! exports provided: ContactPreviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactPreviewComponent", function() { return ContactPreviewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _delete_confirmation_delete_confirmation_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../delete-confirmation/delete-confirmation.component */ "DMJ4");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var src_app_services_contact_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/contact.service */ "3ITz");







class ContactPreviewComponent {
    constructor(location, router, modalService, contactService) {
        this.location = location;
        this.router = router;
        this.modalService = modalService;
        this.contactService = contactService;
        this.onDelete = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.closeResult = '';
    }
    ngOnInit() {
    }
    get image() {
        return this.contactService.getImage(this.contact.name);
    }
    onContactClick(event) {
        event.stopPropagation();
        this.router.navigateByUrl(`contact/${this.contact._id}`);
    }
    onContactEdit(event) {
        this.router.navigateByUrl(`contact/edit/${this.contact._id}`);
    }
    onContactDelete(event) {
        event.stopPropagation();
        const modalRef = this.modalService.open(_delete_confirmation_delete_confirmation_component__WEBPACK_IMPORTED_MODULE_1__["DeleteConfirmationComponent"]);
        modalRef.result.then((result) => {
            // ok
            this.contactService.deleteContact(this.contact._id).subscribe(() => this.onDelete.emit(this.contact));
        }, (reason) => {
            // cancel
        });
        modalRef.componentInstance.contactName = this.contact.name;
    }
}
ContactPreviewComponent.ɵfac = function ContactPreviewComponent_Factory(t) { return new (t || ContactPreviewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_contact_service__WEBPACK_IMPORTED_MODULE_5__["ContactService"])); };
ContactPreviewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContactPreviewComponent, selectors: [["contact-preview"]], inputs: { contact: "contact" }, outputs: { onDelete: "onDelete" }, decls: 15, vars: 5, consts: [[1, "preview", 3, "click"], [1, "card"], [3, "src", "alt"], [1, "card-body"], [1, "card-title"], [1, "card-text"], [1, "card-footer"], [3, "click"]], template: function ContactPreviewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ContactPreviewComponent_Template_li_click_0_listener($event) { return ctx.onContactClick($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h5", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ContactPreviewComponent_Template_button_click_11_listener($event) { return ctx.onContactEdit($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ContactPreviewComponent_Template_button_click_13_listener($event) { return ctx.onContactDelete($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("alt", ctx.contact.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.contact.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.contact.phone);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.contact.email);
    } }, styles: [".preview[_ngcontent-%COMP%] {\n  list-style: none;\n  margin: 0 10px 10px 0;\n  padding: 0;\n  white-space: nowrap;\n  text-overflow: clip;\n  width: 250px;\n  cursor: pointer;\n}\n.preview[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .preview[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:active, .preview[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:visited {\n  color: #313131;\n  text-decoration: none;\n}\n.preview[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 150px;\n  margin: 5px auto 0;\n}\n.preview[_ngcontent-%COMP%]   .card-footer[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY21wcy9jb250YWN0LXByZXZpZXcvY29udGFjdC1wcmV2aWV3LmNvbXBvbmVudC5zY3NzIiwic3JjL2Fzc2V0cy9zdHlsZS9zZXR1cC9fdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EsVUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQUFKO0FBQ0k7RUFDSSxjQ1JEO0VEU0MscUJBQUE7QUFDUjtBQUNJO0VBQ0ksWUFBQTtFQUNBLGtCQUFBO0FBQ1I7QUFDSTtFQUNJLGFBQUE7RUFDQSw4QkFBQTtBQUNSIiwiZmlsZSI6InNyYy9hcHAvY21wcy9jb250YWN0LXByZXZpZXcvY29udGFjdC1wcmV2aWV3LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uLy4uL2Fzc2V0cy9zdHlsZS9zZXR1cC92YXJpYWJsZXNcIjtcclxuLnByZXZpZXd7XHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgbWFyZ2luOiAwIDEwcHggMTBweCAwO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICB0ZXh0LW92ZXJmbG93OiBjbGlwO1xyXG4gICAgd2lkdGg6IDI1MHB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgYSwgYTphY3RpdmUsIGE6dmlzaXRlZHtcclxuICAgICAgICBjb2xvcjokY2xyMjsgXHJcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgfVxyXG4gICAgaW1ne1xyXG4gICAgICAgIHdpZHRoOiAxNTBweDtcclxuICAgICAgICBtYXJnaW46IDVweCBhdXRvIDA7XHJcbiAgICB9XHJcbiAgICAuY2FyZC1mb290ZXJ7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICB9XHJcbn1cclxuIiwiLy8gQ29sb3JzXG4kY2xyMTogI2Y2ZjZmNjtcbiRjbHIyOiAjMzEzMTMxO1xuJGNscjM6ICNmMGYwZjA7XG4kY2xyNDogI2U0ZTRlNDtcbiRjbHI1OiAjZTg2ZjFjO1xuJGNscjY6ICNjYTY3MjM7XG4kY2xyNzogIzYwNzYzMDtcbiRjbHI4OiAjYmJiYmJiO1xuJGNscjk6ICNkNmM0NWY7XG5cbi8vIEJyZWFrcG9pbnRzXG4kbW9iaWxlLWJyZWFrcG9pbnQ6IDQ2MHB4O1xuJG5hcnJvdy1icmVha3BvaW50OiA3MjBweDtcbiRub3JtYWwtYnJlYWtwb2ludDogOTYwcHg7Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactPreviewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'contact-preview',
                templateUrl: './contact-preview.component.html',
                styleUrls: ['./contact-preview.component.scss']
            }]
    }], function () { return [{ type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"] }, { type: src_app_services_contact_service__WEBPACK_IMPORTED_MODULE_5__["ContactService"] }]; }, { contact: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], onDelete: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "3ITz":
/*!*********************************************!*\
  !*** ./src/app/services/contact.service.ts ***!
  \*********************************************/
/*! exports provided: ContactService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactService", function() { return ContactService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");





class ContactService {
    constructor(http) {
        this.http = http;
        //private BASE_URL = (process.env.NODE_ENV !== 'development') ? '/api/contact' : '//localhost:3030/api/contact';
        this.BASE_URL = '/api/contact';
        this._contacts$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]([]);
        this.contacts$ = this._contacts$.asObservable();
    }
    loadContacts(filterBy = { name: '', phone: '' }) {
        this.http.get(this.BASE_URL)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(contacts => {
            if (filterBy.name !== '') {
                return contacts.filter(({ name }) => {
                    return name.toLowerCase().includes(filterBy.name.toLowerCase());
                });
            }
            else if (filterBy.phone !== '') {
                return contacts.filter(({ phone }) => {
                    return phone.includes(filterBy.phone);
                });
            }
            else {
                return contacts;
            }
        })).subscribe(contacts => {
            this._contacts$.next(contacts);
        });
    }
    getById(id) {
        return this.http.get(`${this.BASE_URL}/${id}`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(() => Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(`User id ${id} not found`)));
    }
    deleteContact(id) {
        return this.http.delete(`${this.BASE_URL}/${id}`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(_ => console.log(`Deleted contact with id ${id}`), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(() => Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(`Couldn't delete contact with id=${id}`))));
    }
    saveContact(contact) {
        return contact._id ? this._updateContact(contact) : this._addContact(contact);
    }
    _updateContact(contact) {
        return this.http.put(`${this.BASE_URL}/${contact._id}`, contact).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(_ => console.log(`Updated contact with id=${contact._id}`)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(() => Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(`Couldn't update contact with id=${contact._id}`)));
    }
    _addContact(contact) {
        return this.http.post(`${this.BASE_URL}`, contact).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])((newContact) => console.log(`Added contact with id=${newContact._id}`)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(() => Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(`Couldn't add contact ${contact.name}`)));
    }
    _sort(contacts) {
        return contacts.sort((a, b) => {
            if (a.name.toLocaleLowerCase() < b.name.toLocaleLowerCase()) {
                return -1;
            }
            if (a.name.toLocaleLowerCase() > b.name.toLocaleLowerCase()) {
                return 1;
            }
            return 0;
        });
    }
    _filter(contacts, term) {
        term = term.toLocaleLowerCase();
        return contacts.filter(contact => {
            return contact.name.toLocaleLowerCase().includes(term) ||
                contact.phone.toLocaleLowerCase().includes(term) ||
                contact.email.toLocaleLowerCase().includes(term);
        });
    }
    getImage(name) {
        var firstName = name.split(' ')[0];
        var lastLetter = firstName.substr(firstName.length - 1, 1);
        var sex = (lastLetter === 'a' || lastLetter === 'e') ? 'female' : 'male';
        return `https://avatars.dicebear.com/api/${sex}/${name}.svg?mood[]=happy`;
    }
}
ContactService.ɵfac = function ContactService_Factory(t) { return new (t || ContactService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
ContactService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ContactService, factory: ContactService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "64+1":
/*!**************************************************************!*\
  !*** ./src/app/pages/contact-page/contact-page.component.ts ***!
  \**************************************************************/
/*! exports provided: ContactPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactPageComponent", function() { return ContactPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "wHSu");
/* harmony import */ var src_app_services_contact_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/contact.service */ "3ITz");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _cmps_contact_filter_contact_filter_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../cmps/contact-filter/contact-filter.component */ "UR78");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "6NWb");
/* harmony import */ var _cmps_contact_list_contact_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../cmps/contact-list/contact-list.component */ "QyWd");








class ContactPageComponent {
    constructor(contactService, router) {
        this.contactService = contactService;
        this.router = router;
        this.contacts = [];
        this.faPlus = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faPlus"];
    }
    ngOnInit() {
        this.contactService.loadContacts();
        this.subscription = this.contactService.contacts$.subscribe(contacts => {
            this.contacts = contacts;
        });
    }
    onFilterHandler(filterBy) {
        this.contactService.loadContacts(filterBy);
    }
    onAddContact() {
        this.router.navigate(['/contact/edit']);
    }
    onDeleteContact(contact) {
        this.contacts = this.contacts.filter(c => c !== contact);
    }
}
ContactPageComponent.ɵfac = function ContactPageComponent_Factory(t) { return new (t || ContactPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_contact_service__WEBPACK_IMPORTED_MODULE_2__["ContactService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
ContactPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContactPageComponent, selectors: [["contact-page"]], decls: 6, vars: 2, consts: [[3, "onFilter"], [3, "click"], [3, "icon"], [3, "contacts", "onDelete"]], template: function ContactPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "contact-filter", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onFilter", function ContactPageComponent_Template_contact_filter_onFilter_1_listener($event) { return ctx.onFilterHandler($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ContactPageComponent_Template_button_click_2_listener() { return ctx.onAddContact(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "fa-icon", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Add a contact\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "contact-list", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onDelete", function ContactPageComponent_Template_contact_list_onDelete_5_listener($event) { return ctx.onDeleteContact($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faPlus);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("contacts", ctx.contacts);
    } }, directives: [_cmps_contact_filter_contact_filter_component__WEBPACK_IMPORTED_MODULE_4__["ContactFilterComponent"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__["FaIconComponent"], _cmps_contact_list_contact_list_component__WEBPACK_IMPORTED_MODULE_6__["ContactListComponent"]], styles: ["button[_ngcontent-%COMP%] {\n  white-space: nowrap;\n  width: auto;\n}\nbutton[_ngcontent-%COMP%]   .ng-fa-icon[_ngcontent-%COMP%] {\n  padding-right: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY29udGFjdC1wYWdlL2NvbnRhY3QtcGFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG1CQUFBO0VBQ0EsV0FBQTtBQUNKO0FBQUk7RUFDSSxrQkFBQTtBQUVSIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvY29udGFjdC1wYWdlL2NvbnRhY3QtcGFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImJ1dHRvbntcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICB3aWR0aDogYXV0bzsgICAgXHJcbiAgICAubmctZmEtaWNvbntcclxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiA1cHg7XHJcbiAgICB9XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'contact-page',
                templateUrl: './contact-page.component.html',
                styleUrls: ['./contact-page.component.scss']
            }]
    }], function () { return [{ type: src_app_services_contact_service__WEBPACK_IMPORTED_MODULE_2__["ContactService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


/***/ }),

/***/ "69U+":
/*!********************************************************!*\
  !*** ./src/app/pages/statistic/statistic.component.ts ***!
  \********************************************************/
/*! exports provided: StatisticComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatisticComponent", function() { return StatisticComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _cmps_charts_market_price_market_price_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../cmps/charts/market-price/market-price.component */ "klgF");
/* harmony import */ var _cmps_charts_trade_volume_trade_volume_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../cmps/charts/trade-volume/trade-volume.component */ "TRNf");
/* harmony import */ var _cmps_charts_avg_block_size_avg_block_size_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../cmps/charts/avg-block-size/avg-block-size.component */ "IfRo");





class StatisticComponent {
    constructor() { }
    ngOnInit() {
    }
}
StatisticComponent.ɵfac = function StatisticComponent_Factory(t) { return new (t || StatisticComponent)(); };
StatisticComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: StatisticComponent, selectors: [["statistic"]], decls: 4, vars: 0, template: function StatisticComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "market-price");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "trade-volume");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "avg-block-size");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_cmps_charts_market_price_market_price_component__WEBPACK_IMPORTED_MODULE_1__["MarketPriceComponent"], _cmps_charts_trade_volume_trade_volume_component__WEBPACK_IMPORTED_MODULE_2__["TradeVolumeComponent"], _cmps_charts_avg_block_size_avg_block_size_component__WEBPACK_IMPORTED_MODULE_3__["AvgBlockSizeComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3N0YXRpc3RpYy9zdGF0aXN0aWMuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StatisticComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'statistic',
                templateUrl: './statistic.component.html',
                styleUrls: ['./statistic.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "8FSX":
/*!********************************************************************!*\
  !*** ./src/app/pages/contact-details/contact-details.component.ts ***!
  \********************************************************************/
/*! exports provided: ContactDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactDetailsComponent", function() { return ContactDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var src_app_services_contact_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/contact.service */ "3ITz");





function ContactDetailsComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h5", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r0.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", ctx_r0.contact.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.contact.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Email: ", ctx_r0.contact.email, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Phone: ", ctx_r0.contact.phone, "");
} }
class ContactDetailsComponent {
    constructor(route, location, contactService) {
        this.route = route;
        this.location = location;
        this.contactService = contactService;
        this.contact = null;
    }
    ngOnInit() {
        const id = this.route.snapshot.paramMap.get('id');
        console.log(id);
        this.contactService.getById(id).subscribe(contact => this.contact = contact);
    }
    goBack() {
        this.location.back();
    }
    get image() {
        return this.contactService.getImage(this.contact.name);
    }
}
ContactDetailsComponent.ɵfac = function ContactDetailsComponent_Factory(t) { return new (t || ContactDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_contact_service__WEBPACK_IMPORTED_MODULE_3__["ContactService"])); };
ContactDetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContactDetailsComponent, selectors: [["contact-details"]], decls: 4, vars: 1, consts: [["class", "card mb-3", "style", "max-width: 540px;", 4, "ngIf"], [3, "click"], [1, "card", "mb-3", 2, "max-width", "540px"], [1, "row", "no-gutters"], [1, "col-md-4"], [1, "card-img", 3, "src", "alt"], [1, "col-md-8"], [1, "card-body"], [1, "card-title"], [1, "card-text"]], template: function ContactDetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ContactDetailsComponent_div_1_Template, 12, 5, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ContactDetailsComponent_Template_button_click_2_listener() { return ctx.goBack(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Back");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.contact);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvbnRhY3QtZGV0YWlscy9jb250YWN0LWRldGFpbHMuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactDetailsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'contact-details',
                templateUrl: './contact-details.component.html',
                styleUrls: ['./contact-details.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }, { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"] }, { type: src_app_services_contact_service__WEBPACK_IMPORTED_MODULE_3__["ContactService"] }]; }, null); })();


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "BE/z":
/*!*************************************************!*\
  !*** ./src/app/cmps/header/header.component.ts ***!
  \*************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "wHSu");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "6NWb");





class HeaderComponent {
    constructor() {
        this.faHome = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faHome"];
        this.faUserFriends = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faUserFriends"];
        this.faChartLine = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faChartLine"];
    }
    ngOnInit() {
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["header"]], decls: 7, vars: 3, consts: [[1, "main-nav"], ["routerLink", "/home", "title", "Home"], [3, "icon"], ["routerLink", "/contacts", "title", "Contacts"], ["routerLink", "/stats", "title", "Charts"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "fa-icon", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "fa-icon", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "fa-icon", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faHome);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faUserFriends);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faChartLine);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FaIconComponent"]], styles: [".main-nav[_ngcontent-%COMP%] {\n  background-color: #e86f1c;\n  padding: 17px;\n  font-size: 30px;\n}\n.main-nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .main-nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:active, .main-nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:visited {\n  color: #f6f6f6;\n  display: inline-block;\n  margin-right: 20px;\n}\n.main-nav[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n  padding: 0;\n  font-size: rem(24px);\n  font-family: Merriweather-Bold;\n}\n.mobile-nav[_ngcontent-%COMP%] {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY21wcy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2Fzc2V0cy9zdHlsZS9zZXR1cC9fdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSx5QkNHRztFREZILGFBQUE7RUFDQSxlQUFBO0FBQUo7QUFDSTtFQUNBLGNDTEc7RURNSCxxQkFBQTtFQUNBLGtCQUFBO0FBQ0o7QUFDSTtFQUNJLFVBQUE7RUFDQSxvQkFBQTtFQUNBLDhCQUFBO0FBQ1I7QUFFQTtFQUNJLGFBQUE7QUFDSiIsImZpbGUiOiJzcmMvYXBwL2NtcHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi8uLi9hc3NldHMvc3R5bGUvc2V0dXAvdmFyaWFibGVzXCI7XHJcbi5tYWluLW5hdiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY2xyNTtcclxuICAgIHBhZGRpbmc6IDE3cHg7XHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICBhLCBhOmFjdGl2ZSwgYTp2aXNpdGVke1xyXG4gICAgY29sb3I6ICRjbHIxO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG4gICAgfVxyXG4gICAgLmxvZ28ge1xyXG4gICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgZm9udC1zaXplOiByZW0oMjRweCk7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IE1lcnJpd2VhdGhlci1Cb2xkO1xyXG4gICAgfVxyXG59XHJcbi5tb2JpbGUtbmF2IHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuIiwiLy8gQ29sb3JzXG4kY2xyMTogI2Y2ZjZmNjtcbiRjbHIyOiAjMzEzMTMxO1xuJGNscjM6ICNmMGYwZjA7XG4kY2xyNDogI2U0ZTRlNDtcbiRjbHI1OiAjZTg2ZjFjO1xuJGNscjY6ICNjYTY3MjM7XG4kY2xyNzogIzYwNzYzMDtcbiRjbHI4OiAjYmJiYmJiO1xuJGNscjk6ICNkNmM0NWY7XG5cbi8vIEJyZWFrcG9pbnRzXG4kbW9iaWxlLWJyZWFrcG9pbnQ6IDQ2MHB4O1xuJG5hcnJvdy1icmVha3BvaW50OiA3MjBweDtcbiRub3JtYWwtYnJlYWtwb2ludDogOTYwcHg7Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'header',
                templateUrl: './header.component.html',
                styleUrls: ['./header.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "BYzK":
/*!*****************************************!*\
  !*** ./src/app/models/contact.model.ts ***!
  \*****************************************/
/*! exports provided: Contact */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Contact", function() { return Contact; });
class Contact {
    constructor(_id, name = '', email = '', phone = '') {
        this._id = _id;
        this.name = name;
        this.email = email;
        this.phone = phone;
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


/***/ }),

/***/ "DMJ4":
/*!***************************************************************************!*\
  !*** ./src/app/cmps/delete-confirmation/delete-confirmation.component.ts ***!
  \***************************************************************************/
/*! exports provided: DeleteConfirmationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteConfirmationComponent", function() { return DeleteConfirmationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");



class DeleteConfirmationComponent {
    constructor(modal) {
        this.modal = modal;
    }
    ngOnInit() {
    }
}
DeleteConfirmationComponent.ɵfac = function DeleteConfirmationComponent_Factory(t) { return new (t || DeleteConfirmationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbActiveModal"])); };
DeleteConfirmationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DeleteConfirmationComponent, selectors: [["delete-confirmation"]], inputs: { contactName: "contactName" }, decls: 22, vars: 1, consts: [[1, "modal-header"], ["id", "modal-title", 1, "modal-title"], ["type", "button", "aria-describedby", "modal-title", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], [1, "text-primary"], [1, "text-danger"], [1, "modal-footer"], ["type", "button", "ngbAutofocus", "", 1, "btn", "btn-outline-secondary", 3, "click"], ["type", "button", 1, "btn", "btn-danger", 3, "click"]], template: function DeleteConfirmationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Delete a contact");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DeleteConfirmationComponent_Template_button_click_3_listener() { return ctx.modal.dismiss("Cross click"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Are you sure you want to delete ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " profile?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "All information associated to this user profile will be permanently deleted. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "This operation can not be undone.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DeleteConfirmationComponent_Template_button_click_18_listener() { return ctx.modal.dismiss("cancel click"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DeleteConfirmationComponent_Template_button_click_20_listener() { return ctx.modal.close("Ok click"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Ok");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.contactName);
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NtcHMvZGVsZXRlLWNvbmZpcm1hdGlvbi9kZWxldGUtY29uZmlybWF0aW9uLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DeleteConfirmationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'delete-confirmation',
                templateUrl: './delete-confirmation.component.html',
                styleUrls: ['./delete-confirmation.component.scss']
            }]
    }], function () { return [{ type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbActiveModal"] }]; }, { contactName: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "IfRo":
/*!************************************************************************!*\
  !*** ./src/app/cmps/charts/avg-block-size/avg-block-size.component.ts ***!
  \************************************************************************/
/*! exports provided: AvgBlockSizeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AvgBlockSizeComponent", function() { return AvgBlockSizeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _models_chart_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../models/chart.model */ "Q/fy");
/* harmony import */ var src_app_services_chart_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/chart.service */ "tC2j");
/* harmony import */ var angular_google_charts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-google-charts */ "icpI");





class AvgBlockSizeComponent {
    constructor(chartService) {
        this.chartService = chartService;
        this.absChart = new _models_chart_model__WEBPACK_IMPORTED_MODULE_1__["Chart"](['Date', 'USD'], { hAxis: { title: 'Date' }, vAxis: { title: 'USD' } });
    }
    ngOnInit() {
        this.chartService.loadABSChart();
        this.subscription = this.chartService.absChart$.subscribe(chart => {
            this.absChart.setDataFromChart(chart);
        });
    }
}
AvgBlockSizeComponent.ɵfac = function AvgBlockSizeComponent_Factory(t) { return new (t || AvgBlockSizeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_chart_service__WEBPACK_IMPORTED_MODULE_2__["ChartService"])); };
AvgBlockSizeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AvgBlockSizeComponent, selectors: [["avg-block-size"]], decls: 3, vars: 8, consts: [[3, "title", "type", "data", "columns", "options", "width", "height"]], template: function AvgBlockSizeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "google-chart", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.absChart.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", ctx.absChart.description)("type", ctx.absChart.type)("data", ctx.absChart.data)("columns", ctx.absChart.columns)("options", ctx.absChart.options)("width", ctx.absChart.width)("height", ctx.absChart.height);
    } }, directives: [angular_google_charts__WEBPACK_IMPORTED_MODULE_3__["GoogleChartComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NtcHMvY2hhcnRzL2F2Zy1ibG9jay1zaXplL2F2Zy1ibG9jay1zaXplLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AvgBlockSizeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'avg-block-size',
                templateUrl: './avg-block-size.component.html',
                styleUrls: ['./avg-block-size.component.scss']
            }]
    }], function () { return [{ type: src_app_services_chart_service__WEBPACK_IMPORTED_MODULE_2__["ChartService"] }]; }, null); })();


/***/ }),

/***/ "JFIp":
/*!********************************************************!*\
  !*** ./src/app/pages/home-page/home-page.component.ts ***!
  \********************************************************/
/*! exports provided: HomePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageComponent", function() { return HomePageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/user.service */ "qfBg");
/* harmony import */ var src_app_services_bitcoin_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/bitcoin.service */ "0NuV");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");





function HomePageComponent_h1_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Hello ", ctx_r0.user.name, "");
} }
function HomePageComponent_p_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Coins: ", ctx_r1.user.coins, "");
} }
class HomePageComponent {
    constructor(userService, bitcoinService) {
        this.userService = userService;
        this.bitcoinService = bitcoinService;
        this.user = null;
        this.btc = 0;
    }
    ngOnInit() {
        this.userService.getUser();
        this.userSubscription = this.userService.user$.subscribe(user => {
            this.user = user;
            if (user) {
                this.bitcoinService.getRate(this.user.coins);
                this.bitcoinSubscription = this.bitcoinService.btc$.subscribe(btc => this.btc = btc);
            }
        });
    }
    ngOnDestroy() {
        this.userSubscription.unsubscribe();
    }
}
HomePageComponent.ɵfac = function HomePageComponent_Factory(t) { return new (t || HomePageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_bitcoin_service__WEBPACK_IMPORTED_MODULE_2__["BitcoinService"])); };
HomePageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomePageComponent, selectors: [["home-page"]], decls: 7, vars: 3, consts: [[1, "container"], [4, "ngIf"], [1, "icon"], ["src", "../../../assets/img/bitcoin.png", "alt", "coins"], ["src", "../../../assets/img/coins.png", "alt", "coins"]], template: function HomePageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HomePageComponent_h1_1_Template, 2, 1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, HomePageComponent_p_2_Template, 4, 1, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.user);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.user);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("BTC: ", ctx.btc, "");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]], styles: ["p[_ngcontent-%COMP%] {\n  font-size: 2em;\n}\n\n.icon[_ngcontent-%COMP%] {\n  padding-right: 5px;\n}\n\n.icon[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 48px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaG9tZS1wYWdlL2hvbWUtcGFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQUE7QUFDSjs7QUFDQTtFQUNJLGtCQUFBO0FBRUo7O0FBREk7RUFDSSxXQUFBO0FBR1IiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9ob21lLXBhZ2UvaG9tZS1wYWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsicCB7XHJcbiAgICBmb250LXNpemU6IDJlbTtcclxufVxyXG4uaWNvbiB7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiA1cHg7XHJcbiAgICBpbWcge1xyXG4gICAgICAgIHdpZHRoOiA0OHB4O1xyXG4gICAgfVxyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomePageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'home-page',
                templateUrl: './home-page.component.html',
                styleUrls: ['./home-page.component.scss']
            }]
    }], function () { return [{ type: _services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"] }, { type: src_app_services_bitcoin_service__WEBPACK_IMPORTED_MODULE_2__["BitcoinService"] }]; }, null); })();


/***/ }),

/***/ "Q/fy":
/*!***************************************!*\
  !*** ./src/app/models/chart.model.ts ***!
  \***************************************/
/*! exports provided: Chart */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Chart", function() { return Chart; });
class Chart {
    constructor(columns, options, type = 'LineChart', width = 800, height = 500) {
        this.title = '';
        this.description = '';
        this.type = type;
        this.columns = columns;
        this.options = options;
        this.width = width;
        this.height = height;
    }
    setDataFromChart(chart) {
        if (chart) {
            this.data = chart['values'].map(value => [new Date(+value.x * 1000).toLocaleDateString('en'), value.y]);
            this.title = chart.name;
            this.description = chart.description;
        }
    }
}


/***/ }),

/***/ "QyWd":
/*!*************************************************************!*\
  !*** ./src/app/cmps/contact-list/contact-list.component.ts ***!
  \*************************************************************/
/*! exports provided: ContactListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactListComponent", function() { return ContactListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _contact_preview_contact_preview_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../contact-preview/contact-preview.component */ "2uUW");




function ContactListComponent_contact_preview_1_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "contact-preview", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onDelete", function ContactListComponent_contact_preview_1_Template_contact_preview_onDelete_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.onDeleteContact($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const contact_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("contact", contact_r1);
} }
class ContactListComponent {
    constructor() {
        this.onDelete = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
    }
    onDeleteContact(contact) {
        this.onDelete.emit(contact);
    }
}
ContactListComponent.ɵfac = function ContactListComponent_Factory(t) { return new (t || ContactListComponent)(); };
ContactListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContactListComponent, selectors: [["contact-list"]], inputs: { contacts: "contacts" }, outputs: { onDelete: "onDelete" }, decls: 2, vars: 1, consts: [[1, "contacts-list", "card-group"], [3, "contact", "onDelete", 4, "ngFor", "ngForOf"], [3, "contact", "onDelete"]], template: function ContactListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ContactListComponent_contact_preview_1_Template, 1, 1, "contact-preview", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.contacts);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _contact_preview_contact_preview_component__WEBPACK_IMPORTED_MODULE_2__["ContactPreviewComponent"]], styles: ["ul[_ngcontent-%COMP%] {\n  padding-left: 0;\n  margin-top: 2em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY21wcy9jb250YWN0LWxpc3QvY29udGFjdC1saXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBQTtFQUNBLGVBQUE7QUFDSiIsImZpbGUiOiJzcmMvYXBwL2NtcHMvY29udGFjdC1saXN0L2NvbnRhY3QtbGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInVse1xyXG4gICAgcGFkZGluZy1sZWZ0OiAwO1xyXG4gICAgbWFyZ2luLXRvcDogMmVtO1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'contact-list',
                templateUrl: './contact-list.component.html',
                styleUrls: ['./contact-list.component.scss']
            }]
    }], function () { return []; }, { contacts: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], onDelete: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _cmps_header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cmps/header/header.component */ "BE/z");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");




class AppComponent {
    constructor() {
        this.title = 'mister-bitcoin';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 4, vars: 0, consts: [[1, "app"], [1, "container"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_cmps_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], null, null); })();


/***/ }),

/***/ "TRNf":
/*!********************************************************************!*\
  !*** ./src/app/cmps/charts/trade-volume/trade-volume.component.ts ***!
  \********************************************************************/
/*! exports provided: TradeVolumeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TradeVolumeComponent", function() { return TradeVolumeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _models_chart_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../models/chart.model */ "Q/fy");
/* harmony import */ var src_app_services_chart_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/chart.service */ "tC2j");
/* harmony import */ var angular_google_charts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-google-charts */ "icpI");





class TradeVolumeComponent {
    constructor(chartService) {
        this.chartService = chartService;
        this.tvChart = new _models_chart_model__WEBPACK_IMPORTED_MODULE_1__["Chart"](['Date', 'USD'], { hAxis: { title: 'Date' }, vAxis: { title: 'USD' } });
    }
    ngOnInit() {
        this.chartService.loadTVChart();
        this.subscription = this.chartService.tvChart$.subscribe(chart => {
            this.tvChart.setDataFromChart(chart);
        });
    }
}
TradeVolumeComponent.ɵfac = function TradeVolumeComponent_Factory(t) { return new (t || TradeVolumeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_chart_service__WEBPACK_IMPORTED_MODULE_2__["ChartService"])); };
TradeVolumeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TradeVolumeComponent, selectors: [["trade-volume"]], decls: 3, vars: 8, consts: [[3, "title", "type", "data", "columns", "options", "width", "height"]], template: function TradeVolumeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "google-chart", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.tvChart.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", ctx.tvChart.title)("type", ctx.tvChart.type)("data", ctx.tvChart.data)("columns", ctx.tvChart.columns)("options", ctx.tvChart.options)("width", ctx.tvChart.width)("height", ctx.tvChart.height);
    } }, directives: [angular_google_charts__WEBPACK_IMPORTED_MODULE_3__["GoogleChartComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NtcHMvY2hhcnRzL3RyYWRlLXZvbHVtZS90cmFkZS12b2x1bWUuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TradeVolumeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'trade-volume',
                templateUrl: './trade-volume.component.html',
                styleUrls: ['./trade-volume.component.scss']
            }]
    }], function () { return [{ type: src_app_services_chart_service__WEBPACK_IMPORTED_MODULE_2__["ChartService"] }]; }, null); })();


/***/ }),

/***/ "UR78":
/*!*****************************************************************!*\
  !*** ./src/app/cmps/contact-filter/contact-filter.component.ts ***!
  \*****************************************************************/
/*! exports provided: ContactFilterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactFilterComponent", function() { return ContactFilterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");



class ContactFilterComponent {
    constructor() {
        this.onFilter = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.filterBy = {
            name: '',
            phone: ''
        };
    }
    ngOnInit() {
    }
    filter() {
        this.onFilter.emit(this.filterBy);
    }
}
ContactFilterComponent.ɵfac = function ContactFilterComponent_Factory(t) { return new (t || ContactFilterComponent)(); };
ContactFilterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContactFilterComponent, selectors: [["contact-filter"]], outputs: { onFilter: "onFilter" }, decls: 3, vars: 2, consts: [[1, "main-filter"], ["type", "text", "placeholder", "Search by name", 3, "ngModel", "ngModelChange", "keydown"], ["type", "text", "placeholder", "Search by phone", 3, "ngModel", "ngModelChange", "keydown"]], template: function ContactFilterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ContactFilterComponent_Template_input_ngModelChange_1_listener($event) { return ctx.filterBy.name = $event; })("keydown", function ContactFilterComponent_Template_input_keydown_1_listener() { return ctx.filter(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ContactFilterComponent_Template_input_ngModelChange_2_listener($event) { return ctx.filterBy.phone = $event; })("keydown", function ContactFilterComponent_Template_input_keydown_2_listener() { return ctx.filter(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.filterBy.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.filterBy.phone);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"]], styles: [".main-filter[_ngcontent-%COMP%] {\n  width: 50%;\n  padding: 20px 0px;\n  margin: 0;\n  display: flex;\n  flex-direction: column;\n}\n@media (max-width: 500px) {\n  .main-filter[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n  }\n}\n.main-filter[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:first-child {\n  margin-bottom: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hc3NldHMvc3R5bGUvc2V0dXAvX21peGlucy5zY3NzIiwic3JjL2FwcC9jbXBzL2NvbnRhY3QtZmlsdGVyL2NvbnRhY3QtZmlsdGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHNCQUFBO0FBMEJBLGtCQUFBO0FDeEJBO0VBQ0ksVUFBQTtFQUNBLGlCQUFBO0VBQ0EsU0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtBQUNKO0FETEk7RUNESjtJQU9RLGFBQUE7SUFDQSxzQkFBQTtFQUdOO0FBQ0Y7QUFGSTtFQUNJLG1CQUFBO0FBSVIiLCJmaWxlIjoic3JjL2FwcC9jbXBzL2NvbnRhY3QtZmlsdGVyL2NvbnRhY3QtZmlsdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogQnJlYWtwb2ludCBtaXhpbnMgKi9cblxuQG1peGluIGZvci1tb2JpbGUtbGF5b3V0IHtcbiAgICBAbWVkaWEgKG1heC13aWR0aDogJG1vYmlsZS1icmVha3BvaW50ICsgNDApIHtcbiAgICAgICAgQGNvbnRlbnQ7XG4gICAgfVxufVxuXG5AbWl4aW4gZm9yLW5hcnJvdy1sYXlvdXQge1xuICAgIEBtZWRpYSAobWluLXdpZHRoOiAkbW9iaWxlLWJyZWFrcG9pbnQgKyA0MCkge1xuICAgICAgICBAY29udGVudDtcbiAgICB9XG59XG5cbkBtaXhpbiBmb3Itbm9ybWFsLWxheW91dCB7XG4gICAgQG1lZGlhIChtYXgtd2lkdGg6ICRuYXJyb3ctYnJlYWtwb2ludCArIDQwKSB7XG4gICAgICAgIEBjb250ZW50O1xuICAgIH1cbn1cblxuQG1peGluIGZvci13aWRlLWxheW91dCB7XG4gICAgQG1lZGlhIChtYXgtd2lkdGg6ICRub3JtYWwtYnJlYWtwb2ludCArIDQwKSB7XG4gICAgICAgIEBjb250ZW50O1xuICAgIH1cbn1cblxuLyogTWVkaWEgIE1peGlucyAqL1xuQG1peGluIGFzcGVjdC1yYXRpbygkd2lkdGgsICRoZWlnaHQpIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAmOjpiZWZvcmUge1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBwYWRkaW5nLXRvcDogKCRoZWlnaHQgLyAkd2lkdGgpICogMTAwJTtcbiAgICB9XG4gICAgPiAqIHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHRvcDogMDtcbiAgICAgIGxlZnQ6IDA7XG4gICAgICByaWdodDogMDtcbiAgICAgIGJvdHRvbTogMDtcbiAgICB9XG4gIFxuICAgID4gaW1nIHtcbiAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgIH1cbiAgfVxuICBcbiAgLy8gTWl4aW4gZm9yIHJlbW92aW5nIGhvdmVyIGVmZWN0cyBvbiBpcGhvbmUgc2NyZWVuXG4gIEBtaXhpbiBob3Zlci1zdXBwb3J0ZWQgeyAgICBcbiAgICBAbWVkaWEgbm90IGFsbCBhbmQgKHBvaW50ZXI6IGNvYXJzZSkge1xuICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfVxuICB9IiwiQGltcG9ydCBcIi4uLy4uLy4uL2Fzc2V0cy9zdHlsZS9zZXR1cC9taXhpbnNcIjtcclxuQGltcG9ydCBcIi4uLy4uLy4uL2Fzc2V0cy9zdHlsZS9zZXR1cC92YXJpYWJsZXNcIjtcclxuLm1haW4tZmlsdGVyIHtcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICBwYWRkaW5nOiAyMHB4IDBweDtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyAgICBcclxuICAgIEBpbmNsdWRlIGZvci1tb2JpbGUtbGF5b3V0IHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICB9XHJcbiAgICBpbnB1dDpmaXJzdC1jaGlsZHtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gICAgfVxyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactFilterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'contact-filter',
                templateUrl: './contact-filter.component.html',
                styleUrls: ['./contact-filter.component.scss']
            }]
    }], function () { return []; }, { onFilter: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _pages_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/home-page/home-page.component */ "JFIp");
/* harmony import */ var _pages_contact_page_contact_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/contact-page/contact-page.component */ "64+1");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _pages_contact_details_contact_details_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/contact-details/contact-details.component */ "8FSX");
/* harmony import */ var _pages_statistic_statistic_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/statistic/statistic.component */ "69U+");
/* harmony import */ var _cmps_contact_list_contact_list_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./cmps/contact-list/contact-list.component */ "QyWd");
/* harmony import */ var _cmps_contact_preview_contact_preview_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./cmps/contact-preview/contact-preview.component */ "2uUW");
/* harmony import */ var _cmps_contact_filter_contact_filter_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./cmps/contact-filter/contact-filter.component */ "UR78");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _cmps_header_header_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./cmps/header/header.component */ "BE/z");
/* harmony import */ var angular_google_charts__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! angular-google-charts */ "icpI");
/* harmony import */ var _cmps_charts_market_price_market_price_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./cmps/charts/market-price/market-price.component */ "klgF");
/* harmony import */ var _cmps_charts_trade_volume_trade_volume_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./cmps/charts/trade-volume/trade-volume.component */ "TRNf");
/* harmony import */ var _pages_contact_edit_page_contact_edit_page_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./pages/contact-edit-page/contact-edit-page.component */ "gqJ6");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "6NWb");
/* harmony import */ var _cmps_charts_avg_block_size_avg_block_size_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./cmps/charts/avg-block-size/avg-block-size.component */ "IfRo");
/* harmony import */ var _cmps_delete_confirmation_delete_confirmation_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./cmps/delete-confirmation/delete-confirmation.component */ "DMJ4");























class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [_angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"]], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__["NgbModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
            angular_google_charts__WEBPACK_IMPORTED_MODULE_15__["GoogleChartsModule"],
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_19__["FontAwesomeModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
        _pages_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_5__["HomePageComponent"],
        _pages_contact_page_contact_page_component__WEBPACK_IMPORTED_MODULE_6__["ContactPageComponent"],
        _pages_contact_details_contact_details_component__WEBPACK_IMPORTED_MODULE_8__["ContactDetailsComponent"],
        _pages_statistic_statistic_component__WEBPACK_IMPORTED_MODULE_9__["StatisticComponent"],
        _cmps_contact_list_contact_list_component__WEBPACK_IMPORTED_MODULE_10__["ContactListComponent"],
        _cmps_contact_preview_contact_preview_component__WEBPACK_IMPORTED_MODULE_11__["ContactPreviewComponent"],
        _cmps_contact_filter_contact_filter_component__WEBPACK_IMPORTED_MODULE_12__["ContactFilterComponent"],
        _cmps_header_header_component__WEBPACK_IMPORTED_MODULE_14__["HeaderComponent"],
        _cmps_charts_market_price_market_price_component__WEBPACK_IMPORTED_MODULE_16__["MarketPriceComponent"],
        _cmps_charts_trade_volume_trade_volume_component__WEBPACK_IMPORTED_MODULE_17__["TradeVolumeComponent"],
        _pages_contact_edit_page_contact_edit_page_component__WEBPACK_IMPORTED_MODULE_18__["ContactEditPageComponent"],
        _cmps_charts_avg_block_size_avg_block_size_component__WEBPACK_IMPORTED_MODULE_20__["AvgBlockSizeComponent"],
        _cmps_delete_confirmation_delete_confirmation_component__WEBPACK_IMPORTED_MODULE_21__["DeleteConfirmationComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__["NgbModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
        angular_google_charts__WEBPACK_IMPORTED_MODULE_15__["GoogleChartsModule"],
        _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_19__["FontAwesomeModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                    _pages_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_5__["HomePageComponent"],
                    _pages_contact_page_contact_page_component__WEBPACK_IMPORTED_MODULE_6__["ContactPageComponent"],
                    _pages_contact_details_contact_details_component__WEBPACK_IMPORTED_MODULE_8__["ContactDetailsComponent"],
                    _pages_statistic_statistic_component__WEBPACK_IMPORTED_MODULE_9__["StatisticComponent"],
                    _cmps_contact_list_contact_list_component__WEBPACK_IMPORTED_MODULE_10__["ContactListComponent"],
                    _cmps_contact_preview_contact_preview_component__WEBPACK_IMPORTED_MODULE_11__["ContactPreviewComponent"],
                    _cmps_contact_filter_contact_filter_component__WEBPACK_IMPORTED_MODULE_12__["ContactFilterComponent"],
                    _cmps_header_header_component__WEBPACK_IMPORTED_MODULE_14__["HeaderComponent"],
                    _cmps_charts_market_price_market_price_component__WEBPACK_IMPORTED_MODULE_16__["MarketPriceComponent"],
                    _cmps_charts_trade_volume_trade_volume_component__WEBPACK_IMPORTED_MODULE_17__["TradeVolumeComponent"],
                    _pages_contact_edit_page_contact_edit_page_component__WEBPACK_IMPORTED_MODULE_18__["ContactEditPageComponent"],
                    _cmps_charts_avg_block_size_avg_block_size_component__WEBPACK_IMPORTED_MODULE_20__["AvgBlockSizeComponent"],
                    _cmps_delete_confirmation_delete_confirmation_component__WEBPACK_IMPORTED_MODULE_21__["DeleteConfirmationComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__["NgbModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                    angular_google_charts__WEBPACK_IMPORTED_MODULE_15__["GoogleChartsModule"],
                    _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_19__["FontAwesomeModule"]
                ],
                providers: [_angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"]],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "gqJ6":
/*!************************************************************************!*\
  !*** ./src/app/pages/contact-edit-page/contact-edit-page.component.ts ***!
  \************************************************************************/
/*! exports provided: ContactEditPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactEditPageComponent", function() { return ContactEditPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_models_contact_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/contact.model */ "BYzK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_contact_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/contact.service */ "3ITz");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");








function ContactEditPageComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "form", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function ContactEditPageComponent_div_1_Template_form_ngSubmit_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r1.onSave(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "input", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Phone ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Email ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Save");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ContactEditPageComponent_div_1_Template_button_click_15_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.goBack(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Back");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r0.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", ctx_r0.contact.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r0.contactForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r0.contactForm.valid);
} }
class ContactEditPageComponent {
    constructor(route, contactService, fb, router, location) {
        this.route = route;
        this.contactService = contactService;
        this.fb = fb;
        this.router = router;
        this.location = location;
        this.contact = new src_app_models_contact_model__WEBPACK_IMPORTED_MODULE_2__["Contact"]();
        this.phoneRegex = /^[+]?[0-9]*[-\s\.]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
        this.buttonText = 'Save';
    }
    ngOnInit() {
        const id = this.route.snapshot.paramMap.get('id');
        if (id) {
            this.contactService.getById(id).subscribe(contact => {
                this.contact = contact;
                this.setForm();
            });
        }
        else {
            this.setForm();
        }
    }
    setForm() {
        this.contactForm = this.fb.group({
            name: [this.contact.name, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(50)]],
            phone: [this.contact.phone, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(this.phoneRegex)]],
            email: [this.contact.email, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]]
        });
    }
    onSave() {
        var data = this.contactForm.value;
        if (this.contact._id) {
            data = Object.assign(Object.assign({}, data), { _id: this.contact._id });
        }
        this.contactService.saveContact(data).subscribe(() => this.router.navigateByUrl('contacts'));
    }
    get image() {
        return this.contactService.getImage(this.contact.name);
    }
    goBack() {
        this.location.back();
    }
}
ContactEditPageComponent.ɵfac = function ContactEditPageComponent_Factory(t) { return new (t || ContactEditPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_contact_service__WEBPACK_IMPORTED_MODULE_4__["ContactService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"])); };
ContactEditPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContactEditPageComponent, selectors: [["contact-edit-page"]], decls: 2, vars: 1, consts: [["class", "contact-form", 4, "ngIf"], [1, "contact-form"], [3, "src", "alt"], [1, "flex", "column", 3, "formGroup", "ngSubmit"], ["type", "text", "formControlName", "name", "placeholder", "Name", "required", ""], ["type", "phone", "formControlName", "phone", "placeholder", "+1 (123) 333-4444"], ["type", "email", "formControlName", "email", "placeholder", "Email"], [1, "flex", "justify-between"], ["type", "submit", 3, "disabled"], ["type", "button", 1, "btn-outline", 3, "click"]], template: function ContactEditPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ContactEditPageComponent_div_1_Template, 17, 4, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.contactForm);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"]], styles: ["img[_ngcontent-%COMP%] {\n  width: 150px;\n}\n\n.contact-form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n  width: 50%;\n}\n\ninput[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n}\n\nbutton[_ngcontent-%COMP%]:disabled {\n  cursor: auto;\n  background-color: gray;\n  border: 1px solid lightgrey;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY29udGFjdC1lZGl0LXBhZ2UvY29udGFjdC1lZGl0LXBhZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0FBQ0o7O0FBQ0E7RUFDSSxVQUFBO0FBRUo7O0FBQUE7RUFDSSxjQUFBO0VBQ0EsV0FBQTtBQUdKOztBQURBO0VBQ0ksWUFBQTtFQUNBLHNCQUFBO0VBQ0EsMkJBQUE7QUFJSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvbnRhY3QtZWRpdC1wYWdlL2NvbnRhY3QtZWRpdC1wYWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW1ne1xyXG4gICAgd2lkdGg6IDE1MHB4XHJcbn1cclxuLmNvbnRhY3QtZm9ybSBmb3Jte1xyXG4gICAgd2lkdGg6IDUwJTtcclxufVxyXG5pbnB1dHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuYnV0dG9uOmRpc2FibGVke1xyXG4gICAgY3Vyc29yOiBhdXRvO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JleVxyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactEditPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'contact-edit-page',
                templateUrl: './contact-edit-page.component.html',
                styleUrls: ['./contact-edit-page.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }, { type: src_app_services_contact_service__WEBPACK_IMPORTED_MODULE_4__["ContactService"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"] }]; }, null); })();


/***/ }),

/***/ "klgF":
/*!********************************************************************!*\
  !*** ./src/app/cmps/charts/market-price/market-price.component.ts ***!
  \********************************************************************/
/*! exports provided: MarketPriceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarketPriceComponent", function() { return MarketPriceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _models_chart_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../models/chart.model */ "Q/fy");
/* harmony import */ var src_app_services_chart_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/chart.service */ "tC2j");
/* harmony import */ var angular_google_charts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-google-charts */ "icpI");





class MarketPriceComponent {
    constructor(chartService) {
        this.chartService = chartService;
        this.mpChart = new _models_chart_model__WEBPACK_IMPORTED_MODULE_1__["Chart"](['Date', 'USD'], { hAxis: { title: 'Date' }, vAxis: { title: 'USD' } });
    }
    ngOnInit() {
        this.chartService.loadMPChart();
        this.subscription = this.chartService.mpChart$.subscribe(chart => {
            this.mpChart.setDataFromChart(chart);
        });
    }
}
MarketPriceComponent.ɵfac = function MarketPriceComponent_Factory(t) { return new (t || MarketPriceComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_chart_service__WEBPACK_IMPORTED_MODULE_2__["ChartService"])); };
MarketPriceComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MarketPriceComponent, selectors: [["market-price"]], decls: 3, vars: 8, consts: [[3, "title", "type", "data", "columns", "options", "width", "height"]], template: function MarketPriceComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "google-chart", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.mpChart.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", ctx.mpChart.description)("type", ctx.mpChart.type)("data", ctx.mpChart.data)("columns", ctx.mpChart.columns)("options", ctx.mpChart.options)("width", ctx.mpChart.width)("height", ctx.mpChart.height);
    } }, directives: [angular_google_charts__WEBPACK_IMPORTED_MODULE_3__["GoogleChartComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NtcHMvY2hhcnRzL21hcmtldC1wcmljZS9tYXJrZXQtcHJpY2UuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MarketPriceComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'market-price',
                templateUrl: './market-price.component.html',
                styleUrls: ['./market-price.component.scss']
            }]
    }], function () { return [{ type: src_app_services_chart_service__WEBPACK_IMPORTED_MODULE_2__["ChartService"] }]; }, null); })();


/***/ }),

/***/ "qfBg":
/*!******************************************!*\
  !*** ./src/app/services/user.service.ts ***!
  \******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");





class UserService {
    constructor(http) {
        this.http = http;
        this.BASE_URL = 'http://localhost:3000/user';
        this._user$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
        this.user$ = this._user$.asObservable();
    }
    getUser() {
        this.http.get(this.BASE_URL).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(() => Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])('user not found!'))).subscribe(user => {
            this._user$.next(user);
        });
    }
}
UserService.ɵfac = function UserService_Factory(t) { return new (t || UserService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
UserService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: UserService, factory: UserService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "tC2j":
/*!*******************************************!*\
  !*** ./src/app/services/chart.service.ts ***!
  \*******************************************/
/*! exports provided: ChartService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartService", function() { return ChartService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");





class ChartService {
    constructor(http) {
        this.http = http;
        this.BASE_URL = 'http://localhost:3000';
        this._mpChart$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
        this.mpChart$ = this._mpChart$.asObservable();
        this._tvChart$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
        this.tvChart$ = this._tvChart$.asObservable();
        this._absChart$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
        this.absChart$ = this._absChart$.asObservable();
    }
    loadMPChart() {
        this.loadChart('/market-price', this._mpChart$);
    }
    loadTVChart() {
        this.loadChart('/trade-volume', this._tvChart$);
    }
    loadABSChart() {
        this.loadChart('/avg-block-size', this._absChart$);
    }
    loadChart(location, observable) {
        this.http.get(this.BASE_URL + location)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(chart => chart), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError('loadChart', []))).subscribe(chart => {
            observable.next(chart);
        });
    }
    handleError(operation = 'operation', result) {
        return (error) => {
            console.error(operation, error);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(result);
        };
    }
}
ChartService.ɵfac = function ChartService_Factory(t) { return new (t || ChartService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
ChartService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ChartService, factory: ChartService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChartService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _pages_contact_details_contact_details_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/contact-details/contact-details.component */ "8FSX");
/* harmony import */ var _pages_contact_edit_page_contact_edit_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/contact-edit-page/contact-edit-page.component */ "gqJ6");
/* harmony import */ var _pages_contact_page_contact_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/contact-page/contact-page.component */ "64+1");
/* harmony import */ var _pages_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/home-page/home-page.component */ "JFIp");
/* harmony import */ var _pages_statistic_statistic_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/statistic/statistic.component */ "69U+");









const routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: _pages_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_5__["HomePageComponent"] },
    { path: 'contact/edit/:id', component: _pages_contact_edit_page_contact_edit_page_component__WEBPACK_IMPORTED_MODULE_3__["ContactEditPageComponent"] },
    { path: 'contact/edit', component: _pages_contact_edit_page_contact_edit_page_component__WEBPACK_IMPORTED_MODULE_3__["ContactEditPageComponent"] },
    { path: 'contact/:id', component: _pages_contact_details_contact_details_component__WEBPACK_IMPORTED_MODULE_2__["ContactDetailsComponent"] },
    { path: 'contacts', component: _pages_contact_page_contact_page_component__WEBPACK_IMPORTED_MODULE_4__["ContactPageComponent"] },
    { path: 'stats', component: _pages_statistic_statistic_component__WEBPACK_IMPORTED_MODULE_6__["StatisticComponent"] }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map