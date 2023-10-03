# import googlemaps
# from gmplot import gmplot

# # Replace with your Google Maps API Key
# api_key = 'AIzaSyAE3VC57Az0LKqEr4vTnxxxobz7yudIqTEy'

# # Initialize Google Maps client
# gmaps = googlemaps.Client(key=api_key)

# # Get the coordinates (latitude and longitude) of the two locations
# location1 = gmaps.geocode("Location 1")[0]['geometry']['location']
# location2 = gmaps.geocode("Location 2")[0]['geometry']['location']

# # Calculate the distance between the two locations
# distance = gmaps.distance_matrix(location1, location2)['rows'][0]['elements'][0]['distance']['text']

# # Create a Google Maps plot
# gmap = gmplot.GoogleMapPlotter(location1['lat'], location1['lng'], zoom=10)

# # Add markers for both locations
# gmap.marker(location1['lat'], location1['lng'], 'cornflowerblue', title='Location 1')
# gmap.marker(location2['lat'], location2['lng'], 'red', title='Location 2')

# # Create an HTML file to display the map
# gmap.draw("map.html")

# print(f"Distance between Location 1 and Location 2: {distance}")
