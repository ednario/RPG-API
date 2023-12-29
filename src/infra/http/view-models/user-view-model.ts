import { User } from '@user/entities/User';

export class UserViewModel {
  static toHTTP(user: User) {
    return {
      id: user.id,
      userName: user.userName,
    };
  }
}
