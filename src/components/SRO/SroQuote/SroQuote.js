import React, { Component } from 'react'

export class SroQuote extends Component {
    render() {
        return (
            <div className="section">
                <div className="wrapper paddings">
                    <div className="small-h">Вступление в {this.props.title} с Аргус - Эко</div>
                    <blockquote>{this.props.acf}</blockquote>
                </div>
                <div className="fon-green right">
                </div>
            </div>
        )
    }
}

export default SroQuote
