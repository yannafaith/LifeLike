import React, { useState } from 'react';

const Finances = () => {

    const [ liveBalance ] = useState( 0 );
    const [ projBalance ] = useState( '5,500' );
    const [ bills, setBills ] = useState( [ 0 ] );
    const [ newBill, setNewBill ] = useState( '' );
    // const [ billName, setBillName ] = useState( '' );

    const monthlyDebit = bills.reduce( ( bill, sum ) => sum += bill ); 

    const addBill = (e) => {
        e.preventDefault();
        setBills( [...bills, newBill ] );
        setNewBill('');
    }

    return (
        <div>

            <h1> Finances </h1>
            <h3> Your current balance is ${ liveBalance } </h3>
            <h3> Your balance used for projections is ${ projBalance } </h3>
            <h2> Recurring Bills: { bills.map( ( bill, idx ) => <p key={ idx }> ${ bill } </p> )} </h2>
            <h2> Total monthly debit = ${ monthlyDebit } </h2>

            <form onSubmit={ addBill }>
                <div>
                    {/* <input onChange = { ( e ) => setBillName( e.target.value )} /> */}
                    <input 
                        value = { newBill }
                        onChange = { ( e ) => setNewBill( Number( e.target.value ) )} 
                    />
                </div>
            </form>

        </div>
    );
}

export default Finances;