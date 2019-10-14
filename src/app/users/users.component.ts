import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute) { }

  users: any[];
  ngOnInit() {
    this.activatedRoute.data.subscribe((data: { users: any }) => {
      this.users = data.users;
    });
  }

}
