import { randomUUID } from 'crypto';

export interface InventoryProps {
  itemName: string;
  amount: number;
}

export class Inventory {
  private _id: string;
  private props: InventoryProps;

  constructor(props: InventoryProps, id?: string) {
    this._id = id ?? randomUUID();
    this.props = {
      ...props,
    };
  }

  public get id() {
    return this._id;
  }

  public set itemName(itemName: string) {
    this.props.itemName = itemName;
  }

  public get itemName(): string | undefined {
    return this.props.itemName;
  }

  public set amount(amount: number) {
    this.props.amount = amount;
  }

  public get amount(): number {
    return this.props.amount;
  }
}
