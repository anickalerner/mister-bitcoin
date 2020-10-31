import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'contact-filter',
  templateUrl: './contact-filter.component.html',
  styleUrls: ['./contact-filter.component.scss']
})

export class ContactFilterComponent implements OnInit {
  @Output() onFilter = new EventEmitter();
  filterBy = {
    name: '',
    phone: ''
  }
  constructor() { }

  ngOnInit(): void {
  }

  filter(){
    this.onFilter.emit(this.filterBy);
  }

}
