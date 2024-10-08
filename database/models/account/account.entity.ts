
import { Column, Entity, BaseEntity } from 'typeorm';


@Entity({ name: 'account' })
export class AccountEntity extends BaseEntity {

  @Column('uuid', { name: 'id'})
  id: string;

  @Column('text', { name: 'name' })
  name: string;
}
