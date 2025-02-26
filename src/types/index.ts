export type BookType = {
    title: string;
    imageURL: string;
    author?: string;
}

export type InputType = {
    label: string;
    value: string;
    setValue: (value: string) => void;
    security?: boolean;
}
