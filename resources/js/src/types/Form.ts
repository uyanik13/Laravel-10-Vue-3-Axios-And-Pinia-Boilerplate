export interface CommunicationType {
    [key: string]: boolean;
}

export interface ChannelPreferences {
    [key: string]: boolean;
}

export interface Address {
    [key: string]: string;
}

export interface FormData {
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber:string;
    address:Address;
    communicationType: CommunicationType;
    channelPreferences:ChannelPreferences;
    frequency: string;
}
