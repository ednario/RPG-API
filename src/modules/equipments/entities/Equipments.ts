import { randomUUID } from 'crypto';

export interface EquipmentsProps {
  head: string | null;
  chest: string | null;
  gloves: string | null;
  boots: string | null;
  leftGun: string | null;
  rightGun: string | null;
  characterId: string;
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

  public get head(): string | null {
    return this.props.head;
  }

  public set chest(chest: string) {
    this.props.chest = chest;
  }

  public get chest(): string | null {
    return this.props.chest;
  }

  public set gloves(gloves: string) {
    this.props.gloves = gloves;
  }

  public get gloves(): string | null {
    return this.props.gloves;
  }

  public set boots(boots: string) {
    this.props.boots = boots;
  }

  public get boots(): string | null {
    return this.props.boots;
  }

  public set leftGun(leftGun: string) {
    this.props.leftGun = leftGun;
  }

  public get leftGun(): string | null {
    return this.props.leftGun;
  }

  public set rightGun(rightGun: string) {
    this.props.rightGun = rightGun;
  }

  public get rightGun(): string | null {
    return this.props.rightGun;
  }

  public set characterId(characterId: string) {
    this.props.characterId = characterId;
  }

  public get characterId(): string {
    return this.props.characterId;
  }
}
