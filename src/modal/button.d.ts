export interface IButton  {
    label : string;
    icon? : any;
    onClick : (event: GestureResponderEvent) => void | null;
    color? : string;
}