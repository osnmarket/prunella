import React, { memo, useState } from "react";
import {
  Heading,
  HStack,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack,
  Text,
} from "@chakra-ui/react";
import { Button } from "../../../../components/variants";
import { GoogleMap, useLoadScript } from "@react-google-maps/api";
import { geocodeByPlaceId } from "react-google-places-autocomplete";
import { PlaceAutocomplete } from "./placeAutocomplete";
import { images } from "../../../../theme";

const libraries = ["places"];
export const GoogleMapCard = memo(
  ({
    containerStyle,
    defaultPosition,
    onClose,
    isOpen,
    handleValidate,
    messages,
    geoDecode,
  }) => {
    // STATES
    const [position, setPosition] = useState(defaultPosition);
    const [defaultPlace, setDefaultPlace] = useState(null);
    const [map, setMap] = useState(null);
    const [marker, setMarker] = useState(null);
    //MAP SETUP
    const { isLoaded, loadError } = useLoadScript({
      id: "google-map-script",
      googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_SITE_KEY,
      libraries,
    });

    // EVENTS
    const updateGeoLocation = (position) => {
      geoDecode({ lat: position.lat, lng: position.lng }).then((location) => {
        const maxPosition = location.results.reduce(
          (maxIndex, current, index, arr) =>
            arr[maxIndex].address_components.length >
            current.address_components.length
              ? maxIndex
              : index,
          0,
        );
        setDefaultPlace(location.results[maxPosition].formatted_address);
      });
    };

    const handleDragOrClick = (point) => {
      const newPosition = {
        lat: point.latLng.lat(),
        lng: point.latLng.lng(),
      };
      setPosition(newPosition);
      updateMarkerPosition(newPosition);
      updateGeoLocation(newPosition);
    };
    const handlePlaceSelect = (point) => {
      if (point?.value) {
        geocodeByPlaceId(point?.value?.place_id).then((position) => {
          const mapPosition = {
            lat: position[0].geometry.location.lat(),
            lng: position[0].geometry.location.lng(),
          };

          setPosition(mapPosition);
          updateMarkerPosition(mapPosition);
          updateGeoLocation(mapPosition);
        });
      }
    };
    const onLoad = (map) => {
      const bounds = new window.google.maps.LatLngBounds(position);
      const newMarker = new window.google.maps.Marker({
        position,
        map,
        draggable: true,
        animation: window.google.maps.Animation.DROP,
        icon: images.map.marker,
      });
      window.google.maps.event.addListener(
        newMarker,
        "dragend",
        function (event) {
          handleDragOrClick(event);
        },
      );
      setMarker(newMarker);
      setMap(map);
    };
    const updateMarkerPosition = (newPosition) => {
      if (marker) {
        marker.setPosition(newPosition);
      }
    };
    const onUnmount = () => {
      setMap(null);
    };

    return (
      <>
        <Modal
          isOpen={isOpen}
          onClose={onClose}
          size="6xl"
          closeOnOverlayClick={false}
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>
              <Stack spacing={"1rem"}>
                <Heading size={"md"}>{messages.title}</Heading>
                <Text fontSize={"1rem"}>{messages.desc}</Text>
              </Stack>
            </ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Stack border={"1px solid #000"}>
                {isLoaded || loadError ? (
                  <GoogleMap
                    clickableIcons
                    mapContainerStyle={containerStyle}
                    center={position}
                    zoom={14}
                    options={{
                      zoomControl: false,
                      mapTypeControl: false,
                      scaleControl: false,
                      streetViewControl: false,
                      rotateControl: false,
                      fullscreenControl: false,
                    }}
                    onClick={handleDragOrClick}
                    onLoad={onLoad}
                    onUnmount={onUnmount}
                  >
                    <HStack pt={5} pl={5}>
                      <PlaceAutocomplete
                        placeholder={"Rechercher une adresse"}
                        required={false}
                        handleChange={handlePlaceSelect}
                        value={defaultPlace}
                        {...(defaultPlace && {
                          defaultValue: defaultPlace,
                        })}
                      />
                    </HStack>
                  </GoogleMap>
                ) : (
                  <Text>{messages.loading}</Text>
                )}
              </Stack>
            </ModalBody>
            <ModalFooter display={"flex"} justifyContent={"center"}>
              <Button
                message={messages.close}
                onClick={() => handleValidate(position)}
              />
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    );
  },
);

// DEFAULT PROPS
GoogleMapCard.defaultProps = {
  containerStyle: {
    width: "100%",
    height: "520px",
  },
  defaultPosition: {
    lat: 14.7146658,
    lng: -17.471148,
  },
  messages: {
    title: "",
    desc: "",
    close: "",
    loading: "",
  },
};
