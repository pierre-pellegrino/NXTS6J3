import React from 'react';
import { useParams } from 'react-router';
import workData from '../../worksData';

const StudyCase = () => {
  const {clientname} = useParams();
  const cleanedClientName = clientname.substring(0, clientname.indexOf('-'))[0].toUpperCase() + clientname.substring(0, clientname.indexOf('-')).substring(1);
  const clientDetails = workData.find(c => c.name === cleanedClientName);
  return (
    <div className="study-case anim">
      <h2>{clientDetails.title}</h2>
      {clientDetails.body}
    </div>
  );
};

export default StudyCase;