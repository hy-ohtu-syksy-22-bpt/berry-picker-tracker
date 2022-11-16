import { View, StyleSheet, Dimensions } from "react-native";

import { baseUrl, statusBarHeight, tileCacheDirectory } from "../constants";
import { useTypedSelector } from "../store";

import Mapbox from "@rnmapbox/maps";

Mapbox.setAccessToken("");

const styles = StyleSheet.create({
	map: {
		width: Dimensions.get("window").width,
		height: Dimensions.get("window").height,
		top: statusBarHeight + 50,
	},
});

function getCircleColor(color: string): string {
	switch (color) {
		case "1g":
			return "rgba(254, 112, 238, 0.05)";
		case "2g":
			return "rgba(237, 143, 236, 0.05)";
		case "3g":
			return "rgba(235, 241, 63, 0.05)";
		case "4g":
			return "rgba(105, 219, 244, 0.05)";
		case "5g":
			return "rgba(137, 243, 120, 0.05)";
		default:
			return "rgba(228, 68, 68, 0.05)";
	}
}

/**
 * Visualizes topomap using NLS tiles and draws a route between
 * route coordinate points if show route state has been set to true.
 */
const MapViewContainer = (): JSX.Element => {
	const routeInfo = useTypedSelector((state) => state.route);
	const localWaypoints = useTypedSelector(
		(state) => state.waypoints.localWaypoints
	);

	return (
		<View>
			<Mapbox.MapView styleURL={`https://pastebin.com/raw/Xaqpuvf9`} />
		</View>
	);
};

export default MapViewContainer;
