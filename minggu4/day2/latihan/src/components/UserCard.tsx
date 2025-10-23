import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Edit, Trash2, Mail, User as UserIcon, Shield } from 'lucide-react' // ✅ Gunakan alias untuk User icon
import type { User } from "@/types" // ✅ User type tetap

interface UserCardProps {
  user: User;
  onEdit: (user: User) => void;
  onDelete?: (userId: number) => void;
  showActions?: boolean;
}

export function UserCard({ user, onEdit, onDelete, showActions = true }: UserCardProps) {
  const handleEdit = () => {
    onEdit(user);
  };

  const handleDelete = () => {
    if (onDelete) {
      onDelete(user.id);
    }
  };

  const getRoleColor = (role: User['role']) => {
    switch (role) {
      case 'admin':
        return 'bg-red-100 text-red-800 border-red-200 hover:bg-red-200';
      case 'moderator':
        return 'bg-blue-100 text-blue-800 border-blue-200 hover:bg-blue-200';
      default:
        return 'bg-green-100 text-green-800 border-green-200 hover:bg-green-200';
    }
  };

  const getRoleIcon = (role: User['role']) => {
    switch (role) {
      case 'admin':
        return <Shield className="h-3 w-3" />;
      case 'moderator':
        return <UserIcon className="h-3 w-3" />; // ✅ Gunakan alias
      default:
        return <UserIcon className="h-3 w-3" />; // ✅ Gunakan alias
    }
  };

  return (
    <Card className="w-80 border-border/50 bg-background/50 backdrop-blur-sm shadow-sm hover:shadow-md transition-all duration-300 hover:border-primary/30 group">
      <CardHeader className="pb-4">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            <Avatar className="h-12 w-12 border-2 border-background shadow-md group-hover:scale-105 transition-transform duration-300">
              <AvatarImage src={user.avatar} className="object-cover" />
              <AvatarFallback className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground font-semibold text-sm">
                {user.name.charAt(0).toUpperCase()}
              </AvatarFallback>
            </Avatar>
            <div className="space-y-1 min-w-0 flex-1">
              <h3 className="font-semibold text-foreground truncate group-hover:text-primary transition-colors">
                {user.name}
              </h3>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="h-3 w-3 flex-shrink-0" />
                <p className="truncate">{user.email}</p>
              </div>
            </div>
          </div>
        </div>
      </CardHeader>

      <CardContent className="pb-4 space-y-3">
        {/* Status & Role Badges */}
        <div className="flex items-center justify-between">
          <Badge 
            variant={user.isActive ? "default" : "secondary"}
            className={cn(
              "px-3 py-1 text-xs font-medium border transition-colors",
              user.isActive 
                ? "bg-green-100 text-green-800 border-green-200 hover:bg-green-200" 
                : "bg-gray-100 text-gray-600 border-gray-200 hover:bg-gray-200"
            )}
          >
            <div className="flex items-center gap-1.5">
              <div className={cn(
                "w-1.5 h-1.5 rounded-full",
                user.isActive ? "bg-green-500" : "bg-gray-500"
              )} />
              {user.isActive ? "Active" : "Inactive"}
            </div>
          </Badge>

          <Badge 
            variant="outline"
            className={cn(
              "px-3 py-1 text-xs font-medium border-2 capitalize transition-colors",
              getRoleColor(user.role)
            )}
          >
            <div className="flex items-center gap-1.5">
              {getRoleIcon(user.role)}
              {user.role}
            </div>
          </Badge>
        </div>

        {/* Additional Info */}
        <div className="grid grid-cols-2 gap-3 text-xs text-muted-foreground">
          <div className="space-y-1">
            <div className="font-medium text-foreground/80">Member Since</div>
            <div>{user.createdAt ? new Date(user.createdAt).toLocaleDateString() : 'N/A'}</div>
          </div>
          <div className="space-y-1">
            <div className="font-medium text-foreground/80">Last Updated</div>
            <div>{user.updatedAt ? new Date(user.updatedAt).toLocaleDateString() : 'N/A'}</div>
          </div>
        </div>
      </CardContent>

      {showActions && (
        <CardFooter className="pt-4 border-t border-border/30 bg-muted/20 rounded-b-lg">
          <div className="flex gap-2 w-full">
            <Button 
              variant="outline" 
              size="sm"
              onClick={handleEdit}
              className="flex-1 h-9 gap-2 border-border/50 hover:border-primary/50 hover:bg-accent/50 transition-all group/edit"
            >
              <Edit className="h-3.5 w-3.5 group-hover/edit:scale-110 transition-transform" />
              Edit
            </Button>
            {onDelete && (
              <Button 
                variant="destructive" 
                size="sm"
                onClick={handleDelete}
                className="h-9 px-3 gap-2 bg-destructive/90 hover:bg-destructive transition-all group/delete"
              >
                <Trash2 className="h-3.5 w-3.5 group-hover/delete:scale-110 transition-transform" />
                Delete
              </Button>
            )}
          </div>
        </CardFooter>
      )}
    </Card>
  );
}

// Helper function for conditional classes
function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(' ');
}