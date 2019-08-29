import React, { useState } from 'react';

const Finances = () => {

    let [ monthlyDebt, setMonthlyDebt ] = useState( 0 );
    const [ projBalance ] = useState( 5400 );
    const [ bills, setBills ] = useState( [] );
    const [ projlen ] = useState( 2 );

    const [ newBill, setNewBill ] = useState( {
        'name': 'test',
        'value': 0
    });

    const addBill = (e) => {
        e.preventDefault();
        setBills( [...bills, newBill ] );
        setMonthlyDebt( monthlyDebt += newBill.value );
        setNewBill( { ...newBill, name: 'test', value: 0 } );
    }

    let remBalance = projBalance - monthlyDebt * projlen;

    return (
        <div>
            <h1> Finances </h1>
            <h3> Your balance used for projections is ${ projBalance } </h3>
            <h2> Recurring Bills </h2> 

            {
                bills.map( bill => {
                    return <p> { bill.name } = ${bill.value } </p>
                })
            }

            <form onSubmit={ addBill }>
                <input 
                    placeholder = 'bill name'
                    onChange = { ( e ) => setNewBill( { ...newBill, name: e.target.value } ) } 
                />
                <input 
                    value = { newBill.value }
                    onChange = { ( e ) => setNewBill( { ...newBill, value: Number( e.target.value ) } ) } 
                />
                <button type='submit'> Add Bill </button>
            </form>

            <h2> Total monthly debit = ${ monthlyDebt } </h2>
            <h2> Remaining balance = ${ remBalance } </h2>
        </div>
    );
}

export default Finances;