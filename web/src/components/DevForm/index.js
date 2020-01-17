import React, { useState, useEffect } from 'react';

function DevForm({ onSubmit }) {
  const [github_username, setGithub_username] = useState('');
  const [techs, setTechs] = useState('');
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;
      setLatitude(latitude);
      setLongitude(longitude);
    }, (err) => {
      console.error(err);
    });
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();
    await onSubmit({
      github_username,
      techs,
      latitude,
      longitude,
    });
    setGithub_username('');
    setTechs('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="input-block">
        <label htmlFor="github_username">Usuário do Github</label>
        <input 
          required
          id="github_username"
          name="github_username"
          value={github_username}
          onChange={(e) => { setGithub_username(e.target.value) }}
        />
      </div>

      <div className="input-block">
        <label htmlFor="techs">Tecnologias</label>
        <input
          required 
          id="techs"
          name="techs"
          value={techs}
          onChange={(e) => { setTechs(e.target.value) }}
        />
      </div>

      <div className="input-group">
        <div className="input-block">
          <label htmlFor="latitude">Latitude</label>
          <input 
            required
            id="latitude"
            name="latitude"
            type="number"
            value={latitude}
            onChange={(e) => setLatitude(e.target.value)}
          />
        </div>
        
        <div className="input-block">
          <label htmlFor="longitude">Longitude</label>
          <input
            required
            id="longitude"
            name="longitude"
            type="number"
            value={longitude}
            onChange={(e) => setLongitude(e.target.value)}
          />
        </div>
      </div>
      
      <button type="submit">Salvar</button>
    </form>
  );
}

export default DevForm;