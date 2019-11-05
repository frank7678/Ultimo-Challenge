const getView = (properties) => `
  <h2>Propiedades destacadas</h2>
  <div class="propiedades">
    ${
      properties.map((property) => (`
        <a href="http://localhost:3001/propiedad/${property.slug}">
          <img src="${property.photo}" >
            <h1>${property.description}[${property.type}]</h1>
            <p>${property.price}${property.currency}</p>
          <p><em>Sector:</em> ${property.sector ? property.sector : '-'}</p>
        </a>
      `)).join('')
    }
  </div>
`;

module.exports = { getView };