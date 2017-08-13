import React from 'react'

const Character = ({character}) =>
<div className="ui link cards" style={{float:'right'}}>
  <div className="card">
    <div className="image">
      {(character.gender === 'Male') ?
        <img src="https://semantic-ui.com/images/avatar/large/steve.jpg" alt={character.id}></img>
       : <img src="https://s-media-cache-ak0.pinimg.com/originals/3a/c2/67/3ac267b2778ccaaf0425ef1b0c4aade6.png" alt={character.id}></img>}
    </div>
    <div className="content">
      <div className="header">{character.name}</div>
      <div className="meta">
        <a>{character.culture}</a>
      </div>
      <div className="description">
        Titles: {character.titles.map((title, index) => <p key={index}>{title}</p>)}
      </div>
      <div className="description">
        Alias: {character.aliases.map((alias, index) => <p key={index}>{alias}</p>)}
      </div>
    </div>
    <div className="extra content">
      <span className="right floated">
        Born: {character.born}
      </span>
    </div>
  </div>
</div>

export default Character;
