import { randomUUID } from 'crypto';

export interface CharacterProps {
  name: string;
  race: string;
  level: number;
  experience: number;
  gold: number;
  maximumAttack: number;
  maximumDefense: number;
  userId?: string;
}

export class Character {
  private _id: string;
  private props: CharacterProps;

  constructor(props: CharacterProps, id?: string) {
    this._id = id ?? randomUUID();
    this.props = {
      ...props,
    };
  }

  public get id() {
    return this._id;
  }

  public set name(name: string) {
    this.props.name = name;
  }

  public get name(): string {
    return this.props.name;
  }

  public set race(race: string) {
    this.props.race = race;
  }

  public get race(): string {
    return this.props.race;
  }

  public set level(level: number) {
    this.props.level = level;
  }

  public get level(): number {
    return this.props.level;
  }

  public set experience(experience: number) {
    this.props.experience = experience;
  }

  public get experience(): number {
    return this.props.experience;
  }

  public set gold(gold: number) {
    this.props.gold = gold;
  }

  public get gold(): number {
    return this.props.gold;
  }

  public set maximumAttack(maximumAttack: number) {
    this.props.maximumAttack = maximumAttack;
  }

  public get maximumAttack(): number {
    return this.props.maximumAttack;
  }

  public set maximumDefense(maximumDefense: number) {
    this.props.maximumDefense = maximumDefense;
  }

  public get maximumDefense(): number {
    return this.props.maximumDefense;
  }

  public set userId(userId: string) {
    this.props.userId = userId;
  }

  public get userId(): string | undefined {
    return this.props.userId;
  }
}
