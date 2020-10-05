import React from 'react';
import UseStateExample from './components/useState';
import UseEffectExample from './components/useEffect';
import UseMemoExample from './components/useMemo';
import UseCallbackExample from './components/useCallback';
import UseContextExample from './components/useContext';
import UseReducer from './components/useReducer';

class App extends React.Component {
    render() {
        return (
            <div>
                <h1>Learning ReactJS Hooks</h1>
                <UseStateExample />
                <UseEffectExample />
                <UseMemoExample />
                <UseCallbackExample />
                <UseContextExample />
                <UseReducer />
            </div>
        );
    }
}

export default App;