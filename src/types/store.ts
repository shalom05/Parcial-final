export type Observer = { render: () => void } & HTMLElement;

export type AppState = {
  something: {};
};

export enum SomeActions {
  "USER" = "USER",
}

export interface XAction {
  action: SomeActions.USER; 
  payload: Pick<AppState, "something">;
}

export type Actions = XAction;
