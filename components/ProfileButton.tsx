import { MdKeyboardArrowDown } from "react-icons/md"

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const ProfileButton = () => {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center">
                <Avatar>
                    <AvatarImage src={'/Frame 1000002103.png'} />
                    <AvatarFallback>user</AvatarFallback>
                </Avatar>
                <MdKeyboardArrowDown />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="cursor-pointer">Profile</DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer">Billing</DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer">Subscription</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="cursor-pointer">Log Out</DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
};

export default ProfileButton;