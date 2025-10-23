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

        onSubmit({ username, age, newsletter });
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <div>
                <label htmlFor="username" className="block text-sm font-medium text-slate-700">Username</label>
                <input id="username" name='username' placeholder="e.g., johndoe" required className="input-field" />
            </div>
            <div>
                <label htmlFor="age" className="block text-sm font-medium text-slate-700">Age</label>
                <input id="age" name='age' type="number" placeholder="e.g., 30" required className="input-field" />
            </div>
            <div className="flex items-center">
                <input
                    id="newsletter"
                    name='newsletter'
                    type='checkbox'
                    className="h-4 w-4 rounded border-slate-300 text-emerald-600 focus:ring-emerald-500"
                />
                <label htmlFor="newsletter" className="ml-2 block text-sm text-slate-900">
                    Subscribe to newsletter
                </label>
            </div>
            <button type="submit" className="btn bg-emerald-200 text-emerald-800 hover:bg-emerald-300 focus:ring-emerald-400 text-sm py-1 px-3 w-full justify-center">Submit</button>
        </form>
    )
}