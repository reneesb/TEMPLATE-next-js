import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';
// import Link from 'next/link';
// import Link from 'next/link';

function TutorCard({ tutorObj }) {
  return (
    <div className="card">
      <div className="row">
        <div className="col-md-4">
          {/* <Link href={``} */}
          <img src={tutorObj.image} className="img-fluid" alt="tutorImage" />
        </div>
        <div className="col-md-8">
          <h3>{tutorObj.tutor_name}</h3>
          <p>{tutorObj.bio}</p>
          <p>${tutorObj.rate} per hour</p>
          <Button variant="success">Learn More</Button>
        </div>
      </div>
    </div>
  );
}

TutorCard.propTypes = {
  tutorObj: PropTypes.shape({
    image: PropTypes.string,
    tutor_name: PropTypes.string,
    bio: PropTypes.string,
    rate: PropTypes.number,
  }).isRequired,
};

export default TutorCard;
