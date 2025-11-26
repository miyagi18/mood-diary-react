import React from "react";

function Header({entryCount})
{
    return (
        <header className="header">
            <h1>Дневник настроения</h1>
            <p>
                {entryCount > 0
                ? `Записей в дневнике: ${entryCount}` : 'Как прошел твой день?'}
            </p>
        </header>
    );
}

export default Header;