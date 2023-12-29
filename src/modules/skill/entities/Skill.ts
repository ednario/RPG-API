import { randomUUID } from 'crypto';

export interface SkillProps {
  name: string;
  wear: number;
  costMp: number;
  characterId: string;
}

export class Skill {
  private _id: string;
  private props: SkillProps;

  constructor(props: SkillProps, id?: string) {
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

  public set wear(wear: number) {
    this.props.wear = wear;
  }

  public get wear(): number {
    return this.props.wear;
  }

  public set costMp(costMp: number) {
    this.props.costMp = costMp;
  }

  public get costMp(): number {
    return this.props.costMp;
  }

  public set characterId(characterId: string) {
    this.props.characterId = characterId;
  }

  public get characterId(): string {
    return this.props.characterId;
  }
}
