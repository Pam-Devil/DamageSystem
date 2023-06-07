export interface IEventListeners {
    onEvent(eventName:string, ...args:any[]):void;
}