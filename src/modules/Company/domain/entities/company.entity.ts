
import type { NameVO } from '../../../../shared/value-objects/name.value-object.js';
import type { CompanyEmail } from '../value-objects/email.vo.js';
import type { Password } from '../../../../shared/value-objects/password.vo.js';


export interface CompanyProps {
  id: string; 
  companyName: NameVO;
  name: NameVO;
  phone: string;
  email: CompanyEmail;      
  password: Password;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export class CompanyEntity {
  private constructor(
    private readonly props: CompanyProps
  ) {}

  
  static create(props: CompanyProps): CompanyEntity {
    return new CompanyEntity(props);
  }


  get id(): string { return this.props.id; }
  get companyName(): string { return this.props.companyName.value; }
  get name(): string { return this.props.name.value; }
  get phone(): string { return this.props.phone; }
  get email(): string { return this.props.email.value; }
  get password(): string { return this.props.password.value; }
  get isActive(): boolean { return this.props.isActive; }
  get createdAt(): Date { return this.props.createdAt; }
  get updatedAt(): Date { return this.props.updatedAt; }
}
