import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import MoodSelector from './components/MoodSelector';
import EntryList from './components/EntryList';
import MoodNoteModal from './components/MoodNoteModal'; 
import './App.css';

function App() {
  const [entries, setEntries] = useState([]);
  const [currentSelectedMood, setCurrentSelectedMood] = useState(null); 

  useEffect(() => {
    const savedEntries = JSON.parse(localStorage.getItem('mood-diary-entries'));
    if (Array.isArray(savedEntries) && savedEntries.length > 0)
      {
        setEntries(savedEntries);
      }
  }, []);

  useEffect(() => {
    localStorage.setItem('mood-diary-entries', JSON.stringify(entries));
  }, [entries]);

  const openModal = (mood) => {
    setCurrentSelectedMood(mood);
  };

  const closeModal = () => {
    setCurrentSelectedMood(null);
  };

  const addEntry = (noteText) => {
    if (!currentSelectedMood) return; 

    const newEntry = {
      id: Date.now(),
      date: new Date().toLocaleDateString('ru-RU', {
        day: 'numeric', month: 'long', hour: '2-digit', minute: '2-digit'
      }),
      mood: currentSelectedMood,
      note: noteText 
    };
    
    setEntries([newEntry, ...entries]);
    closeModal(); 
  };

  const deleteEntry = (id) => {
    setEntries(entries.filter(entry => entry.id !== id));
  };

  return (
    <div className="app-container">
      <Header entryCount={entries.length} />
      
      <MoodSelector onOpenModal={openModal} /> 
      
      <EntryList 
        entries={entries} 
        onDeleteEntry={deleteEntry} 
      />

      {currentSelectedMood && (
        <MoodNoteModal 
          mood={currentSelectedMood}
          onSave={addEntry} 
          onClose={closeModal} 
        />
      )}
    </div>
  );
}

export default App;