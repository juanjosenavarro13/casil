import { GetInfoModel } from './../../app.model';
import { AppService } from './../../app.service';
import { infoConstants } from './../../../constants/info.constants';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  infoConstants = infoConstants;
  info = this.AppService.info$;

  constructor(private AppService: AppService) {}
}
