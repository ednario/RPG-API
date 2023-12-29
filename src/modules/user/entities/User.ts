import { randomUUID } from 'crypto';

export interface UserProps {
  userName: string;
}

export class User {
  private _id: string;
  private props: UserProps;

  constructor(props: UserProps, id?: string) {
    this._id = id ?? randomUUID();
    this.props = {
      ...props,
    };
  }

  public get id() {
    return this._id;
  }

  public set userName(name: string) {
    this.props.userName = name;
  }

  public get userName(): string {
    return this.props.userName;
  }
}
