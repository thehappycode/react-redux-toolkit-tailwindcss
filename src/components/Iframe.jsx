import { useState } from 'react'
import { createPortal } from 'react-dom'

const Iframe = ({ children, ...props }) => {

    const [contentRef, setContentRef] = useState(null)
    const mountNode = contentRef?.contentWindow?.document?.body;
    const onLoad = event => {
        event.preventDefault();
        const message = {
            ...props,
        }
        event.target.contentWindow.postMessage(message, props.src)
    }
    return (
        <iframe {...props} onLoad={event => { onLoad(event) }} ref={setContentRef}>
            {mountNode && createPortal(children, mountNode)}
        </iframe>
    )
}

export default Iframe