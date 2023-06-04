import {IUser} from "./IUser";

export interface IRoom {
    id: number;
    name: string;
    max_users: number;
    current_users: number;
    contains_password: boolean;
    generated_key?: string;
    admin_id?: number;
    are_users_ready?: boolean;
    is_game_started: boolean;
    users: IUser[];
}