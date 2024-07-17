const fetchPatientData = async () => {
    const username = 'coalition';
    const password = 'skills-test';
    const credentials = btoa(`${username}:${password}`);
    const response = await fetch('https://fedskillstest.coalitiontechnologies.workers.dev', {
      method: 'GET',
      headers: {
        'Authorization': `Basic ${credentials}`
      }
    });
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
  };
  
  export default fetchPatientData;