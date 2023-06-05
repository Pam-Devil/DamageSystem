export interface IEventHandler <T> {
    HandleEvent(eventData: T): void;
}