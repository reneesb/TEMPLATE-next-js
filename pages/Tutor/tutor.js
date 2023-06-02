import { useState, useEffect } from 'react';
import { getAllTutors } from '../../api/tutorData';

function FindTutor() {
  const [tutors, setTutors] = useState([]);

  useEffect(() => {
    getAllTutors().then((data) => {
      setTutors(data);
    });
  }, []);
  return (
    <div>
      <h1>Find A Tutor</h1>
      {tutors.map((tutor) => (
        <div>
          <div>{tutor.tutor_name}</div>
          <div>{tutor.rate}</div>
        </div>
      ))}
    </div>
  );
}

export default FindTutor;
