import { Directive, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";

@Directive()
export abstract class AbstractView implements OnInit, OnDestroy {

    subscriptions: Subscription[] = [];

    ngOnInit(): void {
        throw new Error("Method not implemented.");
    }

    ngOnDestroy(): void {
        this.subscriptions.forEach(subscription => subscription.unsubscribe());
    }

    protected _pushToSubscriptionList(sub: Subscription): void {
        this.subscriptions.push(sub);
    }
}