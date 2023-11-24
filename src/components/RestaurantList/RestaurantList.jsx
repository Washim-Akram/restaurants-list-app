import { useEffect, useState } from "react";

const RestaurantList = () => {
  const [restaurants, setRestaurants] = useState([]);

  const organizeData = (data) => {
    return data.reduce((acc, restaurant) => {
      const { state, restaurant_name } = restaurant;
      if (!acc[state]) {
        acc[state] = [];
      }
      acc[state].push(restaurant_name);
      return acc;
    }, {});
  };

  useEffect(() => {
    // Fetch data from the API
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://restaurants-list-app-proxy-server.vercel.app/api/restaurants"
        );
        const data = await response.json();

        // Organize data by state
        const organizedData = organizeData(data);

        // Set the organized data to the state
        setRestaurants(organizedData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-8 lg:gap-10 p-5">
      {Object.keys(restaurants).map((state) => (
        <ul key={state} className="menu bg-base-200 rounded-box">
          <li>
            <h2 className="menu-title text-base md:text-lg">{state}:</h2>
            <ul style={{ listStyleType: "circle", paddingLeft: "1.5rem" }}>
              {restaurants[state].map((restaurant, index) => (
                <li key={index} className="list-disc font-mono">
                  {restaurant}
                </li>
              ))}
            </ul>
          </li>
        </ul>
      ))}
    </div>
  );
};

export default RestaurantList;
