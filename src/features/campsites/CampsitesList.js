//import { CAMPSITES } from '../../app/shared/CAMPSITES';
import CampsiteCard from "./CampsiteCard";
import { Row, Col } from 'reactstrap';
import { selectAllCampsites } from './campsitesSlice';

const CampsitesList = ({ setCampsiteId }) => {
    const campsites = selectAllCampsites();
    return (
        <Row className='ms-auto'>
            {campsites.map((campsite) => {
                return (
                    <Col sm='12'
                        xxl='5'
                        className='mt-4'
                        key={campsite.id}
                        onClick={() => setCampsiteId(campsite.id)}>
                        <CampsiteCard campsite={campsite} />
                    </Col>
                );
            })}
        </Row>
    );
}

export default CampsitesList;
