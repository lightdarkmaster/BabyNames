# Baby Name Generator

Welcome to the Baby Name Generator! This site allows users to discover unique and meaningful baby names by leveraging the Ninja API. Users can filter by various categories, such as origin, gender, and popularity, to find the perfect name.

## Features

- **Filter by Origin:** Find names based on different cultural and linguistic origins.
- **Gender-based Filtering:** Easily select names based on the preferred gender.
- **Popularity Level:** Discover popular, unique, or traditional names.
- **API-powered Search:** Uses Ninja API for a wide selection of names and definitions.
  
## How It Works

The site sends user inputs to the [Ninja API](https://api-ninjas.com/api) for querying name data. The API returns a list of names based on the parameters provided, allowing for easy integration with a wide array of naming options.

### Example API Request

```python
import requests

api_url = "https://api.api-ninjas.com/v1/babynames?gender=female&origin=latin"
response = requests.get(api_url, headers={'X-Api-Key': 'YOUR_API_KEY'})

if response.status_code == 200:
    names = response.json()
    print("Names found:", names)
else:
    print("Error:", response.status_code, response.text)
