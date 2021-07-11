/** @jsxImportSource theme-ui */
import { Card } from 'react-bootstrap';
import description from '../data/descriptions.json';
import Images from '../assets/hush-naidoo-XwguHkKQqSA-unsplash.jpg';

const Header = () => {
  return (
    <div
      sx={{
        backgroundColor: '#6FA9ED',
        height: '100vh',
        maxHeight: 800,
      }}
    >
      <div sx={{ maxWidth: 1220, mx: 'auto', color: 'white' }}>
        <h3 sx={{ marginTop: 0, paddingTop: 75 }}>Remove Doubts</h3>
        <h2 sx={{ fontSize: 78, marginTop: 0, marginBottom: 35 }}>
          Free Doctor Consultation
        </h2>
        <div sx={{ width: 402, textAlign: 'center', ml: 392 }}>
          24/7 Video consultations. Private consultation + Audio call Starts at
          just $10. Exclusively on mobile app.
        </div>
        <h5 sx={{ width: 992, ml: 1, pt: 12 }}>Are you Looking For:</h5>
        <div sx={{ display: 'flex', ml: 210 }}>
          {description.map((item) => {
            return (
              <Card
                sx={{
                  width: 202,
                  ml: 12,
                  mt: 30,
                }}
              >
                <Card.Body>
                  <Card.Title sx={{ color: 'black' }}>{item.title}</Card.Title>
                  <Card.Text sx={{ color: 'black' }}>
                    {item.description}
                  </Card.Text>
                </Card.Body>
              </Card>
            );
          })}
        </div>
        <Card style={{ width: '39rem' }} sx={{ mt: 22, ml: '21rem' }}>
          <Card.Img src={Images} width="500px" />
        </Card>
      </div>
    </div>
  );
};

export default Header;
