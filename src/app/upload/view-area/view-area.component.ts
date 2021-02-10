import { Component, Input, OnInit } from '@angular/core';
import { IUpload } from '../IUpload.interface';

@Component({
  selector: 'app-view-area',
  templateUrl: './view-area.component.html',
  styleUrls: ['./view-area.component.scss']
})
export class ViewAreaComponent implements OnInit {
  @Input() List: IUpload[];

  constructor() { }

  ngOnInit(): void {
  }

}
