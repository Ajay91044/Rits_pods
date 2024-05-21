import React from 'react'

function ThreeInput() {
    return (
        <section style={{marginTop:'20px',marginBottom:'5px',paddingBottom:'20px',borderBottom:'2px solid #F7F7F7'}}>
            <div className='Container' style={{width:'90%'}}>
               <div className='InputContainer'>
               <div className='Inp1'>
                    <h5 style={{fontWeight:'200'}}>PCU</h5>
                    <input type="text" name="" id="" placeholder='PCU' style={{ fontStyle: 'italic' }} />
                </div>
                <div className='Inp2'>
                    <h5 style={{fontWeight:'200'}}>Operation:<small style={{ color: 'red' }}>*</small></h5>
                    <input type="text" name="" id="" placeholder='select' />
                </div>
                <div className='Inp3'>
                    <h5 style={{fontWeight:'200'}}>Resource:<small style={{ color: 'red' }}>*</small></h5>
                    <input type="text" name="" id="" placeholder='_' />
                </div>
                <div className='Inp4'>
                    <h5 style={{fontWeight:'200'}}>Qty:</h5>
                    <input type="text" name="" id="" placeholder='' />
                </div>
               </div>
               <nav className='ButtonContainer'>
                <button type='submit' className='GoButton'>Go</button>
                <button type='reset' className='clearButton'>Clear</button>
               </nav>

            </div>

        </section>
    )
}

export default ThreeInput