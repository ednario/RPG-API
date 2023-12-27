import { randomUUID } from 'crypto';

export interface PhobiasProps {
  monster: string;
  amountToOvercome: number;
}

export class Phobias {
  private _id: string;
  private props: PhobiasProps;

  constructor(props: PhobiasProps, id?: string) {
    this._id = id ?? randomUUID();
    this.props = {
      ...props,
    };
  }

  public get id() {
    return this._id;
  }

  public set monster(monster: string) {
    this.props.monster = monster;
  }

  public get monster(): string | undefined {
    return this.props.monster;
  }

  public set amountToOvercome(amountToOvercome: number) {
    this.props.amountToOvercome = amountToOvercome;
  }

  public get amountToOvercome(): number {
    return this.props.amountToOvercome;
  }
}
