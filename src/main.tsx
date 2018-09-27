import { render } from "react-dom";
import * as React from 'react'
import { store } from "./state";
import { observer } from 'mobx-react'
import { DictView } from "./dict";

@observer
class Main extends React.Component {
    render() {
        return (
            <div>
                <input
                    value={store.suffix}
                    onChange={ev => store.updateSuffix(ev.target.value)}
                    type="text"
                />
                <button onClick={() => { store.newValue() }}>add</button>
                <span>{store.counter}</span>
                <DictView />
            </div>
        )
    }
}
const $root = document.getElementById('root')
render(<Main />, $root)


// ------------------------------------------------
if (module.hot) {
    module.hot.dispose(function () {
        console.log('[hot] dispose')
        // clearInterval(incrementInterval)
        // module is about to be replaced
    });

    module.hot.accept(function () {
        console.log('[hot] accept')
        // module or one of its dependencies was just updated
    });
}
