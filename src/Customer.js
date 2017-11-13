import React from 'react';
import axios from 'axios';

export class Customer extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            query:"",
            limit:10,
            offset:0,
            data:null,
            prev:false,
            next:false
        }
        this.fetchCustomers()
    }

    fetchCustomers = () => {
        const url = `http://52.203.142.138:81/api/customer/customersQuery.jsp?query=${this.state.query}&active=true&state=None&queryType=FILTER&offset=${this.state.offset}&limit=${this.state.limit}&orderBy=id%20asc`
        axios.get(url).then((response)=>{
            console.log(response)
            const newPrev = this.state.offset === 0?false:true
            const newNext = response.data.count > this.state.offset+this.state.limit
            this.setState({data : response.data, prev:newPrev, next:newNext})
        })
    }

    onChange = (event) => {
        // console.log("onChange", event.target.value)
        this.setState({query:event.target.value, offset:0}, () => this.fetchCustomers())
        // this.fetchCustomers(event.target.value)
    }

    onChangeGeneric = (event) => {
        const n = event.target.name
        const v = event.target.value
        this.setState({[n]:v}, () => this.fetchCustomers())
    }

    onNext = (event) => {
        const newOffset = this.state.offset + this.state.limit
        this.setState({offset:newOffset}, () => this.fetchCustomers())
    }
    onPrev = (event) => {
        const newOffset = this.state.offset - this.state.limit
        this.setState({offset:newOffset}, () => this.fetchCustomers())
    }

    render() {
        return <div>
            <h1>Customer</h1>
            Query: <input value={this.state.query} onChange={this.onChange}/>
            Limit: <input name="limit" value={this.state.limit} onChange={this.onChangeGeneric}/>
            Offset: <input name="offset" value={this.state.offset} onChange={this.onChangeGeneric}/>
            <button onClick={this.onPrev} disabled={!this.state.prev}>&lt;</button>
            <button onClick={this.onNext} disabled={!this.state.next}>&gt;</button>

            <div>
                {this.renderCustomers()}
            </div>

        </div>
    }

    renderCustomers = () => {

        const ff = row => {
            return <div key={row.id}>
                {row.name}
            </div>
        }

        const data = this.state.data;
        if(data===null) return <div>Loading...</div>
        return <div>
            {data.rows.map(ff)}
            </div>
    }
}