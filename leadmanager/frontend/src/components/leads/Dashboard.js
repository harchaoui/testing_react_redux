import React, {Fragment} from 'react'

// import 
import Form from './Form'
import Leads from './Leads'
import LibSearch from './LibSearch'
import LotSearch from './LotSearch'
import Select from 'react-select'

const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
]
export default function Board() {
   

    return (
        <Fragment>
            <Form />
            {/* <Leads /> */}
            {/* <LibSearch /> */}
        
    
            
            <Select options={options} />

            <LotSearch />
        </Fragment>
    )
}
