export type BuildingLocation = {
  latitude: number;
  longitude: number;
  formattedAddress: string;
  houseNumber: string;
};

type GeoapifyResult = {
  lat?: number;
  lon?: number;
  formatted?: string;
  housenumber?: string;
  rank?: {
    confidence_building_level?: number;
  };
};

type GeoapifyResponse = {
  results?: GeoapifyResult[];
};

const BUILDING_CONFIDENCE_THRESHOLD = 0.95;

export async function geocodeBuildingAddress(
  address: string,
  postcode: string,
): Promise<BuildingLocation | null> {
  const apiKey = import.meta.env.VITE_GEOAPIFY_API_KEY;

  if (!apiKey) {
    throw new Error("Geoapify API key is missing.");
  }

  const query = new URLSearchParams({
    text: `${address.trim()}, ${postcode.trim()}, United Kingdom`,
    format: "json",
    limit: "5",
    filter: "countrycode:gb",
    apiKey,
  });

  const response = await fetch(
    `https://api.geoapify.com/v1/geocode/search?${query.toString()}`,
  );

  if (!response.ok) {
    throw new Error("The address lookup request failed.");
  }

  const data = (await response.json()) as GeoapifyResponse;

  const building = data.results?.find(
    (result) =>
      typeof result.lat === "number" &&
      typeof result.lon === "number" &&
      Boolean(result.housenumber) &&
      (result.rank?.confidence_building_level ?? 0) >=
        BUILDING_CONFIDENCE_THRESHOLD,
  );

  if (
    !building ||
    typeof building.lat !== "number" ||
    typeof building.lon !== "number" ||
    !building.housenumber
  ) {
    return null;
  }

  return {
    latitude: building.lat,
    longitude: building.lon,
    formattedAddress: building.formatted ?? "",
    houseNumber: building.housenumber,
  };
}
