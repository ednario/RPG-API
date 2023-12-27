import { randomUUID } from 'crypto';

export interface AttributesProps {
  hp: number;
  mp: number;
  strength: number;
  agility: number;
  dexterity: number;
  constitution: number;
  intelligence: number;
}

export class Attributes {
  private _id: string;
  private props: AttributesProps;

  constructor(props: AttributesProps, id?: string) {
    this._id = id ?? randomUUID();
    this.props = {
      ...props,
    };
  }

  public get id() {
    return this._id;
  }

  public set hp(hp: number) {
    this.props.hp = hp;
  }

  public get hp(): number {
    return this.props.hp;
  }

  public set mp(mp: number) {
    this.props.mp = mp;
  }

  public get mp(): number {
    return this.props.mp;
  }

  public set strength(strength: number) {
    this.props.strength = strength;
  }

  public get strength(): number {
    return this.props.strength;
  }

  public set agility(agility: number) {
    this.props.agility = agility;
  }

  public get agility(): number {
    return this.props.agility;
  }

  public set dexterity(dexterity: number) {
    this.props.dexterity = dexterity;
  }

  public get dexterity(): number {
    return this.props.dexterity;
  }

  public set constitution(constitution: number) {
    this.props.constitution = constitution;
  }

  public get constitution(): number {
    return this.props.constitution;
  }

  public set intelligence(intelligence: number) {
    this.props.intelligence = intelligence;
  }

  public get intelligence(): number {
    return this.props.intelligence;
  }
}
