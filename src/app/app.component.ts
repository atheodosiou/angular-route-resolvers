import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FakeApiService } from './fakeApi.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'route-resolver-demo';
}

