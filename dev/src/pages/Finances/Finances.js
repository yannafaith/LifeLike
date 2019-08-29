import React, { useState } from 'react';

const Finances = () => {

    const [ projlen ] = useState( 2 );
    const [ projBalance ] = useState( 6400 );
    const [ bills, setBills ] = useState( [
        { 
            'name': 'heroku',
            'value' : 14,
            'type': 'rec'
        },
        { 
            'name': 'amazon',
            'value' : 7,
            'type': 'rec'
        },
        { 
            'name': 'spotify',
            'value' : 10,
            'type': 'rec'
        },
        { 
            'name': 'cox',
            'value' : 107,
            'type': 'rec'
        },
        { 
            'name': 'sprint',
            'value' : 177,
            'type': 'rec'
        },
        { 
            'name': 'doordash',
            'value' : 10,
            'type': 'rec'
        },
        { 
            'name': 'self lender',
            'value' : 48,
            'type': 'rec'
        },
        { 
            'name': 'credit strong',
            'value' : 28,
            'type': 'rec'
        },
        { 
            'name': 'open sky',
            'value' : 24,
            'type': 'rec'
        },
        { 
            'name': 'food',
            'value' : 33 * 15,
            'type': 'rec'
        },
        { 
            'name': 'Airbnb',
            'value' : 2560,
            'type': 'sing'
        },
    ]);

    const [ newBill, setNewBill ] = useState( {
        'name': 'test',
        'value': 0,
        'type' : 'rec'
    });

    let recurrings = bills.filter( bill => {
        return bill.type === 'rec' 
    });

    let singles = bills.filter( bill => {
        return bill.type === 'sing'
    });

    let defaultMonthly = recurrings.reduce( ( sum, bill ) => sum + bill.value, 0 );
    let defaultSingle = singles.reduce( ( sum, bill ) => sum + bill.value, 0 );

    let [ monthlyDebt, setMonthlyDebt ] = useState( defaultMonthly );

    let remBalance = projBalance - ( monthlyDebt * projlen ) - defaultSingle;

    const addBill = ( e ) => {
        e.preventDefault();
        setBills( [...bills, newBill ] );
        setMonthlyDebt( monthlyDebt += newBill.value );
        setNewBill( { ...newBill, name: 'test', value: 0 } );
    }

    return (
        <div>
            <h1> Finances </h1>
            <h3> Your balance used for projections is ${ projBalance } </h3>
            <h2> Recurring Bills </h2> 

            {
                bills.map( ( bill, idx ) => {
                    return <p key = { idx }> { bill.name } = ${ bill.value } </p>
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
                <input 
                    type = 'checkbox' 
                    name = 'freq' 
                    id = 'freqBox' 
                    onChange = { ( e ) => { 
                        if ( e.target.value === 'on' ) setNewBill( { ...newBill, type: 'sing' } )} 
                    }
                /> 
                <label for = 'freqBox'> Single Purchase? </label>
                <button type='submit'> Add Bill </button>
            </form>

            <h2> Total monthly debit = ${ monthlyDebt } </h2>
            <h2> Total single purchases debit = ${ defaultSingle } </h2>
            <h2> Remaining balance = ${ remBalance } </h2>
        </div>
    );
}

export default Finances;

// bug, single purchases get counted as monthly purchases as well. 