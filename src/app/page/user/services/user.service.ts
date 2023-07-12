import { Injectable } from '@angular/core';
import { MockUserService } from './mock-user.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private mockUserService: MockUserService) {

  }
}
