```
 ~/AppData/Roaming/npm/parcel public/index.html
```


```tsx
export function setupMouserHover() {
    // 1: remove old handler
    // for hot reload, we need to keep a ref of previous module function
    // https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
    // https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/removeEventListener
    const oldHandlerRef = (window as any).oldHandlerRef
    if (oldHandlerRef) $body.removeEventListener('mouseover', oldHandlerRef, { capture: true });
    (window as any).oldHandlerRef = findClosestParentNode;

    // 2: setup new handler
    $body.addEventListener('mouseover', findClosestParentNode, true)
}

```