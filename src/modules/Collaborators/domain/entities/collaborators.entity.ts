import type { NameVO } from "../../../../shared/value-objects/name.value-object.js";
import type { Comission } from "../value-objects/commission.value-object.js";


export interface CollaboratorEntity {

  id: string;
  companyId: string;
  name: NameVO;
  email: string;
  phone: string;
  specialty: string;
  comissionPercentage: Comission;
  isActive?: boolean;
  createdAt?: Date;
  updatedAt?: Date;

}  

export class Collaborator {
  constructor(private readonly props: CollaboratorEntity) {
    Object.freeze(this.props);
  }

  static create(porps: CollaboratorEntity): Collaborator{
    return new Collaborator({
      ...porps,
      isActive: porps.isActive ?? true,
      createdAt: porps.createdAt ?? new Date(),
      updatedAt: porps.updatedAt ?? new Date(),
    });
  }


    get id(): string { return this.props.id}
    get companyId(): string { return this.props.companyId}
    get name(): string { return this.props.name.value}
    get email(): string { return this.props.email}
    get phone(): string { return this.props.phone}
    get specialty(): string { return this.props.specialty}
    get comissionPercentage(): number { return this.props.comissionPercentage.value}
    get isActive(): boolean { return this.props.isActive ?? true}
    get createdAt(): Date | undefined { return this.props.createdAt }
    get updatedAt(): Date | undefined { return this.props.updatedAt }
}