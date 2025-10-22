import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"


export default function AvatarDemo() {
    return (
        <>
        <div className="flex items-center gap-2 justify-center">
            <Avatar className="rounded-lg">
                <AvatarImage
                    src="https://github.com/evilrabbit.png"
                    alt="@evilrabbit"
                />
                <AvatarFallback>ER</AvatarFallback>
            </Avatar>
        </div>
        </>
    )
}