import * as React from 'react';
import {UIVideoSeekSlider} from "../ui/UIVideoSeekSlider";

export interface Props {

}

export interface State {
    currentTime: number
}

export class AppComponent extends React.Component<Props, State> {
    state: State = {
        currentTime: 0
    };

    //static defaultProps: Props = {} as Props;

    public render() {
        return (
            <div>
                <div className="container">
                    <UIVideoSeekSlider
                        min={0}
                        max={1152}
                        currentTime={this.state.currentTime}
                        progress={400}
                        onChange={(time:number)=>{
                            this.setState({
                                currentTime:time
                            } as State);
                        }}
                    />
                </div>
            </div>
        );
    }
}