import { User as RawUser } from '@prisma/client';

import { User } from '@user/entities/User';

export class PrismaUserMapper {
  static toPrisma(user: User) {
    return {
      id: user.id,
      userName: user.userName,
    };
  }
  static toDomain(raw: RawUser): User {
    return new User(
      {
        userName: raw.userName,
      },
      raw.id,
    );
  }
}
