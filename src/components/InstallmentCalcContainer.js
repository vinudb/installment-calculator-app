import React from 'react';
import DataInput from './DataInput';
import Result from './Result';

class InstallmentCalcContainer extends React.Component {
    state = {
        amount: "",
        duration: "",
        monthlyInstallment: 0
    }

    onAmountChange = (e) => {
        const amount = e.target.value;
        if (!amount || (amount.match(/^\d{1,}(\.\d{0,2})?$/) && parseFloat(amount) <= 100000.00)) {
            this.setState({ amount });
        }
    }

    onDurationChange = (e) => {
        const duration = e.target.value;
        if (!duration || (duration.match(/^\d{1,}?$/) && parseFloat(duration) <= 5)) {
            this.setState({ duration });
        }
    }

    onSubmit = () => {
        if (!this.state.amount || parseFloat(this.state.amount) < 10000.00) {
            alert("amount is too low for the loan")
        } else if (!this.state.duration || parseInt(this.state.duration) < 1) {
            alert('Minimum duration is 1 year')
        } else {
            this.setState({ showLoader: true });
            this.getMonthlyInstallment()
                .then((data => {
                    this.setState({ monthlyInstallment: data, showLoader: false })
                }))
                .catch((e) => { console.log(e) })
        }
    }

    getMonthlyInstallment = async () => {
        const response = await fetch('https://my-json-server.typicode.com/vinudb/lendico-frontend-task/data')
        switch (response.status) {
            case 200:
                const data = await response.json();
                return data.monthlyInstallment;
            case 400:
                throw new Error('Bad request')
            case 500:
                throw new Error('INternal Server Error')
            default:
                break;
        }
    }

    render() {
        return (
            <div data-test="containerComponent">
                <DataInput
                    onAmountChange={this.onAmountChange}
                    onDurationChange={this.onDurationChange}
                    onSubmit={this.onSubmit}
                    amount={this.state.amount}
                    duration={this.state.duration}
                />
                <Result monthlyInstallment={this.state.monthlyInstallment} />
            </div>
        );
    }
}

export default InstallmentCalcContainer;