import { observer } from "mobx-react";
import { store } from "./state";
import * as React from 'react'

@observer
class Foo extends React.Component<{}, { activate: boolean }> {
    render() {
        console.log('[Foo] rendering')
        return store.dict.size > 5 ? store.suffix : 'too small'
    }
}

@observer
export class DictView extends React.Component {
    render() {
        const entries = Array.from(store.dict.entries())

        return (
            <React.Fragment>
                <Foo />
                <button onClick={() => store.dict.clear()}>reset</button>
                {entries.map(([k, v]) => (
                    <div key={k}>
                        {v} test
                        <button onClick={() => { store.dict.delete(k) }}>x</button>
                    </div>
                ))}
            </React.Fragment >
        )

    }
}
