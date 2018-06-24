import React, { Component } from 'react';
import { GoogleMapLoader, GoogleMap, Marker } from 'react-google-maps';

export default function Map(props) {
	console.log('here in map');
	return (
		<GoogleMapLoader
			containerElement={<div style={{ height: '100%' }} />}
			googleMapElement={<GoogleMap defaultZoom={12} defaultCenter={{ lat: props.lat, lng: props.lon }} />}
		/>
	);
}
