const UPDATE_METRICS = 'scratch-gui/workspace-metrics/UPDATE_METRICS';
const UPDATE_UNDO_STACK = 'scratch-gui/workspace-metrics/UPDATE_UNDO_STACK';

const initialState = {
    targets: {},
    undoStack: []
};

const reducer = function (state, action) {
    if (typeof state === 'undefined') state = initialState;

    switch (action.type) {
    case UPDATE_METRICS:
        return Object.assign({}, state, {
            targets: Object.assign({}, state.targets, {
                [action.targetID]: {
                    scrollX: action.scrollX,
                    scrollY: action.scrollY,
                    scale: action.scale
                }
            })
        });
    case UPDATE_UNDO_STACK:
        return Object.assign({}, state, {
            undoStack: Object.assign({}, state.undoStack, action.undoStack)
        });
    default:
        return state;
    }
};

const updateMetrics = function (metrics) {
    return {
        type: UPDATE_METRICS,
        ...metrics
    };
};

const updateUndoStack = function (undoStack) {
    return {
        type: UPDATE_UNDO_STACK,
        undoStack
    };
};

export {
    reducer as default,
    initialState as workspaceMetricsInitialState,
    updateMetrics,
    updateUndoStack
};
