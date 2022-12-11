import Card from 'react-bootstrap/Card';


function SideBar() {
    return ( 
    <>
    <div style={{ width: '14%', marginLeft:"10px", justifyContent:'left', marginTop:'10px',position:'absolute' }}>
    <Card className='cards'>
            <Card.Header className='header' >Related Category</Card.Header>
            <Card.Body>
            <Card.Title >Paracetamol Tablets</Card.Title>
            <Card.Title>Paracetamol Syrup</Card.Title>
            <Card.Title>Paracetamol Powder</Card.Title>
            <button style={{marginLeft:'-3px'}} className='btnStyle'>Aceclofenac</button>
            <button style={{position:'absolute', marginTop:'1px', marginLeft:'-15%', height:'10px', border:'0px solid', backgroundColor:'#00a69c',color:'whitesmoke'}}><i class="fa fa-close"></i></button>
            <Card.Title>Margaladrate Simethicone Oral Suspension</Card.Title>
            <Card.Title>Mefenamic Paracetamol Syrup</Card.Title>
            </Card.Body>
    </Card>
      <br />

      <Card className='cards'>
        <Card.Header className='header'>Related Brands</Card.Header>
        <Card.Body>
          <Card.Title>Cipmol Paracetamol</Card.Title>
          <Card.Title>Pandal Paracetamol Tablets</Card.Title>
          <Card.Title>Combiflam</Card.Title>
          <Card.Title>Crocin Tablets</Card.Title>
          <Card.Title>Calpol Paracetamol Tablets</Card.Title>
          <Card.Title>Sumo Tablet</Card.Title>
        </Card.Body>
      </Card>
      <br />

      <Card className='cards'>
        <Card.Header className='header'>Business Type</Card.Header>
        <Card.Body>
          <Card.Title>WholeSaler</Card.Title>
          <Card.Title>Manufacturer</Card.Title>
          <Card.Title>Retailer</Card.Title>
          <Card.Title>Exporter</Card.Title>
        </Card.Body>
      </Card>
      <br />

      <Card className='cards'>
        <Card.Header className='header'>Strength</Card.Header>
        <Card.Body>
        <button style={{marginLeft:'-3px'}} className='btnStyle'>500 mg</button>
        <button style={{position:'absolute', marginTop:'1px', marginLeft:'-15%', height:'10px', border:'0px solid', backgroundColor:'#00a69c',color:'whitesmoke'}}><i class="fa fa-close"></i></button>
          <Card.Title>650 mg</Card.Title>
        </Card.Body>
      </Card>
      <br />

      <Card className='cards'>
        <Card.Header className='header'>Manufacturer</Card.Header>
        <Card.Body>
          <Card.Title>Intas Pharmaceutical Ltd</Card.Title>
          <Card.Title>Alkem Laboratories Ltd</Card.Title>
        </Card.Body>
      </Card>
      <br />

      <Card className='cards' >
        <Card.Header className='header'>Prescription/Non prescription</Card.Header>
        <Card.Body>
        <Card.Title>Intas Pharmaceutical Ltd</Card.Title>
          <Card.Title>Alkem Laboratories Ltd</Card.Title>
          
        </Card.Body>
      </Card>
      <br />

      </div>


    </> );
}

export default SideBar;