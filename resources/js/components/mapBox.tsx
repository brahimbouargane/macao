import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { useEffect } from 'react';

const LeafletMap = () => {
  useEffect(() => {
    // Create map with custom options
    const map = L.map('map', {
      center: [33.567853, -7.649992],
      zoom: 15,
      zoomControl: false
    });

    // Add colorful tile layer - using Stadia Maps Outdoors
    // L.tileLayer('https://tiles.stadiamaps.com/tiles/osm_bright/{z}/{x}/{y}{r}.png', {
    //   attribution: '&copy; OpenStreetMap contributors',
    //   maxZoom: 20
    // }).addTo(map);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      maxZoom: 19
    }).addTo(map);

    // Enhanced custom marker icon with animation
    const customIcon = L.divIcon({
      className: 'custom-div-icon',
      html: `
        <div style="
          background: linear-gradient(45deg, #dc2626, #ef4444);
          width: 40px;
          height: 40px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 12px rgba(220, 38, 38, 0.4);
          animation: bounce 2s infinite;
          border: 2px solid white;
        ">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2.5">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
            <circle cx="12" cy="10" r="3"></circle>
          </svg>
        </div>
        <style>
          @keyframes bounce {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
          }
        </style>
      `,
      iconSize: [40, 40],
      iconAnchor: [20, 40]
    });

    // Add marker with enhanced popup
    const marker = L.marker([33.567853, -7.649992], { icon: customIcon }).addTo(map);

    // Enhanced popup with gradient and animations
    const popupContent = `
      <div class="p-6 min-w-[250px]" style="
        background: linear-gradient(135deg, #fff 0%, #f8fafc 100%);
        border-radius: 8px;
        border-left: 4px solid #dc2626;
      ">
        <h3 class="font-bold text-red-600 mb-3 text-lg" style="
          background: linear-gradient(to right, #dc2626, #ef4444);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        ">PASTOR S.A.</h3>
        <p class="text-sm text-gray-600 mb-3 leading-relaxed">
          49 rue Ennasrine Beausejour<br/>
          Casablanca 20200 Maroc
        </p>
        <a
          href="https://maps.google.com/?q=33.567853,-7.649992"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center text-sm text-red-600 hover:text-red-700 font-medium transition-all duration-300 hover:translate-x-1"
          style="text-decoration: none;"
        >
          Obtenir l'itinéraire
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="ml-1">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </a>
      </div>
    `;

    const customOptions = {
      className: 'custom-popup',
      closeButton: false,
      maxWidth: 300
    };

    marker.bindPopup(popupContent, customOptions);

    // Custom zoom control with styled buttons
    const zoomControl = L.control
      .zoom({
        position: 'bottomright',
        zoomInText: '+',
        zoomOutText: '-'
      })
      .addTo(map);

    // Add a styled scale control
    L.control
      .scale({
        imperial: false,
        position: 'bottomleft'
      })
      .addTo(map);

    // Add custom CSS for map controls
    const style = document.createElement('style');
    style.textContent = `
      .leaflet-control-zoom {
        border: none !important;
        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1) !important;
      }
      .leaflet-control-zoom-in,
      .leaflet-control-zoom-out {
        background: white !important;
        color: #dc2626 !important;
        border: none !important;
        width: 30px !important;
        height: 30px !important;
        line-height: 30px !important;
        font-size: 18px !important;
        transition: all 0.3s ease !important;
      }
      .leaflet-control-zoom-in:hover,
      .leaflet-control-zoom-out:hover {
        background: #dc2626 !important;
        color: white !important;
      }
      .leaflet-popup-content-wrapper {
        padding: 0 !important;
        overflow: hidden !important;
        border-radius: 8px !important;
        box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1) !important;
      }
      .leaflet-popup-tip {
        background: white !important;
        box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1) !important;
      }
    `;
    document.head.appendChild(style);

    // Cleanup
    return () => {
      map.remove();
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div className="relative w-full h-full bg-gray-100">
      <div id="map" className="absolute inset-0 z-0 rounded-lg overflow-hidden"></div>

      {/* Enhanced Info card with gradient and animations */}
      <div className="absolute bottom-6 left-6 bg-gradient-to-br from-white to-gray-50 p-6 shadow-2xl max-w-sm z-[400] rounded-lg border-l-4 border-red-600 transition-transform hover:translate-y-[-2px]">
        <div className="flex items-start gap-4">
          <div className="text-red-600 mt-1 bg-red-50 p-2 rounded-full">
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
              <circle cx="12" cy="10" r="3"></circle>
            </svg>
          </div>
          <div>
            <h3 className="font-bold text-lg bg-gradient-to-r from-red-600 to-red-500 bg-clip-text text-transparent">
              PASTOR S.A.
            </h3>
            <p className="text-sm text-gray-600 mt-2 leading-relaxed">
              49 rue Ennasrine Beausejour
              <br />
              Casablanca 20200 Maroc
            </p>
            <div className="mt-4">
              <a
                href="https://maps.google.com/?q=33.567853,-7.649992"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-sm text-red-600 hover:text-red-700 font-medium transition-all duration-300 hover:translate-x-1"
              >
                Obtenir l'itinéraire
                <svg className="w-4 h-4 ml-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeafletMap;
