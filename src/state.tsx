
import { observable, configure, action, extendObservable } from 'mobx'

configure({ enforceActions: true })

class Store {
    @observable dict: Map<string, string> = new Map
    @observable counter: number = 0

    @observable suffix: string = 'toto'

    // test: strinig
    // constructor() {
    //     extendObservable(this, { test: '' })
    // }

    @action
    inc() {
        this.counter++
    }

    @action
    updateSuffix(str: string) {
        this.suffix = str
    }

    @action
    newValue() {
        const now = Date.now()
        const uuid = `${now}-${this.counter++}`
        this.dict.set(uuid, String(now))
    }
}

class UIStore {

}

export const store = new Store()
console.log(store.dict)