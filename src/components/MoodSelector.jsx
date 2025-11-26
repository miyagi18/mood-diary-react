import React from 'react';

const MOODS = [
  { emoji: '😢', label: 'Грустно', color: '#e3f2fd' },
  { emoji: '😐', label: 'Нормально', color: '#f5f5f5' },
  { emoji: '🙂', label: 'Хорошо', color: '#fff3e0' },
  { emoji: '😁', label: 'Отлично', color: '#e8f5e9' },
  { emoji: '🤩', label: 'Супер', color: '#f3e5f5' },
];

function MoodSelector({ onOpenModal }) { 
  return (
    <section className="mood-selector">
      {MOODS.map((mood, index) => (
        <button
          key={index}
          className="mood-btn"
          style={{ backgroundColor: mood.color }}
          onClick={() => onOpenModal(mood)} 
          title={mood.label}
        >
          <span className="emoji">{mood.emoji}</span>
        </button>
      ))}
    </section>
  );
}

export default MoodSelector;