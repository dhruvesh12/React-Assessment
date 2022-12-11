import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

function Filters() {
    return ( 
        <>
        <div style={{justifyContent:'left', display:'flex', marginLeft:'10px'}}>
            <span>Medical Darpan</span>
            <span>{'>'}</span>
            <span>Search</span>
            <span>{'>'}</span>
            <span style={{fontWeight:'bolder'}}>FabiFlu Tablet</span>
            
        </div>
        <div style={{marginLeft:'10px', marginTop:'10px'}}>
        <InputGroup className="mb-3">
            <div class="form-group has-search">
                <span class="fa fa-search form-control-feedback"></span>
                <input style={{borderRadius:'0px'}} type="text" class="form-control"/>
            </div>
            <Button style={{backgroundColor:'#00a69c',color:'white'}} variant="outline-secondary" id="button-addon2">
                Search
            </Button>
        </InputGroup>

        <div className='filter2'>
            <h5>Paracetamol</h5>
            <h7>(128 products)</h7>
            <button style={{width:'130px',textAlign:'left'}}> Aceclofenac <i class="fa fa-close"></i></button>

            <button style={{width:'90px',textAlign:'left'}}> 500 mg <i class="fa fa-close"></i> </button>

            <h8>Remove all</h8>
        </div>
        </div>

        

        
        </>
     );
}

export default Filters;