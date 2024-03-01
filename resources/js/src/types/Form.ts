export interface CommunicationType {
    [key: string]: boolean;
}

export interface ChannelPreferences {
    [key: string]: boolean;
}

export interface Topic {
    [key: string]: any[];
}

export interface Address {
    [key: string]: string;
}

export interface FormData {
    firstName: string;
    lastName: string;
    email: string;
    topics:Topic;
    address:Address;
    communicationType: CommunicationType;
    channelPreferences:ChannelPreferences;
    frequency: string;
}
