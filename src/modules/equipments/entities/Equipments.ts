import { randomUUID } from 'crypto';

export interface EquipmentsProps {
  head?: string;
  chest?: string;
  gloves?: string;
  boots?: string;
  leftGun?: string;
  rightGun?: string;
}

export class Equipments {
  private _id: string;
  private props: EquipmentsProps;

  constructor(props: EquipmentsProps, id?: string) {
    this._id = id ?? randomUUID();
    this.props = {
      ...props,
    };
  }

  public get id() {
    return this._id;
  }

  public set head(head: string) {
    this.props.head = head;
  }

  public get head(): string {
    return this.props.head;
  }

  public set chest(chest: string) {
    this.props.chest = chest;
  }

  public get chest(): string {
    return this.props.chest;
  }

  public set gloves(gloves: string) {
    this.props.gloves = gloves;
  }

  public get gloves(): string {
    return this.props.gloves;
  }

  public set boots(boots: string) {
    this.props.boots = boots;
  }

  public get boots(): string {
    return this.props.boots;
  }

  public set leftGun(leftGun: string) {
    this.props.leftGun = leftGun;
  }

  public get leftGun(): string {
    return this.props.leftGun;
  }
}
