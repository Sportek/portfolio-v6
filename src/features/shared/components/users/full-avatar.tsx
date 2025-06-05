import { User } from "@/app/generated/prisma";
import { Avatar, AvatarFallback, AvatarImage } from "@/features/shared/components/ui/avatar";
import { cn } from "@/lib/utils";
import { IconUser } from "@tabler/icons-react";

type FullAvatarProps = {
  user: Partial<User>;
  size?: "sm" | "md" | "lg";
  className?: string;
};

const FullAvatar = ({ user, size = "md", className }: FullAvatarProps) => {
  const getInitials = () => {
    if (!user.name) return null;
    const firstInitial = user.name?.[0] || "";
    return `${firstInitial}`.toUpperCase();
  };

  const sizeClasses = {
    sm: "h-8 w-8 text-xs",
    md: "h-10 w-10 text-sm",
    lg: "h-12 w-12 text-base",
  };

  return (
    <div className={cn("flex items-center gap-3", className)}>
      <Avatar className={sizeClasses[size]}>
        {user.image ? <AvatarImage src={user.image} alt={user.name} /> : null}
        <AvatarFallback className="bg-accent text-white">
          {getInitials() ?? <IconUser className="h-4 w-4" />}
        </AvatarFallback>
      </Avatar>
      <div className="flex flex-col">
        <div className="text-foreground font-medium">{user.name}</div>
        {user.email && <div className="text-muted-foreground text-sm">{user.email}</div>}
      </div>
    </div>
  );
};

export default FullAvatar;
