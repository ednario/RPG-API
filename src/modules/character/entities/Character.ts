import { randomUUID } from 'crypto';

import { Attributes } from '@attributes/entities/attributes';
import { Equipments } from '@equipments/entities/Equipments';
import { Inventory } from '@inventory/entities/Inventory';
import { Phobias } from '@phobias/entities/Phobias';
import { Skill } from '@skill/entities/Skill';

export interface CharacterProps {
  name: string;
  race: string;
  level: number;
  experience: number;
  gold: number;
  maximumAttack: number;
  minimumAttack: number;
  attributes: Attributes;
  equipmenst: Equipments;
  phobias: Phobias;
  inventory: Inventory[];
  skill: Skill[];
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

  public set minimumAttack(minimumAttack: number) {
    this.props.minimumAttack = minimumAttack;
  }

  public get minimumAttack(): number {
    return this.props.minimumAttack;
  }

  public set attributes(attributes: Attributes) {
    this.props.attributes = attributes;
  }

  public get attributes(): Attributes {
    return this.props.attributes;
  }

  public set equipments(equipments: Equipments) {
    this.props.equipmenst = equipments;
  }

  public get equipments(): Equipments {
    return this.props.equipmenst;
  }

  public set phobias(phobias: Phobias) {
    this.props.phobias = phobias;
  }

  public get phobias(): Phobias {
    return this.props.phobias;
  }

  public set inventory(inventory: Inventory[]) {
    this.props.inventory = inventory;
  }

  public get inventory(): Inventory[] {
    return this.props.inventory;
  }

  public set skill(skill: Skill[]) {
    this.props.skill = skill;
  }

  public get skill(): Skill[] {
    return this.props.skill;
  }
}
