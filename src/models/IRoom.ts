export interface IRoom {
    room_id: number;
    room_name: string;
    max_users: number;
    current_users: number;
    contains_password: boolean;
    is_game_started: boolean;
}