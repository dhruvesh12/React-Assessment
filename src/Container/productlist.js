import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';


function ProductList() {
    return ( 
        <>
        <div style={{display:'flex', marginLeft:'15%' , width:'auto', marginTop:'10px'}}>

        <Row xs={1} md={3} className="g-4">
      {Array.from({ length: 6 }).map((_, idx) => (
        <Col>
          <Card style={{borderBottom:'20px solid #770c09'}}>
            <Card.Img variant="top" style={{width:'auto', height:'410px', margin:'10px'}} src="https://5.imimg.com/data5/KD/BS/MY-5337377/paracetamol-tablets-500x500.jpg" />
            <Card.Body>
              <Card.Title>Favipiravir 400mg (Fabiflu) Tablets</Card.Title>
              <Card.Title style={{color:'red'}} >Rs 1,775 <span style={{color:'black'}}>/</span> <span style={{color:'gray'}}>stripe</span></Card.Title>
              <Card.Text>
                Glenmark Pharmaceutical Limited<br/>
                <div style={{color:'GrayText',fontWeight:'100px'}}>
                <h7>PARVAT PATIYA,SURAT,GUJRAT</h7>
                </div>
              </Card.Text>
              <hr/>
              <Card.Title style={{color:'#127d78', fontSize:'30px'}} ><img style={{width:'40px'}} src='https://media.glassdoor.com/sql/3234733/aeropay-squarelogo-1636706756290.png'/> Contact Supplier</Card.Title>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>

        </div>
        </>
     );
}

export default ProductList;