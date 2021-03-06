import { Component, OnInit } from '@angular/core';
import { UserService } from '../../app/_services/user.service';
import { AlertifyService } from '../../app/_services/alertify.service';
import { User } from '../../app/_models/User';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-members-list',
  templateUrl: './members-list.component.html',
  styleUrls: ['./members-list.component.css']
})
export class MembersListComponent implements OnInit {
  users: User[];
  constructor(private userService: UserService, private alertify: AlertifyService
            , private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.users = data.users;
    });
  }
  // loadUsers() {
  //   this.userService.getUsers().subscribe((users: User[]) => {
  //     this.users = users;
  //   },
  //   error => {
  //     this.alertify.error(error);
  //   });
  // }
}
