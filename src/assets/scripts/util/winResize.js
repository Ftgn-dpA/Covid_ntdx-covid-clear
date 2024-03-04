import debounce from './debounce.js';

let callbacks = [],
    running = false,
    addedFirst = false;

function resize() {
    if (!running) {
        running = true;

        if (window.requestAnimationFrame) {
            window.requestAnimationFrame(runCallbacks);
        } else {
            setTimeout(runCallbacks, 0);
        }
    }
}

function runCallbacks() {
    callbacks.forEach((callback) => {
        callback();
    });

    running = false;
}

function addCallback(callback) {
    if (callback) {
        callbacks.push(callback);
    }
}

function removeCallback(callback) {
    if (callback) {
        let callbackIndex = callbacks.indexOf(callback);

        if (callbackIndex > -1) {
            callbacks.splice(callbackIndex, 1);
        }
    }
}

function winResize(callback) {
    if (!addedFirst) {
        window.addEventListener('resize', debounce(resize));
        addedFirst = true;
    }

    addCallback(callback);

    return {
        dispose: function () {
            return removeCallback(callback);
        }
    };
}

export default winResize;