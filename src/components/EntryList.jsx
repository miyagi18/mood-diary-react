import React from 'react';

const EntryItem = ({ item, onDelete }) => (
  <div className="entry-card">
    <div className="entry-info">
      <span className="entry-emoji">{item.mood.emoji}</span>
      <div className="entry-text">
        <span className="entry-label">{item.mood.label}</span>
        <span className="entry-date">{item.date}</span>
        {/* НОВОЕ УСЛОВИЕ: Если есть заметка, показываем ее */}
        {item.note && <p className="entry-note-text">{item.note}</p>} 
      </div>
    </div>
    <button 
      className="delete-btn" 
      onClick={() => onDelete(item.id)}
    >
      &times;
    </button>
  </div>
);

function EntryList({ entries, onDeleteEntry }) {
  return (
    <section className="history">
      <h2>История</h2>
      {entries.length === 0 ? (
        <p className="empty-state">Пока нет записей. Выберите эмодзи выше!</p>
      ) : (
        <div className="entries-list">
          {entries.map((entry) => (
            <EntryItem 
              key={entry.id} 
              item={entry} 
              onDelete={onDeleteEntry} 
            />
          ))}
        </div>
      )}
    </section>
  );
}

export default EntryList;