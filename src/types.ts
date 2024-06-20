export type TAddress = `0x${string}`;

export enum DurationType {
    HOURLY,
    DAILY
}

export interface ParkSpaceMetadata {
    psId: bigint;
    hourlyPrice: bigint;
    dailyPrice: bigint;
    validTill: bigint;
    isBeingUsed: boolean;
    currentUser: TAddress;
    spaceOwner: TAddress;
    durationType: DurationType;
}
