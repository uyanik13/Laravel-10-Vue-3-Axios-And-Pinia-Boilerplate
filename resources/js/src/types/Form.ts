export interface MediaType {
    [key: string]: boolean;
}

export interface FormData {
    firstName: string;
    lastName: string;
    email: string;
    topics: string;
    mediaTypes: MediaType;
    frequency: string;
}
