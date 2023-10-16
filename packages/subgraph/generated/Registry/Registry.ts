// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class Canceled extends ethereum.Event {
  get params(): Canceled__Params {
    return new Canceled__Params(this);
  }
}

export class Canceled__Params {
  _event: Canceled;

  constructor(event: Canceled) {
    this._event = event;
  }

  get id(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get reason(): string {
    return this._event.parameters[1].value.toString();
  }

  get data(): Bytes {
    return this._event.parameters[2].value.toBytes();
  }

  get sender(): Address {
    return this._event.parameters[3].value.toAddress();
  }

  get timestamp(): BigInt {
    return this._event.parameters[4].value.toBigInt();
  }
}

export class CheckedIn extends ethereum.Event {
  get params(): CheckedIn__Params {
    return new CheckedIn__Params(this);
  }
}

export class CheckedIn__Params {
  _event: CheckedIn;

  constructor(event: CheckedIn) {
    this._event = event;
  }

  get id(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get attendees(): Array<Address> {
    return this._event.parameters[1].value.toAddressArray();
  }

  get data(): Bytes {
    return this._event.parameters[2].value.toBytes();
  }

  get sender(): Address {
    return this._event.parameters[3].value.toAddress();
  }

  get timestamp(): BigInt {
    return this._event.parameters[4].value.toBigInt();
  }
}

export class ConditionModuleWhitelisted extends ethereum.Event {
  get params(): ConditionModuleWhitelisted__Params {
    return new ConditionModuleWhitelisted__Params(this);
  }
}

export class ConditionModuleWhitelisted__Params {
  _event: ConditionModuleWhitelisted;

  constructor(event: ConditionModuleWhitelisted) {
    this._event = event;
  }

  get conditionModule(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get whitelisted(): boolean {
    return this._event.parameters[1].value.toBoolean();
  }

  get sender(): Address {
    return this._event.parameters[2].value.toAddress();
  }

  get timestamp(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }
}

export class Created extends ethereum.Event {
  get params(): Created__Params {
    return new Created__Params(this);
  }
}

export class Created__Params {
  _event: Created;

  constructor(event: Created) {
    this._event = event;
  }

  get id(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get contentUri(): string {
    return this._event.parameters[1].value.toString();
  }

  get conditionModule(): Address {
    return this._event.parameters[2].value.toAddress();
  }

  get data(): Bytes {
    return this._event.parameters[3].value.toBytes();
  }

  get sender(): Address {
    return this._event.parameters[4].value.toAddress();
  }

  get timestamp(): BigInt {
    return this._event.parameters[5].value.toBigInt();
  }
}

export class OwnershipTransferred extends ethereum.Event {
  get params(): OwnershipTransferred__Params {
    return new OwnershipTransferred__Params(this);
  }
}

export class OwnershipTransferred__Params {
  _event: OwnershipTransferred;

  constructor(event: OwnershipTransferred) {
    this._event = event;
  }

  get previousOwner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get newOwner(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class Registered extends ethereum.Event {
  get params(): Registered__Params {
    return new Registered__Params(this);
  }
}

export class Registered__Params {
  _event: Registered;

  constructor(event: Registered) {
    this._event = event;
  }

  get id(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get participant(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get data(): Bytes {
    return this._event.parameters[2].value.toBytes();
  }

  get sender(): Address {
    return this._event.parameters[3].value.toAddress();
  }

  get timestamp(): BigInt {
    return this._event.parameters[4].value.toBigInt();
  }
}

export class Settled extends ethereum.Event {
  get params(): Settled__Params {
    return new Settled__Params(this);
  }
}

export class Settled__Params {
  _event: Settled;

  constructor(event: Settled) {
    this._event = event;
  }

  get id(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get data(): Bytes {
    return this._event.parameters[1].value.toBytes();
  }

  get sender(): Address {
    return this._event.parameters[2].value.toAddress();
  }

  get timestamp(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }
}

export class Registry__getRecordResultValue0Struct extends ethereum.Tuple {
  get id(): BigInt {
    return this[0].toBigInt();
  }

  get owner(): Address {
    return this[1].toAddress();
  }

  get status(): i32 {
    return this[2].toI32();
  }

  get contentUri(): string {
    return this[3].toString();
  }

  get conditionModule(): Address {
    return this[4].toAddress();
  }
}

export class Registry extends ethereum.SmartContract {
  static bind(address: Address): Registry {
    return new Registry("Registry", address);
  }

  getRecord(id: BigInt): Registry__getRecordResultValue0Struct {
    let result = super.call(
      "getRecord",
      "getRecord(uint256):((uint256,address,uint8,string,address))",
      [ethereum.Value.fromUnsignedBigInt(id)]
    );

    return changetype<Registry__getRecordResultValue0Struct>(
      result[0].toTuple()
    );
  }

  try_getRecord(
    id: BigInt
  ): ethereum.CallResult<Registry__getRecordResultValue0Struct> {
    let result = super.tryCall(
      "getRecord",
      "getRecord(uint256):((uint256,address,uint8,string,address))",
      [ethereum.Value.fromUnsignedBigInt(id)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      changetype<Registry__getRecordResultValue0Struct>(value[0].toTuple())
    );
  }

  isConditionModuleWhitelisted(conditionModule: Address): boolean {
    let result = super.call(
      "isConditionModuleWhitelisted",
      "isConditionModuleWhitelisted(address):(bool)",
      [ethereum.Value.fromAddress(conditionModule)]
    );

    return result[0].toBoolean();
  }

  try_isConditionModuleWhitelisted(
    conditionModule: Address
  ): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "isConditionModuleWhitelisted",
      "isConditionModuleWhitelisted(address):(bool)",
      [ethereum.Value.fromAddress(conditionModule)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  owner(): Address {
    let result = super.call("owner", "owner():(address)", []);

    return result[0].toAddress();
  }

  try_owner(): ethereum.CallResult<Address> {
    let result = super.tryCall("owner", "owner():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class CancelCall extends ethereum.Call {
  get inputs(): CancelCall__Inputs {
    return new CancelCall__Inputs(this);
  }

  get outputs(): CancelCall__Outputs {
    return new CancelCall__Outputs(this);
  }
}

export class CancelCall__Inputs {
  _call: CancelCall;

  constructor(call: CancelCall) {
    this._call = call;
  }

  get id(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get reason(): string {
    return this._call.inputValues[1].value.toString();
  }

  get conditionModuleData(): Bytes {
    return this._call.inputValues[2].value.toBytes();
  }
}

export class CancelCall__Outputs {
  _call: CancelCall;

  constructor(call: CancelCall) {
    this._call = call;
  }
}

export class CheckinCall extends ethereum.Call {
  get inputs(): CheckinCall__Inputs {
    return new CheckinCall__Inputs(this);
  }

  get outputs(): CheckinCall__Outputs {
    return new CheckinCall__Outputs(this);
  }
}

export class CheckinCall__Inputs {
  _call: CheckinCall;

  constructor(call: CheckinCall) {
    this._call = call;
  }

  get id(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get attendees(): Array<Address> {
    return this._call.inputValues[1].value.toAddressArray();
  }

  get conditionModuleData(): Bytes {
    return this._call.inputValues[2].value.toBytes();
  }
}

export class CheckinCall__Outputs {
  _call: CheckinCall;

  constructor(call: CheckinCall) {
    this._call = call;
  }
}

export class CreateCall extends ethereum.Call {
  get inputs(): CreateCall__Inputs {
    return new CreateCall__Inputs(this);
  }

  get outputs(): CreateCall__Outputs {
    return new CreateCall__Outputs(this);
  }
}

export class CreateCall__Inputs {
  _call: CreateCall;

  constructor(call: CreateCall) {
    this._call = call;
  }

  get contentUri(): string {
    return this._call.inputValues[0].value.toString();
  }

  get conditionModule(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get conditionModuleData(): Bytes {
    return this._call.inputValues[2].value.toBytes();
  }
}

export class CreateCall__Outputs {
  _call: CreateCall;

  constructor(call: CreateCall) {
    this._call = call;
  }
}

export class RegisterCall extends ethereum.Call {
  get inputs(): RegisterCall__Inputs {
    return new RegisterCall__Inputs(this);
  }

  get outputs(): RegisterCall__Outputs {
    return new RegisterCall__Outputs(this);
  }
}

export class RegisterCall__Inputs {
  _call: RegisterCall;

  constructor(call: RegisterCall) {
    this._call = call;
  }

  get id(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get participant(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get conditionModuleData(): Bytes {
    return this._call.inputValues[2].value.toBytes();
  }
}

export class RegisterCall__Outputs {
  _call: RegisterCall;

  constructor(call: RegisterCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall extends ethereum.Call {
  get inputs(): RenounceOwnershipCall__Inputs {
    return new RenounceOwnershipCall__Inputs(this);
  }

  get outputs(): RenounceOwnershipCall__Outputs {
    return new RenounceOwnershipCall__Outputs(this);
  }
}

export class RenounceOwnershipCall__Inputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall__Outputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class SettleCall extends ethereum.Call {
  get inputs(): SettleCall__Inputs {
    return new SettleCall__Inputs(this);
  }

  get outputs(): SettleCall__Outputs {
    return new SettleCall__Outputs(this);
  }
}

export class SettleCall__Inputs {
  _call: SettleCall;

  constructor(call: SettleCall) {
    this._call = call;
  }

  get id(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get conditionModuleData(): Bytes {
    return this._call.inputValues[1].value.toBytes();
  }
}

export class SettleCall__Outputs {
  _call: SettleCall;

  constructor(call: SettleCall) {
    this._call = call;
  }
}

export class TransferOwnershipCall extends ethereum.Call {
  get inputs(): TransferOwnershipCall__Inputs {
    return new TransferOwnershipCall__Inputs(this);
  }

  get outputs(): TransferOwnershipCall__Outputs {
    return new TransferOwnershipCall__Outputs(this);
  }
}

export class TransferOwnershipCall__Inputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }

  get newOwner(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class TransferOwnershipCall__Outputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }
}

export class WhitelistConditionModuleCall extends ethereum.Call {
  get inputs(): WhitelistConditionModuleCall__Inputs {
    return new WhitelistConditionModuleCall__Inputs(this);
  }

  get outputs(): WhitelistConditionModuleCall__Outputs {
    return new WhitelistConditionModuleCall__Outputs(this);
  }
}

export class WhitelistConditionModuleCall__Inputs {
  _call: WhitelistConditionModuleCall;

  constructor(call: WhitelistConditionModuleCall) {
    this._call = call;
  }

  get conditionModule(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get enable(): boolean {
    return this._call.inputValues[1].value.toBoolean();
  }
}

export class WhitelistConditionModuleCall__Outputs {
  _call: WhitelistConditionModuleCall;

  constructor(call: WhitelistConditionModuleCall) {
    this._call = call;
  }
}
