interface FormData {
    username: string;
    age: number;
    newsletter: boolean;
}

interface FormProps {
    onSubmit: ( data: FormData ) => void;
}

export const Form = ({ onSubmit }: FormProps) => {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget)
        const username = formData.get('username') as string;
        const age = Number(formData.get('age'));
        const newsletter = formData.get('newsletter') === 'on';

        if (!username || isNaN(age)) return;

        onsubmit({ username, age, newsletter });
    }

    return (
        <form onSubmit={handleSubmit}>
            <input name='username' placeholder="username" required />
            <input name='age' placeholder="Age" required />

            <label>
                <input name='newsletter' type='checkbox' />
            </label>
            <button type="submit">Submit</button>
        </form>
    )
}