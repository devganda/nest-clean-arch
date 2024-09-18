import { UserEntity, UserProps } from "../../user.entity";
import {faker} from "@faker-js/faker";

describe("UserEntity unit tests", ()=>{
  let props: UserProps;
  let sut: UserEntity

  beforeEach(()=>{
    props = {
      name: faker.person.fullName(),
      email: faker.internet.email(),
      password: faker.internet.password()
    }

    sut = new UserEntity(props);
  });

  it("Constructor method", ()=>{
      expect(sut).toBeDefined();
      expect(sut.props.name).toEqual(props.name);
      expect(sut.props.email).toEqual(props.email);
      expect(sut.props.password).toEqual(props.password);
      expect(sut.props.createdAt).toBeInstanceOf(Date);
  });

  it("Getter of name field", ()=>{
    expect(sut.getEmail()).toBeDefined();
    expect(sut.getEmail()).toEqual(props.email);
    expect(typeof sut.getEmail()).toBe("string");
  });

  it("Getter of email field", ()=>{
    expect(sut.getName()).toBeDefined();
    expect(sut.getName()).toEqual(props.name);
    expect(typeof sut.getName()).toBe("string");
  });

  it("Getter of password field", ()=>{
    expect(sut.getPassword()).toBeDefined();
    expect(sut.getPassword()).toEqual(props.password);
    expect(typeof sut.getPassword()).toBe("string");
  });

  it("Getter of createdAt field", ()=>{
    expect(sut.getCreatedAt()).toBeDefined();
    expect(sut.getCreatedAt()).toEqual(props.createdAt);
    expect(typeof sut.getCreatedAt()).toBe("object");
    expect(sut.getCreatedAt()).toBeInstanceOf(Date);
  });
});
