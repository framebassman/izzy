import './hello.css';

import * as React from 'react';

export default class HelloComponent extends React.Component<any, any> {
    constructor(props: any, context: any) {
        super(props, context);
        this.state = { result: '' };
    }

    public componentDidMount() {
        this.nameChanged(this.props.name);
    }

    public async nameChanged(name:string) {
    }

    public render() {
        const changeName = (e: any) => this.nameChanged((e.target as HTMLInputElement).value);
        return (
            <div className="form-group">
                <input className="form-control" type="text" placeholder="Your name"
                    defaultValue={this.props.name}
                    onChange={changeName} />
                <h3 className="result">{this.state.result}</h3>
            </div>);
    }
}