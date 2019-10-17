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
        this.setState({ amount: e.target.value })
    }

    onDurationChange = (e) => {
        this.setState({ duration: e.target.value })
    }

    onSubmit = () => {
        console.log('clicked')
    }

    render() {
        return (
            <React.Fragment>
                <DataInput 
                    onAmountChange={this.onAmountChange}
                    onDurationChange = {this.onDurationChange}
                    onSubmit = {this.onSubmit}
                />
                <Result monthlyInstallment={this.state.monthlyInstallment}/>
            </React.Fragment>
        );
    }
}

export default InstallmentCalcContainer;