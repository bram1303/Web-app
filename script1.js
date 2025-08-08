// "use strict";
// // Datos de las estaciones
// const stationsData = {
//     police: {
//         'Central Station': {
//             address: '766 Vallejo Street, San Francisco, CA 94133',
//             phone: '415-315-2400',
//             id: 'central'
//         },
//         'Northern Station': {
//             address: '1125 Fillmore Street, San Francisco, CA 94115',
//             phone: '415-614-3400',
//             id: 'northern'
//         },
//         'Park Station': {
//             address: '1899 Waller Street, San Francisco, CA 94117',
//             phone: '415-242-3000',
//             id: 'park'
//         },
//         'Richmond Station': {
//             address: '461 - 6th Ave, San Francisco, CA 94118',
//             phone: '415-666-8000',
//             id: 'richmond'
//         },
//         'Tenderloin Station': {
//             address: '301 Eddy Street, San Francisco, CA 94102',
//             phone: '415-345-7300',
//             id: 'tenderloin'
//         },
//         'Mission Station': {
//             address: '630 Valencia St., San Francisco, CA 94110',
//             phone: '415-558-5400',
//             id: 'mission'
//         },
//         'Southern Station': {
//             address: '1251 3rd Street, San Francisco, CA 94158',
//             phone: '415-575-6000',
//             id: 'southern'
//         },
//         'Ingleside Station': {
//             address: '1 Sgt. John V. Young Lane, San Francisco, CA 94112',
//             phone: '415-404-4000',
//             id: 'ingleside'
//         },
//         'Bayview Station': {
//             address: '201 Williams Avenue, San Francisco, CA 94124',
//             phone: '415-671-2300',
//             id: 'bayview'
//         },
//         'Taraval Station': {
//             address: '2345 24th Ave., San Francisco, CA 94116',
//             phone: '415-759-3100',
//             id: 'taraval'
//         }
//     },
//     fire: {
//         'Estación de Bomberos 1': {
//             address: '676 Howard Street, San Francisco, CA 94105',
//             phone: '415-558-3200',
//             id: 'fire1'
//         },
//         'Estación de Bomberos 2': {
//             address: '1340 Powell Street, San Francisco, CA 94133',
//             phone: '415-558-3300',
//             id: 'fire2'
//         },
//         'Estación de Bomberos 3': {
//             address: '1067 Post Street, San Francisco, CA 94109',
//             phone: '415-558-3400',
//             id: 'fire3'
//         },
//         'Estación de Bomberos 4': {
//             address: '1295 Shafter Avenue, San Francisco, CA 94124',
//             phone: '415-558-3500',
//             id: 'fire4'
//         },
//         'Estación de Bomberos 5': {
//             address: '1301 Turk Street, San Francisco, CA 94115',
//             phone: '415-558-3600',
//             id: 'fire5'
//         },
//         'Estación de Bomberos 6': {
//             address: '135 Sanchez Street, San Francisco, CA 94114',
//             phone: '415-558-3700',
//             id: 'fire6'
//         },
//         'Estación de Bomberos 7': {
//             address: '461 Grove Street, San Francisco, CA 94102',
//             phone: '415-558-3800',
//             id: 'fire7'
//         },
//         'Estación de Bomberos 8': {
//             address: '36 Bluxome Street, San Francisco, CA 94107',
//             phone: '415-558-3900',
//             id: 'fire8'
//         },
//         'Estación de Bomberos 9': {
//             address: '2245 Jerrold Avenue, San Francisco, CA 94124',
//             phone: '415-558-4000',
//             id: 'fire9'
//         },
//         'Estación SFO': {
//             address: 'Building #650, West Field Road, SFO, CA 94128',
//             phone: '650-821-7868',
//             id: 'firesfo'
//         }
//     }
// };

// // Variables globales
// let currentTooltip = null;
// let activeMarker = null;

// // Función para crear tooltip
// function createTooltip() {
//     const tooltip = document.createElement('div');
//     tooltip.className = 'tooltip';
//     document.body.appendChild(tooltip);
//     return tooltip;
// }

// // Función para mostrar tooltip
// function showTooltip(e, content) {
//     if (!currentTooltip) {
//         currentTooltip = createTooltip();
//     }
    
//     currentTooltip.innerHTML = content;
//     currentTooltip.style.left = (e.pageX - currentTooltip.offsetWidth / 2) + 'px';
//     currentTooltip.style.top = (e.pageY - currentTooltip.offsetHeight - 10) + 'px';
//     currentTooltip.classList.add('show');
// }

// // Función para ocultar tooltip
// function hideTooltip() {
//     if (currentTooltip) {
//         currentTooltip.classList.remove('show');
//     }
// }

// // Función para resaltar estación en la leyenda
// function highlightStation(stationId) {
//     // Remover highlight previo
//     document.querySelectorAll('.station-item').forEach(item => {
//         item.classList.remove('highlighted');
//     });
    
//     // Agregar highlight a la estación correspondiente
//     const stationElement = document.querySelector(`[data-station-id="${stationId}"]`);
//     if (stationElement) {
//         stationElement.classList.add('highlighted');
//         stationElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
//     }
// }

// // Función para manejar clic en marcador
// function handleMarkerClick(marker) {
//     const stationName = marker.dataset.station;
//     const stationType = marker.dataset.type;
    
//     // Remover clase active de todos los marcadores
//     document.querySelectorAll('.station-marker').forEach(m => {
//         m.classList.remove('active');
//     });
    
//     // Agregar clase active al marcador clickeado
//     marker.classList.add('active');
//     activeMarker = marker;
    
//     // Buscar datos de la estación
//     let stationInfo = null;
//     let stationId = null;
    
//     if (stationType === 'police' && stationsData.police[stationName]) {
//         stationInfo = stationsData.police[stationName];
//         stationId = stationInfo.id;
//     } else if (stationType === 'fire' && stationsData.fire[stationName]) {
//         stationInfo = stationsData.fire[stationName];
//         stationId = stationInfo.id;
//     }
    
//     if (stationInfo) {
//         // Resaltar estación en la leyenda
//         highlightStation(stationId);
        
//         // Mostrar información detallada
//         showStationDetails(stationName, stationInfo, stationType);
//     }
// }

// // Función para mostrar detalles de la estación
// function showStationDetails(name, info, type) {
//     const icon = type === 'police' ? '🚔' : '🚒';
//     const typeText = type === 'police' ? 'Policía' : 'Bomberos';
    
//     const message = `${icon} ${name}\n\n` +
//                    `Tipo: Estación de ${typeText}\n` +
//                    `Dirección: ${info.address}\n` +
//                    `Teléfono: ${info.phone}\n\n` +
//                    `¡Haz clic en "OK" para ver más detalles en la leyenda!`;
    
//     alert(message);
// }

// // Función para manejar hover en items de la leyenda
// function handleLegendItemHover(item, isEntering) {
//     if (isEntering) {
//         item.style.transform = 'translateX(10px) scale(1.02)';
//         item.style.transition = 'all 0.3s ease';
//     } else {
//         item.style.transform = 'translateX(0) scale(1)';
//     }
// }

// // Función para manejar clic en items de la leyenda
// function handleLegendItemClick(item) {
//     const stationId = item.dataset.stationId;
    
//     // Encontrar el marcador correspondiente en el mapa
//     const markers = document.querySelectorAll('.station-marker');
//     let targetMarker = null;
    
//     // Buscar el marcador que corresponde a esta estación
//     markers.forEach((marker, index) => {
//         const stationName = marker.dataset.station;
//         const stationType = marker.dataset.type;
        
//         let matchFound = false;
        
//         if (stationType === 'police') {
//             Object.entries(stationsData.police).forEach(([name, data]) => {
//                 if (data.id === stationId && stationName === name) {
//                     matchFound = true;
//                 }
//             });
//         } else if (stationType === 'fire') {
//             Object.entries(stationsData.fire).forEach(([name, data]) => {
//                 if (data.id === stationId && stationName === name) {
//                     matchFound = true;
//                 }
//             });
//         }
        
//         if (matchFound) {
//             targetMarker = marker;
//         }
//     });
    
//     if (targetMarker) {
//         // Simular clic en el marcador
//         handleMarkerClick(targetMarker);
        
//         // Hacer scroll al marcador en el mapa
//         targetMarker.scrollIntoView({ behavior: 'smooth', block: 'center' });
//     }
// }

// // Función para filtrar estaciones
// function filterStations(type) {
//     const markers = document.querySelectorAll('.station-marker');
//     const legendItems = document.querySelectorAll('.station-item');
    
//     markers.forEach(marker => {
//         const markerType = marker.dataset.type;
//         if (type === 'all' || markerType === type) {
//             marker.style.display = 'block';
//             marker.style.opacity = '1';
//         } else {
//             marker.style.opacity = '0.3';
//         }
//     });
    
//     legendItems.forEach(item => {
//         const isFireStation = item.classList.contains('fire-station');
//         const itemType = isFireStation ? 'fire' : 'police';
        
//         if (type === 'all' || itemType === type) {
//             item.style.display = 'block';
//             item.style.opacity = '1';
//         } else {
//             item.style.opacity = '0.5';
//         }
//     });
// }

// // Función para buscar estaciones
// function searchStations(query) {
//     const legendItems = document.querySelectorAll('.station-item');
//     const markers = document.querySelectorAll('.station-marker');
    
//     if (!query.trim()) {
//         // Mostrar todas las estaciones si no hay búsqueda
//         legendItems.forEach(item => {
//             item.style.display = 'block';
//         });
//         markers.forEach(marker => {
//             marker.style.display = 'block';
//         });
//         return;
//     }
    
//     query = query.toLowerCase();
    
//     legendItems.forEach((item, index) => {
//         const stationName = item.querySelector('.station-name').textContent.toLowerCase();
//         const stationAddress = item.querySelector('.station-address').textContent.toLowerCase();
        
//         if (stationName.includes(query) || stationAddress.includes(query)) {
//             item.style.display = 'block';
//             markers[index].style.display = 'block';
//         } else {
//             item.style.display = 'none';
//             markers[index].style.display = 'none';
//         }
//     });
// }

// // Función para obtener direcciones
// function getDirections(address) {
//     const encodedAddress = encodeURIComponent(address);
//     const googleMapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodedAddress}`;
//     window.open(googleMapsUrl, '_blank');
// }

// // Función de inicialización
// function initializeApp() {
//     console.log('Inicializando aplicación de estaciones de emergencia...');
    
//     // Configurar event listeners para marcadores
//     const markers = document.querySelectorAll('.station-marker');
//     markers.forEach(marker => {
//         // Click en marcador
//         marker.addEventListener('click', (e) => {
//             e.preventDefault();
//             handleMarkerClick(marker);
//         });
        
//         // Hover en marcador
//         marker.addEventListener('mouseenter', (e) => {
//             const stationName = marker.dataset.station;
//             const stationType = marker.dataset.type;
//             const typeIcon = stationType === 'police' ? '🚔' : '🚒';
            
//             showTooltip(e, `${typeIcon} ${stationName}`);
//         });
        
//         marker.addEventListener('mouseleave', hideTooltip);
        
//         marker.addEventListener('mousemove', (e) => {
//             if (currentTooltip) {
//                 currentTooltip.style.left = (e.pageX - currentTooltip.offsetWidth / 2) + 'px';
//                 currentTooltip.style.top = (e.pageY - currentTooltip.offsetHeight - 10) + 'px';
//             }
//         });
//     });
    
//     // Configurar event listeners para items de la leyenda
//     const legendItems = document.querySelectorAll('.station-item');
//     legendItems.forEach(item => {
//         // Hover en items de la leyenda
//         item.addEventListener('mouseenter', () => {
//             handleLegendItemHover(item, true);
//         });
        
//         item.addEventListener('mouseleave', () => {
//             handleLegendItemHover(item, false);
//         });
        
//         // Click en items de la leyenda
//         item.addEventListener('click', () => {
//             handleLegendItemClick(item);
//         });
        
//         // Agregar botón de direcciones a cada item
//         const directionsBtn = document.createElement('div');
//         directionsBtn.innerHTML = '🗺️ Direcciones';
//         directionsBtn.style.cssText = `
//             margin-top: 8px;
//             padding: 5px 10px;
//             background: #74b9ff;
//             color: white;
//             border-radius: 5px;
//             cursor: pointer;
//             font-size: 0.8em;
//             display: inline-block;
//             transition: background 0.3s ease;
//         `;
        
//         directionsBtn.addEventListener('mouseenter', () => {
//             directionsBtn.style.background = '#0984e3';
//         });
        
//         directionsBtn.addEventListener('mouseleave', () => {
//             directionsBtn.style.background = '#74b9ff';
//         });
        
//         directionsBtn.addEventListener('click', (e) => {
//             e.stopPropagation();
//             const address = item.querySelector('.station-address').textContent;
//             getDirections(address);
//         });
        
//         item.appendChild(directionsBtn);
//     });
    
//     // Agregar funcionalidad de teclado
//     document.addEventListener('keydown', (e) => {
//         // Escape para limpiar selección
//         if (e.key === 'Escape') {
//             document.querySelectorAll('.station-marker').forEach(m => {
//                 m.classList.remove('active');
//             });
//             document.querySelectorAll('.station-item').forEach(item => {
//                 item.classList.remove('highlighted');
//             });
//             activeMarker = null;
//         }
        
//         // Filtros con teclas numéricas
//         if (e.key === '1') {
//             filterStations('police');
//         } else if (e.key === '2') {
//             filterStations('fire');
//         } else if (e.key === '3') {
//             filterStations('all');
//         }
//     });
    
//     // Funcionalidad adicional al cargar
//     addSearchFunctionality();
//     addFilterButtons();
    
//     console.log('Aplicación inicializada correctamente');
// }

// // Función para agregar funcionalidad de búsqueda
// function addSearchFunctionality() {
//     const searchContainer = document.createElement('div');
//     searchContainer.innerHTML = `
//         <div style="
//             margin-bottom: 15px;
//             padding: 10px;
//             background: #f8f9fa;
//             border-radius: 8px;
//             border: 1px solid #dee2e6;
//         ">
//             <input type="text" id="searchInput" placeholder="Buscar estación..." style="
//                 width: 100%;
//                 padding: 8px 12px;
//                 border: 1px solid #ced4da;
//                 border-radius: 5px;
//                 font-size: 14px;
//             ">
//         </div>
//     `;
    
//     const legend = document.querySelector('.legend');
//     const firstChild = legend.firstElementChild;
//     legend.insertBefore(searchContainer, firstChild.nextElementSibling);
    
//     const searchInput = document.getElementById('searchInput');
//     searchInput.addEventListener('input', (e) => {
//         searchStations(e.target.value);
//     });
// }

// // Función para agregar botones de filtro
// function addFilterButtons() {
//     const filterContainer = document.createElement('div');
//     filterContainer.innerHTML = `
//         <div style="
//             display: flex;
//             gap: 10px;
//             margin-bottom: 15px;
//             flex-wrap: wrap;
//         ">
//             <button onclick="filterStations('all')" style="
//                 padding: 8px 15px;
//                 background: #6c757d;
//                 color: white;
//                 border: none;
//                 border-radius: 5px;
//                 cursor: pointer;
//                 font-size: 12px;
//                 transition: background 0.3s ease;
//             ">Todas</button>
//             <button onclick="filterStations('police')" style="
//                 padding: 8px 15px;
//                 background: #0984e3;
//                 color: white;
//                 border: none;
//                 border-radius: 5px;
//                 cursor: pointer;
//                 font-size: 12px;
//                 transition: background 0.3s ease;
//             ">🚔 Policía</button>
//             <button onclick="filterStations('fire')" style="
//                 padding: 8px 15px;
//                 background: #e17055;
//                 color: white;
//                 border: none;
//                 border-radius: 5px;
//                 cursor: pointer;
//                 font-size: 12px;
//                 transition: background 0.3s ease;
//             ">🚒 Bomberos</button>
//         </div>
//     `;
    
//     const legend = document.querySelector('.legend');
//     const searchContainer = document.querySelector('#searchInput').parentElement.parentElement;
//     legend.insertBefore(filterContainer, searchContainer.nextElementSibling);
    
//     // Agregar estilos hover a los botones
//     const buttons = filterContainer.querySelectorAll('button');
//     buttons.forEach(btn => {
//         btn.addEventListener('mouseenter', () => {
//             btn.style.opacity = '0.8';
//             btn.style.transform = 'translateY(-1px)';
//         });
        
//         btn.addEventListener('mouseleave', () => {
//             btn.style.opacity = '1';
//             btn.style.transform = 'translateY(0)';
//         });
//     });
// }

// // Función para mostrar estadísticas
// function showStatistics() {
//     const policeCount = Object.keys(stationsData.police).length;
//     const fireCount = Object.keys(stationsData.fire).length;
//     const total = policeCount + fireCount;
    
//     const statsMessage = 
//                         `🚔 Estaciones de Policía: ${policeCount}\n` +
//                         `🚒 Estaciones de Bomberos: ${fireCount}\n` +
//                         `📍 Total de Estaciones: ${total}\n\n` +
//                         `Información actualizada para San Francisco, CA`;
    
//     alert(statsMessage);
// }

// // Event listener para cuando el DOM esté completamente cargado
// document.addEventListener('DOMContentLoaded', initializeApp);

// // Hacer funciones globales para onclick
// window.filterStations = filterStations;
// window.showStatistics = showStatistics;