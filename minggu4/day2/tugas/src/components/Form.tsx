interface FormData {
    username: string;
    age: number;
    newsletter: boolean;
}

interface FormProps {
    onSubmit: ( data: FormData ) => void;
}