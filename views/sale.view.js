const getView = (properties) => `
  <h2>Propiedades en venta</h2>
  <select name="sector">
    <option value="Banda Norte">Banda Norte</option>
    <option value="Bimaco">Bimaco</option>
    <option value="Castelli">Castelli</option>
    <option value="Centro">Centro</option>
  </select>
  <div class="propiedades">
    ${
      properties.map((property) => (`
        <a href="http://localhost:3001/propiedad/${property.slug}">
          <img src = "${property.photo}" >
          <h1>${property.description} [${property.type}]</h1>
          <p>${property.price} ${property.currency}</p>
          
          <p><em>Sector:</em> ${property.sector ? property.sector : '-'}</p>
        </a>
      `)).join('')
    }
  </div>
`;

module.exports = { getView };