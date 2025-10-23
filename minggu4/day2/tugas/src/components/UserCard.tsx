import { User } from '../types/User.types';

interface UserCardProps {
    user: User;
    onToggleActive: ( id: number ) => void
}

export const UserCard = ({ user, onToggleActive }: UserCardProps ) => {
    return (
        <div className="bg-white/50 border border-emerald-200 rounded-lg p-4 flex items-center justify-between transition-shadow hover:shadow-lg hover:border-emerald-300">
            <div className="flex items-center gap-4">
                <div className={`w-3 h-3 rounded-full ${user.isActive ? 'bg-green-500' : 'bg-slate-400'}`}></div>
                <div>
                    <h3 className="font-semibold text-slate-800">{user.name}</h3>
                    <p className="text-sm text-slate-500">{user.email}</p>
                </div>
            </div>
            <div className="flex items-center gap-2">
                <span className={`text-xs font-medium px-2.5 py-0.5 rounded-full ${
                    user.isActive
                        ? 'bg-green-100 text-green-800'
                        : 'bg-slate-100 text-slate-800'
                }`}>
                    {user.isActive ? 'Active' : 'Inactive'}
                </span>
                <button
                    onClick={() => onToggleActive(user.id)}
                    className="btn bg-emerald-200 text-emerald-800 hover:bg-emerald-300 focus:ring-emerald-400 text-sm py-1 px-3"
                >Toggle</button>
            </div>
        </div>
    )
}