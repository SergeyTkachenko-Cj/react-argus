import React, { Component, Fragment } from 'react'
import SroTableColumn from './SroTableColumn';

export class SroPageTable extends Component {
    state = {
        height: ''
    }

    componentDidMount() {
        let items = document.querySelectorAll('.table-col-item');
        let heights = [];
        items.forEach(function(element) {
            let height = element.clientHeight;
            heights.push(height);
        });
        this.setState({
            height: `${Math.max.apply(null, heights) + 1}px`
        })
    }
    render() {
        if (this.props.acf) {
            return (
                <Fragment>
                    <div className="section">
                        <div className="wrapper">
                            <div className="in-wrapper">
                                <div className="small-h">cтоимость</div>
                                <h2 className="h2">{this.props.acf["zagolovok_bloka"]}</h2>
                            </div>
                            <div className="logos-clients">
                                <div className="div-in-tab tables flex-table">
                                    {this.props.acf["tablotsya"].map(column => <SroTableColumn col={column.stolbets} height={this.state.height}/>)} 
                                </div>
                            </div>
                            <div className="vertical-line-25">
                            </div>
                            <div className="vertical-line">
                            </div>
                        </div>
                        <div className="vertical-line _50">
                        </div>
                        <div className="fon-green right">
                        </div>
                    </div>
                </Fragment>
            )
        }
        return null;
    }
}

export default SroPageTable
