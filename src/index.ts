import { EventBus } from "./events/eventBus";
const eventHandler1 = (data:String) => {
    console.log("Event1 received:",data);
};

const eventHandler2 = (data:String) => {
    console.log("Event2 received:",data);
};
EventBus.getInstance().Subscribe('Example Event1', eventHandler1);
EventBus.getInstance().Subscribe('Example Event2', eventHandler2);
EventBus.getInstance().DispatchSignal("Example Event2","Hello event")
EventBus.getInstance().Unsubscribe("Example Event2", eventHandler2);