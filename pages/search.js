import { useState, useEffect } from 'react';
import { getAllTutors } from '../api/tutorData';
// import { useAuth } from '../utils/context/authContext';
import TutorCard from '../components/Cards/TutorCard';

function FindTutor() {
  const [tutors, setTutors] = useState([]);

  const seeAllTutors = () => {
    getAllTutors().then(setTutors);
  };

  useEffect(() => {
    seeAllTutors();
  }, []);

  return (
    <>
      <div className="d-flex flex-wrap">
        {tutors.map((tutor) => (
          <TutorCard key={tutor.firebaseKey} tutorObj={tutor} onUpdate={seeAllTutors} />
        ))}

      </div>
    </>
  );
}
export default FindTutor;
