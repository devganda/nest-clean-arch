export type UserProps = {
  name: String,
  email: String,
  password: String,
  createdAt?: Date
}

export class UserEntity {
  constructor(public readonly props: UserProps){
    this.props.createdAt = this.props.createdAt ?? new Date();
  }
}
