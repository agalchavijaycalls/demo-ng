import { Injectable } from '@angular/core';
import { User } from '../model/User';

@Injectable({
  providedIn: 'root'
})
export class MockUserService {
  private users: User[] = [];

  constructor() {
    const u1: User = new User("user1", "user1", "User 1", "user1@local");
    this.users.push(u1);
    const u2: User = new User("user2", "user2", "User 2", "user2@local");
    this.users.push(u2);
    const u3: User = new User("user3", "user3", "User 3", "user3@local");
    this.users.push(u3);
    const u4: User = new User("user4", "user4", "User 4", "user4@local");
    this.users.push(u4);
  }

  public getByUserId(userId: string): User | undefined {
    let find = this.users.find(item => item.loginId === userId);
    return find;
  }

  public create(user: User): void {
    this.users.push(user);
  }
}
