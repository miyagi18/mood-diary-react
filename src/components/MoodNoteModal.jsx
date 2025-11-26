import React, { useState } from 'react';

function MoodNoteModal({ mood, onSave, onClose }) {
  const [noteText, setNoteText] = useState('');

  const handleSave = () => {
    onSave(noteText);
    setNoteText('');
  };

  if (!mood) return null; 

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div 
        className="modal-content" 
        onClick={e => e.stopPropagation()} 
      >
        <button className="modal-close" onClick={onClose}>&times;</button>
        
        <h2>Твоя заметка на сегодня</h2>
        <div className="selected-mood-display" style={{backgroundColor: mood.color}}>
            <span className="emoji">{mood.emoji}</span>
            <span>{mood.label}</span>
        </div>
        
        <textarea
          placeholder="Что произошло сегодня? (Необязательно)"
          value={noteText}
          onChange={(e) => setNoteText(e.target.value)}
          rows="5"
        />

        <button className="save-btn" onClick={handleSave}>
          Сохранить запись
        </button>
      </div>
    </div>
  );
}

export default MoodNoteModal;