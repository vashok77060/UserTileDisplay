import { Component, OnDestroy, OnInit } from '@angular/core';
import { User } from './user.model';
import { UserApiService } from './user-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'user-tiles-app';
  users : User[] = [];
  userCount: number = 0;
  isErrored: boolean = false;
  loading: boolean = true;

  constructor(private userApiService: UserApiService) {}

  ngOnInit(): void {
    this.fetchUsers();
  }

  fetchUsers(): void {
    this.userApiService.getUsers().subscribe(
      (users: User[]) => {
        this.users = users;
        this.userCount = this.users.length;
        this.loading = false;
      },
      (error) => {
        console.error('Error fetching users:', error);
        this.isErrored = true;
        this.loading = false;
      }
    );
  }

  onDelete(index: number): void {
    this.users.splice(index, 1);
    this.userCount = this.users.length;
  }

  ngOnDestroy(): void {
    this.isErrored = false;
    this.users = [];
    this.userCount = 0;
  }
}
