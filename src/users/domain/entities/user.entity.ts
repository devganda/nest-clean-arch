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

  getName(): String
  {
    return this.props.name;
  }

  getEmail(): String
  {
    return this.props.email;
  }

  getPassword(): String
  {
    return this.props.password;
  }

  getCreatedAt(): Date
  {
    return this.props.createdAt;
  }
}
