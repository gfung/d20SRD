import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.services';
import { ResLocals } from '../definitions/user';

@Component({
  selector: 'header-nav',
  templateUrl: './header.component.html',
  providers: [UserService]
})

export class HeaderNavComponent implements OnInit {
  cUser: ResLocals;

  constructor(private User: UserService) { }

  getUserdat(): void {
    this.User.getUser()
      .then((user) => {
        this.cUser = user;
        this.cUser.user.gravatar = 'https://www.gravatar.com/avatar/#' + this.cUser.user.gravatar;
      });
  }

  ngOnInit() {
    this.getUserdat();
  };
}
