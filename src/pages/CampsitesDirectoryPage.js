import { useState } from "react";
import { Container, Row, Col } from "reactstrap";
import CampsiteDetail from '../features/campsites/CampsiteDetail';
import CampsitesList from '../features/campsites/CampsitesList';
import { selectCampsiteById } from '../features/campsites/campsitesSlice';

const CampsitesDirectoryPage = () => {
    // let selectedCampsite = selectRandomCampsite();

    // const toggleCampsite = () => {
    //     selectedCampsite = selectRandomCampsite();
    //     console.log(selectedCampsite);
    // };
    //const [selectedCampsite, toggleCampsite ] = useState(selectRandomCampsite())
    const [campsiteId, setCampsiteId] = useState(0);
    const selectedCampsite = selectCampsiteById(campsiteId);
    return (
        <Container>
            <Row>
                <Col sm='12' md='12' lg='9' xl='9' xxl='9'>
                <CampsitesList setCampsiteId={setCampsiteId} />
                </Col>
                <Col sm='12' md='12' lg='3' xl='3' xxl='3'>
                    <CampsiteDetail campsite={selectedCampsite} />
                </Col>
            </Row>
        </Container>
    );
};

export default CampsitesDirectoryPage;