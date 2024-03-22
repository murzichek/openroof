//ПОМЕНЯТЬ ТАЙЛ КАРТЫ??? ДОБАВИТЬ 3Д РЕЖИМ???///

"use client";
import { MapContainer, TileLayer, Marker, Popup, } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Icon } from "leaflet";
import eventsData from "../roofEvents";
import { useState } from "react";
import FlyToMarker from "./FlyToMarker";
import Filter from "./Filter";


export interface RoofsEvent {
  id: number;
  title: string;
  description: string;
  position: [number, number];
  category: string;

}

const defaultPosition: [number, number] = [ 59.9347082, 30.3296130];
const emptyHeart = <i className="fa-regular fa-heart"></i>;
const fullHeart = <i className="fa-solid fa-heart" style={{
  color: "#E3A3B4"}}
  ></i>;

function MapsApp() {
  const icon: Icon = new Icon({
    iconUrl: "marker.svg",
    iconSize: [25,41],
    iconAnchor: [12,41],
  });

  const [selectedCategory, setSelectedCategory] =useState<string | null>(null);
  const [activeEvent, setActiveEvent] = useState<RoofsEvent | null>(null);
  const [favourites, setFavourites] = useState<number[]>(() => {
  const savedFavourites = localStorage.getItem('favourites');
  	return savedFavourites ? JSON.parse(savedFavourites) : [];
	});

  const handleFavouriteClick =(eventID: number) => {
    let updatedFavourites = favourites.filter((id) => id !== eventID);
      if(!favourites.includes(eventID)) {
        updatedFavourites = [eventID, ...updatedFavourites];
      }
      setFavourites(updatedFavourites);
      localStorage.setItem("favourites", JSON.stringify(updatedFavourites));
    };

  const handleListItemclick = (eventId: number) => {
    const event = eventsData.find((event) => event.id === eventId);
      if(event) {
        setActiveEvent(event);
      }
  };

  return (
  <div className="content">
    <div className=" map-content flex flex-col gap-6 h-full">
      <Filter setSelectedCategory={setSelectedCategory} />
      <MapContainer center={defaultPosition} zoom={13} className="map-container">
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
          {eventsData.filter((event) => !selectedCategory || event.category === selectedCategory).map((event) => {
            return (
              <Marker key={event.id} position={event.position} icon={icon} eventHandlers={{
                click: () => {
                  setActiveEvent(event);
                  }
              	}}>
              </Marker>
            );
          })}
          {activeEvent && (
            <Popup position={activeEvent.position}>
              <div className="popup-inner">
                <h2 className="popup-inner__title">{activeEvent.title}</h2>
              </div>
                <p className="popup-inner__description">
                  {activeEvent.description}
                </p>
                <button className="popup-inner__button"
                  onClick={() => handleFavouriteClick(activeEvent.id)}>
                    {favourites.includes(activeEvent.id) ? (<span>{fullHeart} Убрать из избранного</span>) : (<span>{emptyHeart} В избранное</span>)}
                </button>
              </Popup>
            )}
            {activeEvent && <FlyToMarker position={activeEvent.position} zoomLevel={15} />}
        </MapContainer>
  	</div>
    <div className="liked-events">
      <h2 className="liked-events__title">
        <i className="fa-solid fa-heart"></i> Избранное
        </h2>
          <ul>
            {favourites
              .map((id) => {
                return eventsData.find((event) => event.id === id);
              })
              .map((event) => {
                return (
              	  <li key={event?.id} className="liked-events__event" onClick={() => {
                    handleListItemclick(event?.id as number);
                  }}>
                    <h3>{event?.title}</h3>
                  </li>
                );
              })}
          </ul>
      </div>
  </div>
	)
}
export default MapsApp;
