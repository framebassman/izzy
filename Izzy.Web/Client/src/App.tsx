import * as React from 'react';


import Home from './home/Home';
import View1 from './view1/View';
import View2 from './view2/View';

class App extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
    }
    public render() {
        const renderHome = (props: any) => <Home name="React" />;
        return (
            <Home name="React" />
        );
    }
}

export default App;
